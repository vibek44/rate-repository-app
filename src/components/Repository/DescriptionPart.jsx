import { View, Image, StyleSheet } from "react-native";
import Text from "../Text";
import { lightColors, spacing, sizing, typography } from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: spacing.md,
    backgroundColor: lightColors.backgroundColorList,
    padding: spacing.sm,
  },
  avatarWrapper: {
    width: sizing.base,
    height: sizing.base,
  },
  descriptionContainer: {
    flex: 1,
    rowGap: spacing.md,
  },
});

const DescriptionPart = ({
  introData: { fullName, description, language },
  avatarUrl,
}) => {
  const fieldDescription = [
    { label: "FullName", value: fullName },
    { label: "Description", value: description },
    { label: "Language", value: language },
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatarWrapper} />

      <View style={styles.descriptionContainer}>
        {fieldDescription.map((field) => (
          <Text
            key={field.label}
            fontWeight={field.label === "FullName" && "bold"}
            style={
              field.label === "Language" && {
                alignSelf: "flex-start",
                color: lightColors.textPrimary,
                fontSize: typography.fontSizes.base,
                backgroundColor: lightColors.colorLanguage,
                padding: spacing.sm,
                borderRadius: spacing.sm,
              }
            }
          >
            {field.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DescriptionPart;
