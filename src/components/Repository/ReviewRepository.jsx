import { View, StyleSheet } from "react-native";
import { spacing, lightColors, sizing } from "../../theme";
import Text from "../Text";
import { format } from "date-fns";
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    columnGap: spacing.md,
    backgroundColor: lightColors.backgroundColorList,
    padding: spacing.sm,
  },
  ratingContainer: {
    height: sizing.medium,
    width: sizing.medium,
    borderRadius: sizing.medium / 2,
    borderColor: lightColors.backgroundColorSignIn,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingElement: {
    color: lightColors.backgroundColorSignIn,
  },
  reviewContainer: {
    rowGap: spacing.sm,
    flex: 1,
  },
});

const ReviewRepository = ({ item }) => {
  const date = format(item.node.createdAt, "dd MMM yyyy");
  console.log(item.node.createdAt);
  return (
    <View style={styles.outerContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingElement}>{item.node.rating}</Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text fontSize="subheading" fontWeight="bold">
          {item.node.user.username}
        </Text>
        <Text>{date}</Text>
        <Text>{item.node.text}</Text>
      </View>
    </View>
  );
};

export default ReviewRepository;
