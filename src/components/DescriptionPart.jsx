import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: 12,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  avatarWrapper: {
    width: 64,
    height: 64,
  },
  descriptionContainer: {
    flex: 1,
    rowGap: 8,
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
                color: "#ffffff",
                fontSize: 16,
                backgroundColor: "#0366d6",
                padding: 3,
                borderRadius: 5,
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
