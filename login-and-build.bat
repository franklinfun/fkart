@echo off
echo ========================================
echo   FKart - Login and Build APK
echo ========================================
echo.
echo Your Expo account: franklinfun
echo.
echo Step 1: Logging in to Expo...
echo (Enter your Expo credentials when prompted)
echo.
eas login

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Login failed. Please try again.
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
    echo 1. Wait for build to complete (check terminal or Expo dashboard)
    echo 2. Download APK from the URL shown above
    echo 3. Rename to: fkart.apk
    echo 4. Run: upload-to-github.bat
    echo.
    echo Or visit: https://expo.dev/accounts/franklinfun/projects/fkart/builds
    echo.
) else (
    echo.
    echo ❌ Build failed. Please check the error above.
    echo.
)

pause

