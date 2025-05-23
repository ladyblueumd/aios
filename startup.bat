@echo off
REM Startup script for Next.js development server (Windows)
REM Usage: startup.bat [port]
REM Default port: 3001

setlocal enabledelayedexpansion

REM Set default port
set DEFAULT_PORT=3001
if "%1"=="" (
    set PORT=%DEFAULT_PORT%
) else (
    set PORT=%1
)

echo 🚀 Starting development server on port %PORT%...

REM Function to kill processes on port
echo 🔍 Checking for processes on port %PORT%...

REM Find processes using the port
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":%PORT%"') do (
    set PID=%%a
    if !PID! neq 0 (
        echo ⚠️  Found process using port %PORT%: !PID!
        echo 🛑 Terminating process !PID!...
        taskkill /F /PID !PID! >nul 2>&1
    )
)

echo ✅ Port %PORT% cleared

REM Check if package.json exists
if not exist "package.json" (
    echo ❌ Error: package.json not found. Make sure you're in the project directory.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

echo ⏱️  Waiting 2 seconds before starting server...
timeout /t 2 /nobreak >nul

echo 🎯 Starting Next.js development server on port %PORT%...
npm run dev -- --port %PORT%

pause 