import { Platform, StyleSheet } from "react-native";

export const typography = {
  fontSizes: {
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};
export const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
};

export const sizing = {
  small: 24,
  medium: 48,
  base: 72,
  large: 96,
  xlarge: 120,
};

export const lightColors = {
  textPrimary: "#ffffff",
  textSecondary: "#586069",
  textAlert: "#990000",
  backgroundColorMain: "#e1e4e8",
  backgroundColorList: "#ffffff",
  backgroundColorSignIn: "#007AFF",
  colorLanguage: "#0366d6",
};

export const darkColors = {
  textPrimary: "#0d1117",
  backgroundColorAppBar: "#24292e",
};
