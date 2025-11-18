# 🚀 GitHub Setup - Quick Guide

Follow these steps to deploy your FKart app to GitHub:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `fkart` (or your preferred name)
4. Description: `Modern e-commerce mobile app built with React Native and Expo`
5. Make it **Public** ✅
6. **DO NOT** check "Add a README file" (we already have one)
7. Click **Create repository**

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fkart.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Verify

1. Go to your repository on GitHub
2. You should see all your files
3. README.md should display beautifully
4. ✅ Repository is live!

## Step 4: Build APK (Next)

After pushing to GitHub, follow [DEPLOYMENT.md](./DEPLOYMENT.md) to build your APK.

---

**Need help?** Check the main [README.md](./README.md) for more details.

