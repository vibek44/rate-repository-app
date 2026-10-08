import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import DescriptionPart from "./DescriptionPart";

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  },
}) => {
  const fieldDescription = [
    { label: "FullName", value: fullName },
    { label: "Description", value: description },
    { label: "Language", value: language },
  ];
  const fieldRating = [
    { label: "Stars", value: stargazersCount },
    { label: "Forks", value: forksCount },
    { label: "Rating", value: ratingAverage },
    { label: "Reviews", value: reviewCount },
  ];

  return (
    <>
      <DescriptionPart fields={fieldDescription} />
      <View>
        <View style={styles.container}>
          {fieldRating.map((field) => (
            <View key={field.label}>
              <Text fontWeight="bold">{field.value}</Text>
              <Text>{field.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

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
    width: 32,
    height: 32,
  },
  descriptionContainer: {
    flex: 1,
    rowGap: 8,
  },
});

export default RepositoryItem;
