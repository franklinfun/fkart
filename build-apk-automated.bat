@echo off
REM Automated APK Build Script for FKart
echo ========================================
echo   FKart - Automated APK Build
echo ========================================
echo.

REM Check if logged in
echo Checking Expo login status...
eas whoami >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️  Not logged in to Expo
    echo.
    echo Please login first:
    echo    eas login
    echo.
    echo Or create account at: https://expo.dev
    echo.
    pause
    exit /b 1
)

echo ✅ Logged in to Expo
echo.

REM Configure build (if needed)
echo Configuring build...
eas build:configure --non-interactive
echo.

REM Start build
echo ========================================
echo   Starting APK Build...
echo   This will take 10-15 minutes
echo ========================================
echo.

eas build -p android --profile preview --non-interactive

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ Build Started Successfully!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Wait for build to complete (check terminal or Expo dashboard)
    echo 2. Download APK from the URL shown above
    echo 3. Go to: https://github.com/franklinfun/fkart/releases/new
    echo 4. Create release v1.0.0 and upload APK
    echo.
    echo Or run: upload-to-github.bat (after downloading APK)
    echo.
) else (
    echo.
    echo ❌ Build failed. Please check the error above.
    echo.
)

pause

