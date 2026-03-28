@echo off
echo Stopping existing dev servers on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)
timeout /t 2 /nobreak >nul
echo Cleaning .next cache...
rmdir /s /q .next 2>nul
echo Starting dev server on http://localhost:3000...
npm run dev
