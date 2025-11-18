@echo off
echo ========================================
echo   FKart - Complete Build Process
echo ========================================
echo.

echo Step 1: Checking Expo login...
eas whoami
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️  Not logged in. Please login:
    echo.
    eas login
    echo.
    echo Press any key to continue after login...
    pause
)

echo.
echo Step 2: Building APK...
echo This will take 10-15 minutes...
echo.
eas build -p android --profile preview

echo.
echo ========================================
echo   Build Complete!
echo ========================================
echo.
echo Next: Download APK and upload to GitHub
echo See: ACTION_REQUIRED.md
echo.
pause

