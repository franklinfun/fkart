# 🚀 Complete APK Build Instructions

Your repository is ready! Follow these steps to build and publish your APK.

## ✅ Current Status

- ✅ Code pushed to GitHub: https://github.com/franklinfun/fkart
- ✅ EAS CLI installed
- ✅ Build configuration ready
- ✅ GitHub Actions workflow ready
- ⏳ Need to: Build APK and upload to Releases

---

## 🎯 Option 1: Quick Build (Recommended)

### Step 1: Login to Expo

```bash
eas login
```

You'll need an Expo account (free):
- Sign up at: https://expo.dev
- Or use existing account

### Step 2: Build APK

```bash
eas build -p android --profile preview
```

**This will:**
- Build APK in the cloud
- Take 10-15 minutes
- Show progress in terminal
- Give you a download URL

### Step 3: Download APK

1. Wait for build to complete
2. Copy the download URL from terminal
3. Open URL in browser
4. Download the APK file
5. Save as: `fkart-v1.0.0.apk`

### Step 4: Upload to GitHub Releases

1. Go to: https://github.com/franklinfun/fkart/releases/new
2. **Tag version:** `v1.0.0`
3. **Release title:** `FKart v1.0.0 - Initial Release`
4. **Description:** Copy from `RELEASE_TEMPLATE.md`
5. **Attach binaries:** Drag and drop your APK file
6. Click **"Publish release"**

✅ **Done!** Your APK is now available at:
https://github.com/franklinfun/fkart/releases

---

## 🎯 Option 2: Automated Build (Advanced)

### Setup (One Time)

1. **Get Expo Token:**
   - Go to: https://expo.dev/accounts/[your-username]/settings/access-tokens
   - Create token named: `github-actions-fkart`
   - Copy the token

2. **Add to GitHub:**
   - Go to: https://github.com/franklinfun/fkart/settings/secrets/actions
   - Click "New repository secret"
   - Name: `EXPO_TOKEN`
   - Value: Paste your token
   - Click "Add secret"

### Build Automatically

1. Go to: https://github.com/franklinfun/fkart/actions
2. Click "Build and Release APK"
3. Click "Run workflow"
4. Select branch: `main`
5. Click "Run workflow"

The workflow will:
- Build APK automatically
- Create GitHub release
- Upload APK to releases

**Or trigger with a tag:**
```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 🎯 Option 3: Use Build Script

Run the automated script:

**Windows:**
```bash
build-and-release.bat
```

**Linux/Mac:**
```bash
chmod +x build-and-release.sh
./build-and-release.sh
```

---

## 📋 Quick Checklist

- [ ] Expo account created
- [ ] Logged in: `eas login`
- [ ] APK built: `eas build -p android --profile preview`
- [ ] APK downloaded
- [ ] GitHub release created
- [ ] APK uploaded to release
- [ ] Release published
- [ ] APK link added to README

---

## 🔗 Important Links

- **Repository:** https://github.com/franklinfun/fkart
- **Releases:** https://github.com/franklinfun/fkart/releases
- **Actions:** https://github.com/franklinfun/fkart/actions
- **Expo Dashboard:** https://expo.dev

---

## ⚠️ Troubleshooting

### "Not logged in"
```bash
eas login
```

### "Build failed"
- Check Expo account is active
- Verify `eas.json` is correct
- Try: `eas build:configure`

### "Can't download APK"
- Check build completed successfully
- Try the download URL again
- Check Expo dashboard for build status

### "APK won't install"
- Enable "Install from Unknown Sources" in Android
- Settings → Security → Unknown Sources
- Or: Settings → Apps → Special Access → Install Unknown Apps

---

## 🎉 After Building

Once your APK is on GitHub Releases:

1. ✅ Update README with download link (already done!)
2. ✅ Share on LinkedIn/Portfolio
3. ✅ Add to resume
4. ✅ Star your own repo! ⭐

---

**Ready to build?** Start with `eas login`!

