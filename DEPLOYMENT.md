# 🚀 Deployment Guide - FKart

This guide will help you deploy your FKart app to GitHub and create a downloadable APK.

## 📋 Prerequisites

1. **GitHub Account** - Free account is sufficient
2. **Expo Account** - Sign up at [expo.dev](https://expo.dev) (free)
3. **Node.js** - Version 16 or higher
4. **Git** - Installed on your system

---

## 🔧 Step 1: Prepare Your Project

### 1.1 Update Repository Information

Update the README.md with your GitHub username:

```markdown
git clone https://github.com/YOUR_USERNAME/fkart.git
```

### 1.2 Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: FKart e-commerce app"
```

---

## 📤 Step 2: Push to GitHub

### 2.1 Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name it: `fkart` (or your preferred name)
4. Make it **Public** (for free hosting)
5. **Don't** initialize with README (we already have one)
6. Click **Create repository**

### 2.2 Connect and Push

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/fkart.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 📱 Step 3: Build APK

### Option A: Using EAS Build (Recommended - Free)

#### 3.1 Install EAS CLI

```bash
npm install -g eas-cli
```

#### 3.2 Login to Expo

```bash
eas login
```

#### 3.3 Configure Build

```bash
eas build:configure
```

Select:
- **Platform:** Android
- **Build profile:** preview

#### 3.4 Build APK

```bash
eas build -p android --profile preview
```

This will:
- Build your APK in the cloud
- Take 10-15 minutes
- Provide a download link when complete

#### 3.5 Download APK

1. Visit the build URL provided in terminal
2. Wait for build to complete
3. Download the APK file

---

### Option B: Using Expo Build (Legacy - Still Works)

```bash
# Login to Expo
npx expo login

# Build APK
npx expo build:android -t apk
```

---

## 📦 Step 4: Upload APK to GitHub Releases

### 4.1 Create a Release

1. Go to your GitHub repository
2. Click **Releases** (right sidebar)
3. Click **Create a new release**

### 4.2 Fill Release Information

- **Tag version:** `v1.0.0`
- **Release title:** `FKart v1.0.0 - Initial Release`
- **Description:**

```markdown
## 🎉 FKart v1.0.0

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

### 📸 Screenshots
Add screenshots of your app here!

### 🔗 Links
- Repository: [GitHub](https://github.com/YOUR_USERNAME/fkart)
- Issues: [Report Bug](https://github.com/YOUR_USERNAME/fkart/issues)
```

### 4.3 Upload APK

1. Drag and drop your APK file in the **Attach binaries** section
2. Click **Publish release**

---

## 🎨 Step 5: Add Screenshots to README

### 5.1 Take Screenshots

Take screenshots of your app running on:
- Splash screen
- Dashboard
- Product details
- Cart
- Profile

### 5.2 Upload Screenshots

1. Create a `screenshots/` folder in your repo
2. Add your screenshots
3. Update README.md with actual image paths:

```markdown
![Splash](screenshots/splash.png)
![Dashboard](screenshots/dashboard.png)
```

### 5.3 Alternative: Use Image Hosting

Upload to:
- [Imgur](https://imgur.com)
- [GitHub Issues](https://github.com) (drag & drop)
- [Cloudinary](https://cloudinary.com)

Then use the URLs in README.

---

## 🔄 Step 6: Update README

Update these sections in README.md:

1. **Repository URLs** - Replace `yourusername` with your GitHub username
2. **Author Information** - Add your details
3. **Screenshots** - Add actual app screenshots
4. **APK Download Link** - Add link to GitHub release

---

## ✅ Step 7: Verify Everything

Checklist:

- [ ] Code pushed to GitHub
- [ ] README.md updated with your information
- [ ] APK built and downloaded
- [ ] APK uploaded to GitHub Releases
- [ ] Screenshots added to README
- [ ] Repository is public
- [ ] All links work correctly

---

## 🎯 Step 8: Share Your App

### Share on:

1. **GitHub** - Your repository is now public
2. **LinkedIn** - Post about your project
3. **Portfolio** - Add to your portfolio website
4. **Resume** - Mention in your resume

### Example LinkedIn Post:

```
🚀 Just published my new React Native e-commerce app - FKart!

✨ Features:
- Beautiful UI with orange & blue theme
- Complete shopping experience
- Built with React Native & Expo

📱 Download: [GitHub Release Link]
💻 Code: [GitHub Repository Link]

#ReactNative #MobileApp #ECommerce #OpenSource
```

---

## 🐛 Troubleshooting

### Build Fails

- Check Expo CLI version: `npx expo --version`
- Update dependencies: `npm update`
- Clear cache: `npx expo start -c`

### APK Won't Install

- Enable "Install from Unknown Sources" in Android settings
- Check APK file is not corrupted
- Try downloading again

### GitHub Push Issues

- Check Git credentials
- Verify remote URL: `git remote -v`
- Force push if needed: `git push -f origin main` (use carefully!)

---

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev)
- [EAS Build Guide](https://docs.expo.dev/build/introduction/)
- [GitHub Releases Guide](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [React Navigation Docs](https://reactnavigation.org)

---

## 🎉 Success!

Your app is now:
- ✅ On GitHub
- ✅ APK available for download
- ✅ Ready to showcase
- ✅ 100% Free!

**Congratulations!** 🎊

---

<div align="center">

**Need Help?** Open an issue on GitHub!

[⬆ Back to Top](#-deployment-guide---fkart)

</div>

