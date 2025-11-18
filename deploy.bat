@echo off
REM FKart Deployment Script for Windows

echo 🚀 Starting FKart Deployment...

REM Check if git is initialized
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Commit
echo 💾 Creating initial commit...
git commit -m "Initial commit: FKart e-commerce app with beautiful UI"

echo ✅ Git repository ready!
echo.
echo 📋 Next steps:
echo 1. Create a new repository on GitHub (https://github.com/new)
echo 2. Name it 'fkart' (or your preferred name)
echo 3. Make it PUBLIC
echo 4. Don't initialize with README (we already have one)
echo 5. Copy the repository URL
echo 6. Run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/fkart.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 🎉 After pushing, follow DEPLOYMENT.md to build APK!
pause

