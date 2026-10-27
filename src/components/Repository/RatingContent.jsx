import { View, Pressable, StyleSheet, Linking } from "react-native";
import Text from "../Text";
import { spacing, lightColors, sizing } from "../../theme";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: lightColors.backgroundColorList,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: spacing.md,
    padding: spacing.sm,
  },
  ratingContainer: {
    flex: 1,
    alignItems: "center",
    rowGap: spacing.sm,
  },
  links: {
    height: sizing.medium,
    backgroundColor: lightColors.backgroundColorSignIn,
    margin: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing.sm,
  },
});

const RatingContent = ({
  rating: { stargazersCount, forksCount, ratingAverage, reviewCount, url },
}) => {
  const fieldRating = [
    { label: "Stars", value: stargazersCount },
    { label: "Forks", value: forksCount },
    { label: "Rating", value: ratingAverage },
    { label: "Reviews", value: reviewCount },
  ];

  const handleUrlPress = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {fieldRating.map((field) => (
          <View key={field.label} style={styles.ratingContainer}>
            <Text fontWeight="bold">
              {field.value >= 1000
                ? new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(field.value)
                : field.value}
            </Text>
            <Text>{field.label}</Text>
          </View>
        ))}
      </View>
      {url && (
        <Pressable style={styles.links} onPress={handleUrlPress}>
          <Text color="primary" fontWeight="bold">
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RatingContent;
