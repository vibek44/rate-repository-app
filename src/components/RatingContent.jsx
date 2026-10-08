import { View, StyleSheet } from "react-native";
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
  ratingContainer: {
    flex: 1,
    alignItems: "center",
    rowGap: 4,
  },
});

const RatingContent = ({
  rating: { stargazersCount, forksCount, ratingAverage, reviewCount },
}) => {
  const fieldRating = [
    { label: "Stars", value: stargazersCount },
    { label: "Forks", value: forksCount },
    { label: "Rating", value: ratingAverage },
    { label: "Reviews", value: reviewCount },
  ];
  return (
    <View>
      <View style={styles.container}>
        {fieldRating.map((field) => (
          <View key={field.label} style={styles.ratingContainer}>
            <Text fontWeight="bold">{field.value}</Text>
            <Text>{field.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RatingContent;
