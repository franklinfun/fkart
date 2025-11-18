@echo off
REM Upload APK to GitHub Releases
echo ========================================
echo   Upload APK to GitHub Releases
echo ========================================
echo.

if not exist "fkart.apk" (
    echo ⚠️  APK file not found!
    echo.
    echo Please:
    echo 1. Download your APK from Expo
    echo 2. Rename it to: fkart.apk
    echo 3. Place it in this directory
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

echo ✅ APK file found: fkart.apk
echo.

REM Check if GitHub CLI is installed
where gh >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo GitHub CLI not found. Using web interface method...
    echo.
    echo Please:
    echo 1. Go to: https://github.com/franklinfun/fkart/releases/new
    echo 2. Tag: v1.0.0
    echo 3. Title: FKart v1.0.0 - Initial Release
    echo 4. Upload: fkart.apk
    echo 5. Description: Copy from RELEASE_TEMPLATE.md
    echo 6. Click "Publish release"
    echo.
    echo APK location: %CD%\fkart.apk
    echo.
    pause
    exit /b 0
)

echo Using GitHub CLI to create release...
echo.

REM Create release with GitHub CLI
gh release create v1.0.0 fkart.apk ^
    --title "FKart v1.0.0 - Initial Release" ^
    --notes-file RELEASE_TEMPLATE.md

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ Release Created Successfully!
    echo ========================================
    echo.
    echo Your APK is now available at:
    echo https://github.com/franklinfun/fkart/releases
    echo.
) else (
    echo.
    echo ⚠️  Release creation failed.
    echo Please use web interface:
    echo https://github.com/franklinfun/fkart/releases/new
    echo.
)

pause

