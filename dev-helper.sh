#!/bin/bash

# AI/OS Development Helper Script
# This script helps you manage your development workflow

echo "🚀 AI/OS Development Helper"
echo "=========================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to show menu
show_menu() {
    echo "What would you like to do?"
    echo ""
    echo "1) Start local development server"
    echo "2) Check git status"
    echo "3) Deploy to production (main branch)"
    echo "4) Create feature branch for preview"
    echo "5) Build and test locally"
    echo "6) Pull latest changes from main"
    echo "7) View recent deployments"
    echo "8) Clean build and reinstall"
    echo "9) Exit"
    echo ""
}

# Function to check if we're on main branch
check_main_branch() {
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        echo -e "${YELLOW}⚠️  You're on branch: $current_branch${NC}"
        echo -e "${YELLOW}   Pushing will create a preview deployment${NC}"
        echo ""
    fi
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice (1-9): " choice
    echo ""
    
    case $choice in
        1)
            echo -e "${GREEN}Starting development server...${NC}"
            echo "Visit http://localhost:3000"
            echo "Press Ctrl+C to stop"
            npm run dev
            ;;
        2)
            echo -e "${BLUE}Git Status:${NC}"
            git status
            echo ""
            check_main_branch
            ;;
        3)
            echo -e "${YELLOW}Deploying to production...${NC}"
            check_main_branch
            current_branch=$(git branch --show-current)
            
            if [ "$current_branch" != "main" ]; then
                echo -e "${RED}You're not on main branch!${NC}"
                read -p "Switch to main and continue? (y/n): " confirm
                if [ "$confirm" = "y" ]; then
                    git checkout main
                else
                    echo "Deployment cancelled"
                    continue
                fi
            fi
            
            echo "Running build test first..."
            npm run build
            
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}Build successful!${NC}"
                git add .
                read -p "Enter commit message: " commit_msg
                git commit -m "$commit_msg"
                git push origin main
                echo -e "${GREEN}✅ Deployed to production!${NC}"
                echo "Check your Vercel dashboard for deployment status"
            else
                echo -e "${RED}Build failed! Fix errors before deploying.${NC}"
            fi
            ;;
        4)
            read -p "Enter feature branch name (e.g., update-homepage): " branch_name
            git checkout -b "feature/$branch_name"
            echo -e "${GREEN}Created branch: feature/$branch_name${NC}"
            echo "Push to this branch for preview deployments"
            ;;
        5)
            echo -e "${BLUE}Building project locally...${NC}"
            npm run build
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}Build successful!${NC}"
                echo "Run 'npm start' to test production build"
            else
                echo -e "${RED}Build failed!${NC}"
            fi
            ;;
        6)
            echo -e "${BLUE}Pulling latest changes...${NC}"
            git pull origin main
            echo "Installing any new dependencies..."
            npm install
            echo -e "${GREEN}Updated!${NC}"
            ;;
        7)
            echo -e "${BLUE}Recent commits:${NC}"
            git log --oneline -10
            echo ""
            echo "Visit your Vercel dashboard to see deployment status"
            echo "https://vercel.com/dashboard"
            ;;
        8)
            echo -e "${YELLOW}Cleaning and reinstalling...${NC}"
            rm -rf .next node_modules
            npm install
            echo -e "${GREEN}Clean install complete!${NC}"
            ;;
        9)
            echo -e "${GREEN}Happy coding! 🚀${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid choice. Please try again.${NC}"
            ;;
    esac
    
    echo ""
    echo "Press Enter to continue..."
    read
    clear
done
