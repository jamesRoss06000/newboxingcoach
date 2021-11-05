import "dotenv/config";

export default {
  expo: {
    name: "boxingcoach",
    slug: "boxingcoach",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "boxing-coach",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
      android: {
        googleServicesFile: "./google-services.json",
      },
      ios: {
        googleServicesFile: "./GoogleService-Info.plist",
        // googleServicesFile: "./boxing_coach.plist",
      },
      plugins: [
        "@react-native-firebase/app",
        "@react-native-firebase/perf",
        "@react-native-firebase/crashlytics",
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
        [
          "@stripe/stripe-react-native",
          {
            merchantIdentifier: "appleGoesHere" | "somethingElseHere",
            enableGooglePay: true,
          },
        ],
      ],
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      googleServicesFile: "./GoogleService-Info.plist",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      publishableKey: process.env.PUBLISHABLE_KEY,
    },
  },
};
