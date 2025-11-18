@echo off
REM FKart Build and Release Script

echo ========================================
echo   FKart - Build APK and Release
echo ========================================
echo.

echo Step 1: Checking EAS CLI...
where eas >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo EAS CLI not found. Installing...
    npm install -g eas-cli
) else (
    echo EAS CLI is installed.
)
echo.

echo Step 2: Login to Expo (if not already logged in)
echo Please login to Expo when prompted...
eas login
echo.

echo Step 3: Building APK...
echo This will take 10-15 minutes...
eas build -p android --profile preview
echo.

echo ========================================
echo   Build Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Download the APK from the URL shown above
echo 2. Go to: https://github.com/franklinfun/fkart/releases/new
echo 3. Create release v1.0.0
echo 4. Upload the APK file
echo 5. Publish release
echo.
pause

