# Development Server Startup Scripts

This project includes automated startup scripts that handle port cleanup and server initialization for the Next.js development environment.

## 🚀 Quick Start

### macOS/Linux
```bash
./startup.sh
```

### Windows
```cmd
startup.bat
```

## 📋 What the Scripts Do

1. **Port Cleanup**: Automatically finds and terminates any processes using the target port
2. **Dependency Check**: Ensures `node_modules` exists and installs dependencies if needed
3. **Server Launch**: Starts the Next.js development server on the specified port

## 🔧 Usage Options

### Default Port (3001)
```bash
# macOS/Linux
./startup.sh

# Windows
startup.bat
```

### Custom Port
```bash
# macOS/Linux
./startup.sh 3005

# Windows
startup.bat 3005
```

## 🛠️ Script Features

### Unix/Linux Script (`startup.sh`)
- **Graceful Shutdown**: Attempts `SIGTERM` before `SIGKILL`
- **Port Verification**: Double-checks that ports are actually freed
- **Error Handling**: Exits with proper error codes
- **Dependency Management**: Auto-installs npm packages if missing

### Windows Script (`startup.bat`)
- **Process Termination**: Uses `taskkill` to force-close port conflicts
- **Cross-Platform Compatibility**: Windows-specific commands and syntax
- **Pause on Error**: Keeps terminal open to view error messages

## 🔍 Troubleshooting

### Permission Denied (macOS/Linux)
```bash
chmod +x startup.sh
```

### Port Still in Use
If the script reports that it can't clear the port:

**macOS/Linux:**
```bash
# Manual port check
lsof -i :3001

# Manual kill
sudo lsof -ti :3001 | xargs kill -9
```

**Windows:**
```cmd
# Manual port check
netstat -ano | findstr :3001

# Manual kill (replace PID with actual process ID)
taskkill /F /PID <PID>
```

### Node Modules Issues
If dependencies fail to install:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## ⚙️ Configuration

### Changing Default Port
Edit the script files to change the default port:

**In `startup.sh`:**
```bash
DEFAULT_PORT=3005  # Change this line
```

**In `startup.bat`:**
```cmd
set DEFAULT_PORT=3005
```

### Adding Custom Environment Variables
You can modify the scripts to set environment variables:

```bash
# Add before npm run dev
export NODE_ENV=development
export CUSTOM_VAR=value
```

## 🔒 Security Notes

- Scripts require permission to kill processes
- On macOS/Linux, you may need `sudo` for system processes
- Windows may require "Run as Administrator" for certain processes

## 🐛 Common Issues

### Issue: "Command not found: lsof"
**Solution**: Install `lsof` package or use alternative commands

### Issue: "Permission denied" on Windows
**Solution**: Run Command Prompt as Administrator

### Issue: Next.js fails to start
**Solution**: Check if `package.json` exists and contains the `dev` script

## 📝 Customization

To add more functionality, you can modify the scripts:

1. **Add environment setup**
2. **Include database startup**
3. **Open browser automatically**
4. **Clear cache/logs**

Example enhancement:
```bash
# Add to startup.sh before starting server
echo "🧹 Clearing Next.js cache..."
rm -rf .next

echo "🌐 Server will open in browser..."
sleep 5 && open http://localhost:$PORT &
```

## 📞 Support

If you encounter issues with the startup scripts:

1. Check the terminal output for specific error messages
2. Verify you're in the correct project directory
3. Ensure Node.js and npm are installed
4. Try running `npm run dev` manually to isolate issues 