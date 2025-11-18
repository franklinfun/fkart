# 📱 Build APK - Complete Guide

Follow these steps to build and upload your APK to GitHub.

## Step 1: Install EAS CLI (Already Done)

```bash
npm install -g eas-cli
```

## Step 2: Login to Expo

You need an Expo account (free):

1. Go to [expo.dev](https://expo.dev) and sign up (if you don't have an account)
2. Run:
   ```bash
   eas login
   ```
3. Enter your Expo credentials

## Step 3: Configure Build

```bash
eas build:configure
```

This will:
- Use the existing `eas.json` file
- Set up build profiles

## Step 4: Build APK

```bash
eas build -p android --profile preview
```

**This will:**
- Build your APK in the cloud
- Take 10-15 minutes
- Show progress in terminal
- Provide download link when complete

## Step 5: Download APK

1. Wait for build to complete
2. You'll get a URL like: `https://expo.dev/artifacts/...`
3. Visit the URL and download the APK file
4. Save it as: `fkart-v1.0.0.apk`

## Step 6: Upload to GitHub Releases

### Option A: Using GitHub Web Interface

1. Go to: https://github.com/franklinfun/fkart/releases/new
2. **Tag version:** `v1.0.0`
3. **Release title:** `FKart v1.0.0 - Initial Release`
4. **Description:**
   ```markdown
   ## 🎉 FKart v1.0.0 - Initial Release
   
   ### ✨ Features
   - Complete e-commerce UI with beautiful design
   - Shopping cart functionality
   - User authentication screens
   - Product browsing and details
   - Profile and settings management
   - Orange and blue theme
   
   ### 📱 Installation
   1. Download the APK from assets below
   2. Enable "Install from Unknown Sources" on your Android device
   3. Install the APK
   4. Open and enjoy!
   
   ### 🛠️ Tech Stack
   - React Native 0.72.6
   - Expo 49.0.15
   - React Navigation 6.x
   ```
5. **Attach binaries:** Drag and drop your APK file
6. Click **"Publish release"**

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI (if not installed)
# Download from: https://cli.github.com

# Create release with APK
gh release create v1.0.0 fkart-v1.0.0.apk \
  --title "FKart v1.0.0 - Initial Release" \
  --notes "Complete e-commerce mobile app"
```

## Step 7: Verify

1. Visit: https://github.com/franklinfun/fkart/releases
2. You should see v1.0.0 release
3. APK should be downloadable
4. ✅ Done!

---

## 🚀 Quick Build Script

Save this as `build-and-release.sh`:

```bash
#!/bin/bash
echo "🚀 Building APK..."
eas build -p android --profile preview

echo "✅ Build complete! Download APK and upload to GitHub Releases"
echo "📱 Visit: https://github.com/franklinfun/fkart/releases/new"
```

---

## ⚠️ Troubleshooting

### Build Fails
- Check Expo CLI version: `npx expo --version`
- Update dependencies: `npm update`
- Clear cache: `npx expo start -c`

### Can't Login
- Make sure you have Expo account
- Try: `eas logout` then `eas login` again

### APK Won't Install
- Enable "Install from Unknown Sources" in Android settings
- Check APK file is not corrupted
- Try downloading again

---

## 📚 Resources

- [EAS Build Docs](https://docs.expo.dev/build/introduction/)
- [GitHub Releases Guide](https://docs.github.com/en/repositories/releasing-projects-on-github)

---

**Ready to build?** Start with Step 2 (Login to Expo)!

