#!/bin/bash

# Startup script for Next.js development server
# Usage: ./startup.sh [port]
# Default port: 3001

# Set default port
DEFAULT_PORT=3001
PORT=${1:-$DEFAULT_PORT}

echo "🚀 Starting development server on port $PORT..."

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Port is in use
    else
        return 1  # Port is free
    fi
}

# Function to kill processes on port
kill_port() {
    local port=$1
    echo "🔍 Checking for processes on port $port..."
    
    # Find and kill processes using the port
    local pids=$(lsof -ti :$port)
    
    if [ -n "$pids" ]; then
        echo "⚠️  Found processes using port $port: $pids"
        echo "🛑 Terminating processes..."
        
        # Try graceful termination first
        echo "$pids" | xargs kill -TERM 2>/dev/null
        
        # Wait a moment for graceful shutdown
        sleep 2
        
        # Check if any processes are still running
        local remaining_pids=$(lsof -ti :$port)
        if [ -n "$remaining_pids" ]; then
            echo "💀 Force killing remaining processes..."
            echo "$remaining_pids" | xargs kill -KILL 2>/dev/null
        fi
        
        # Final check
        sleep 1
        if check_port $port; then
            echo "❌ Failed to clear port $port"
            exit 1
        else
            echo "✅ Port $port cleared successfully"
        fi
    else
        echo "✅ Port $port is already free"
    fi
}

# Function to start the development server
start_server() {
    local port=$1
    echo "🎯 Starting Next.js development server on port $port..."
    
    # Check if package.json exists
    if [ ! -f "package.json" ]; then
        echo "❌ Error: package.json not found. Make sure you're in the project directory."
        exit 1
    fi
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
    fi
    
    # Start the development server
    npm run dev -- --port $port
}

# Main execution
echo "🧹 Cleaning up port $PORT..."
kill_port $PORT

echo "⏱️  Waiting 2 seconds before starting server..."
sleep 2

# Start the server
start_server $PORT 