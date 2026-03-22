#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────
# test-pages.sh — Quick health check for all Dacoda pages
#
# Usage:
#   bash scripts/test-pages.sh          (uses port 3000)
#   bash scripts/test-pages.sh 3002     (custom port)
#
# What it does:
#   1. Checks if dev server is running, starts it if not
#   2. Hits every page and reports HTTP status codes
#   3. Validates JSON-LD schema.org exists on key pages
#   4. Runs production build + lint
#   5. Prints a summary with pass/fail
# ─────────────────────────────────────────────────────────────────

PORT="${1:-3000}"
BASE="http://localhost:$PORT"
PASS=0
FAIL=0
WARN=0
STARTED_SERVER=false

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

log_pass() { echo -e "  ${GREEN}✓${NC} $1"; ((PASS++)); }
log_fail() { echo -e "  ${RED}✗${NC} $1"; ((FAIL++)); }
log_warn() { echo -e "  ${YELLOW}⚠${NC} $1"; ((WARN++)); }
log_header() { echo -e "\n${CYAN}${BOLD}── $1 ──${NC}"; }

# ── Step 1: Check if dev server is running ──────────────────────
log_header "Step 1: Checking dev server on port $PORT"

if curl -s -o /dev/null -w "" --connect-timeout 2 "$BASE" 2>/dev/null; then
  log_pass "Dev server already running on port $PORT"
else
  echo -e "  ${YELLOW}→${NC} Dev server not detected. Starting it..."
  cd "$(dirname "$0")/.." || exit 1
  npm run dev &>/dev/null &
  DEV_PID=$!
  STARTED_SERVER=true

  # Wait for server to be ready (max 30s)
  for i in $(seq 1 30); do
    if curl -s -o /dev/null -w "" --connect-timeout 1 "$BASE" 2>/dev/null; then
      break
    fi
    sleep 1
  done

  if curl -s -o /dev/null -w "" --connect-timeout 2 "$BASE" 2>/dev/null; then
    log_pass "Dev server started (PID $DEV_PID)"
  else
    # Try common alternate ports
    for ALT_PORT in 3001 3002 3003; do
      if curl -s -o /dev/null -w "" --connect-timeout 1 "http://localhost:$ALT_PORT" 2>/dev/null; then
        PORT=$ALT_PORT
        BASE="http://localhost:$PORT"
        log_warn "Server started on alternate port $PORT (original was in use)"
        break
      fi
    done
  fi
fi

# ── Step 2: Check all pages return 200 ──────────────────────────
log_header "Step 2: HTTP status check on all pages"

PAGES=(
  "/"
  "/servicii"
  "/servicii/transport-rutier"
  "/servicii/transport-adr"
  "/servicii/transport-frigorific"
  "/servicii/transport-agabaritic"
  "/servicii/aerian-maritim"
  "/cerere-oferta"
  "/rute"
  "/blog"
  "/despre-noi"
  "/contact"
  "/transportatori"
  "/cariere"
)

for page in "${PAGES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 "$BASE$page" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    log_pass "$page → $STATUS"
  elif [ "$STATUS" = "000" ]; then
    log_fail "$page → Connection refused"
  else
    log_fail "$page → $STATUS"
  fi
done

# ── Step 3: Validate JSON-LD schema on key pages ────────────────
log_header "Step 3: Schema.org JSON-LD validation"

check_schema() {
  local page="$1"
  local schema_type="$2"
  local body
  body=$(curl -s --connect-timeout 5 "$BASE$page" 2>/dev/null)

  if echo "$body" | grep -q "application/ld+json"; then
    if echo "$body" | grep -q "\"@type\":\"$schema_type\"\|\"@type\": \"$schema_type\"\|\"@type\":\\[.*\"$schema_type\""; then
      log_pass "$page has $schema_type schema"
    elif echo "$body" | grep -q "$schema_type"; then
      log_pass "$page has $schema_type schema"
    else
      log_warn "$page has JSON-LD but missing $schema_type"
    fi
  else
    log_fail "$page — no JSON-LD found"
  fi
}

check_schema "/" "FreightForwarder"
check_schema "/" "WebSite"
check_schema "/servicii/transport-rutier" "Service"
check_schema "/servicii/transport-rutier" "FAQPage"
check_schema "/servicii/transport-rutier" "BreadcrumbList"
check_schema "/servicii/transport-adr" "FAQPage"
check_schema "/servicii/transport-frigorific" "FAQPage"
check_schema "/servicii/transport-agabaritic" "FAQPage"
check_schema "/servicii/aerian-maritim" "Service"

# Check a blog article if one exists
BLOG_BODY=$(curl -s --connect-timeout 5 "$BASE/blog" 2>/dev/null)
FIRST_SLUG=$(echo "$BLOG_BODY" | grep -o 'href="/blog/[^"]*' | head -1 | sed 's|href="/blog/||')
if [ -n "$FIRST_SLUG" ]; then
  check_schema "/blog/$FIRST_SLUG" "Article"
else
  log_warn "No blog articles found to test Article schema"
fi

# ── Step 4: Check sitemap ───────────────────────────────────────
log_header "Step 4: Sitemap validation"

SITEMAP=$(curl -s --connect-timeout 5 "$BASE/sitemap.xml" 2>/dev/null)
if echo "$SITEMAP" | grep -q "<urlset"; then
  log_pass "sitemap.xml is valid XML"
else
  log_fail "sitemap.xml not found or invalid"
fi

for CHECK_URL in "/rute" "/cariere" "/blog/"; do
  if echo "$SITEMAP" | grep -q "$CHECK_URL"; then
    log_pass "sitemap.xml contains $CHECK_URL"
  else
    log_fail "sitemap.xml missing $CHECK_URL"
  fi
done

# ── Step 5: Production build ────────────────────────────────────
log_header "Step 5: Production build"

cd "$(dirname "$0")/.." || exit 1
BUILD_OUTPUT=$(npm run build 2>&1)
BUILD_EXIT=$?

if [ $BUILD_EXIT -eq 0 ]; then
  log_pass "npm run build succeeded"
else
  log_fail "npm run build failed"
  echo "$BUILD_OUTPUT" | grep "Error" | head -10
fi

# ── Summary ─────────────────────────────────────────────────────
log_header "Summary"
echo -e "  ${GREEN}Passed:${NC}  $PASS"
echo -e "  ${RED}Failed:${NC}  $FAIL"
echo -e "  ${YELLOW}Warnings:${NC} $WARN"
echo ""

if [ $FAIL -eq 0 ]; then
  echo -e "  ${GREEN}${BOLD}All checks passed!${NC}"
else
  echo -e "  ${RED}${BOLD}$FAIL check(s) failed — see above for details.${NC}"
fi

# Cleanup: stop server if we started it
if [ "$STARTED_SERVER" = true ] && [ -n "$DEV_PID" ]; then
  kill $DEV_PID 2>/dev/null
fi

echo ""
exit $FAIL
