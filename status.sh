# Quick Development Status

echo "📊 AI/OS Development Status"
echo "=========================="
echo ""

# Current branch
branch=$(git branch --show-current)
echo "🌿 Current Branch: $branch"

# Modified files
modified=$(git status --porcelain | wc -l)
echo "📝 Modified Files: $modified"

# Last commit
echo "📌 Last Commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"

# Node version
echo "📦 Node Version: $(node -v)"

# Local server check
if lsof -i:3000 > /dev/null 2>&1; then
    echo "🟢 Dev Server: Running on http://localhost:3000"
else
    echo "🔴 Dev Server: Not running"
fi

echo ""
echo "🚀 Production URL: https://aios.vercel.app (or your custom domain)"
echo "📋 Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "Quick Commands:"
echo "  npm run dev    - Start development server"
echo "  ./dev-helper.sh - Launch development helper menu"
