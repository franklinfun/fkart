# 🛒 FKart - Modern E-Commerce Mobile App

<div align="center">

![React Native](https://img.shields.io/badge/React%20Native-0.72.6-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-49.0.15-black?style=for-the-badge&logo=expo)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A beautiful, modern e-commerce mobile app built with React Native and Expo**

[Features](#-features) • [Screenshots](#-screenshots) • [Installation](#-installation) • [Build APK](#-build-apk) • [Demo](#-demo)

</div>

---

## ✨ Features

- 🎨 **Beautiful UI/UX** - Modern design with orange and blue theme
- 📱 **Fully Responsive** - Works seamlessly on all screen sizes
- 🛍️ **Complete Shopping Experience** - Browse, search, cart, and checkout
- 👤 **User Authentication** - Login and registration screens (UI only)
- 🎯 **Product Management** - Categories, filters, and detailed product views
- 🛒 **Shopping Cart** - Add, remove, and manage cart items
- 👤 **User Profile** - Profile management and settings
- ⚡ **Fast Performance** - Optimized for smooth animations and transitions
- 🎭 **No Backend Required** - Pure UI showcase with dummy data

---

## 📸 Screenshots

### Main Screens

| Splash Screen | Onboarding | Login |
|:---:|:---:|:---:|
| ![Splash](https://via.placeholder.com/300x600/FF6B35/FFFFFF?text=Splash) | ![Onboarding](https://via.placeholder.com/300x600/004E89/FFFFFF?text=Onboarding) | ![Login](https://via.placeholder.com/300x600/FF6B35/FFFFFF?text=Login) |

| Dashboard | Products | Product Details |
|:---:|:---:|:---:|
| ![Dashboard](https://via.placeholder.com/300x600/FF6B35/FFFFFF?text=Dashboard) | ![Products](https://via.placeholder.com/300x600/004E89/FFFFFF?text=Products) | ![Details](https://via.placeholder.com/300x600/FF6B35/FFFFFF?text=Details) |

| Cart | Profile | Settings |
|:---:|:---:|:---:|
| ![Cart](https://via.placeholder.com/300x600/004E89/FFFFFF?text=Cart) | ![Profile](https://via.placeholder.com/300x600/FF6B35/FFFFFF?text=Profile) | ![Settings](https://via.placeholder.com/300x600/004E89/FFFFFF?text=Settings) |

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your phone (for testing)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/fkart.git
cd fkart
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Start the Development Server

```bash
npm start
# or
expo start
```

### Step 4: Run on Your Device

1. **For Android/iOS Simulator:**
   ```bash
   npm run android
   # or
   npm run ios
   ```

2. **For Physical Device:**
   - Install Expo Go from Play Store (Android) or App Store (iOS)
   - Scan the QR code shown in terminal/browser
   - The app will load on your device

---

## 📦 Build APK (Free)

### Option 1: Using EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build APK
eas build -p android --profile preview
```

### Option 2: Using Expo Build (Legacy)

```bash
npx expo build:android -t apk
```

After the build completes, you'll receive a download link for your APK file.

---

## 🎨 Theme Colors

The app uses a vibrant orange and blue color scheme:

- **Primary Orange:** `#FF6B35`
- **Secondary Blue:** `#004E89`
- **Accent Orange:** `#FF8C42`
- **Accent Blue:** `#1E88E5`

---

## 📁 Project Structure

```
fkart/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Header.js
│   │   ├── Input.js
│   │   └── ProductCard.js
│   ├── screens/             # App screens
│   │   ├── SplashScreen.js
│   │   ├── OnboardingScreen.js
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── DashboardScreen.js
│   │   ├── ProductsScreen.js
│   │   ├── ProductDetailsScreen.js
│   │   ├── CartScreen.js
│   │   ├── ProfileScreen.js
│   │   └── SettingsScreen.js
│   ├── navigation/          # Navigation setup
│   │   ├── AuthNavigator.js
│   │   └── MainNavigator.js
│   ├── context/             # React Context
│   │   └── CartContext.js
│   ├── data/                # Dummy data
│   │   └── products.js
│   └── theme/               # Theme configuration
│       └── colors.js
├── App.js                   # Main app component
├── app.json                 # Expo configuration
└── package.json            # Dependencies
```

---

## 🛠️ Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **Expo Linear Gradient** - Beautiful gradients
- **Expo Vector Icons** - Icon library
- **React Context API** - State management

---

## 📱 App Flow

1. **Splash Screen** → App logo and loading animation
2. **Onboarding** → Introduction slides
3. **Authentication** → Login/Register screens
4. **Dashboard** → Featured products and categories
5. **Products** → Browse all products with filters
6. **Product Details** → Detailed product information
7. **Cart** → Shopping cart management
8. **Profile** → User profile and settings

---

## 🎯 Key Features Implementation

### Shopping Cart
- Add/remove products
- Quantity management
- Real-time total calculation
- Persistent cart state (using Context API)

### Product Browsing
- Category filtering
- Search functionality (UI ready)
- Product cards with images
- Rating and reviews display

### User Interface
- Smooth animations
- Gradient backgrounds
- Modern card designs
- Intuitive navigation

---

## 🚀 Deployment

### GitHub Releases

1. Build your APK using the steps above
2. Go to your GitHub repository
3. Click on **Releases** → **Create a new release**
4. Upload your APK file
5. Add release notes and screenshots
6. Publish the release

### Example Release Notes:

```markdown
## FKart v1.0.0

### Features
- Complete e-commerce UI
- Shopping cart functionality
- User authentication screens
- Product browsing and details
- Profile and settings

### Download
Download the APK from the assets below and install on your Android device.
```

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/fkart/issues).

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

<div align="center">

**Built with ❤️ using React Native and Expo**

[⬆ Back to Top](#-fkart---modern-e-commerce-mobile-app)

</div>

