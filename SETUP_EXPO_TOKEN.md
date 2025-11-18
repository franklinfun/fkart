# 🔑 Setup Expo Token for Automated Builds

To enable automatic APK builds via GitHub Actions, you need to set up an Expo token.

## Step 1: Get Expo Token

1. Go to [expo.dev](https://expo.dev)
2. Sign in to your account
3. Go to: https://expo.dev/accounts/[your-username]/settings/access-tokens
4. Click **"Create Token"**
5. Name it: `github-actions-fkart`
6. Copy the token (you'll only see it once!)

## Step 2: Add Token to GitHub

1. Go to your repository: https://github.com/franklinfun/fkart
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Name: `EXPO_TOKEN`
6. Value: Paste your Expo token
7. Click **Add secret**

## Step 3: Test Build

1. Go to **Actions** tab in your repository
2. Click **Build and Release APK** workflow
3. Click **Run workflow**
4. Select branch: `main`
5. Click **Run workflow**

The build will:
- Take 10-15 minutes
- Build your APK automatically
- Create a GitHub release
- Upload APK to releases

## Alternative: Manual Build

If you prefer manual builds:

1. Run: `eas login`
2. Run: `eas build -p android --profile preview`
3. Download APK when complete
4. Upload to GitHub Releases manually

---

**Note:** The GitHub Actions workflow will automatically build and release when you:
- Push a tag (e.g., `git tag v1.0.0 && git push origin v1.0.0`)
- Manually trigger the workflow

