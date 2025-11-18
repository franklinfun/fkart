@echo off
echo ========================================
echo   FKart - After Signup Setup
echo ========================================
echo.
echo Your Expo account details:
echo Email: franklin.bn231@gmail.com
echo Username: FRANKLINFUN
echo.
echo Step 1: Logging in to Expo...
echo (Enter your password when prompted)
echo.
eas login

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Login failed. Please check your credentials.
    echo Make sure you completed the signup on the website.
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Login successful!
echo.
echo Step 2: Starting APK build...
echo This will take 10-15 minutes...
echo.
eas build -p android --profile preview

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ Build Started Successfully!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Wait for build to complete (10-15 minutes)
    echo 2. Check build status at:
    echo    https://expo.dev/accounts/FRANKLINFUN/projects/fkart/builds
    echo 3. Download APK when ready
    echo 4. Rename to: fkart.apk
    echo 5. Run: upload-to-github.bat
    echo.
) else (
    echo.
    echo ❌ Build failed. Please check the error above.
    echo.
)

pause

