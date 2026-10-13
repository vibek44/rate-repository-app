import { Text as NativeText, StyleSheet } from "react-native";

import { darkColors, lightColors, typography } from "../theme";

const styles = StyleSheet.create({
  text: {
    color: darkColors.textPrimary,
    fontFamily: typography.fonts.main,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.normal,
  },
  colorTextSecondary: {
    color: lightColors.textSecondary,
  },
  colorPrimary: {
    color: lightColors.textPrimary,
  },
  fontSizeSubHeading: {
    fontSize: typography.fontSizes.lg,
  },
  fontWeightBold: {
    fontWeight: typography.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "secondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
