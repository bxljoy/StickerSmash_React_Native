import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.alexbao.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.alexbao.stickersmash.preview";
  }

  return "com.alexbao.stickersmash";
};

const getAppName = () => {
  if (IS_DEV) {
    return "StickerSmash-Dev";
  }

  if (IS_PREVIEW) {
    return "StickerSmash-Preview";
  }

  return "StickerSmash - Emoji Stickers";
};

export default {
  expo: {
    name: getAppName(),
    slug: getAppName().toLowerCase().replace(/\s/g, "-"),
    ios: {
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      package: getUniqueIdentifier(),
    },
    extra: {
      eas: {
        projectId: "91b8b4a8-6d41-4798-90c4-409e01695e23",
      },
    },
  },
};
