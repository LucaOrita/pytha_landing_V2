#!/bin/bash
# Kill any existing Next.js dev servers, clean cache, start fresh on port 3000
echo "Stopping existing dev servers..."
for pid in $(netstat -ano 2>/dev/null | grep ':3000 ' | grep LISTENING | awk '{print $5}' | sort -u); do
  cmd //c "taskkill /PID $pid /F" 2>/dev/null
done
sleep 1
echo "Cleaning .next cache..."
rm -rf .next
echo "Starting dev server on http://localhost:3000..."
npm run dev
