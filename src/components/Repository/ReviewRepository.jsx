import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { spacing, lightColors, sizing } from "../../theme";
import Text from "../Text";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: lightColors.colorWhite,
  },
  innerContainer: {
    flexDirection: "row",
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
    columnGap: spacing.md,
    padding: spacing.sm,
  },
  ratingContainer: {
    height: sizing.medium,
    width: sizing.medium,
    borderRadius: sizing.medium / 2,
    borderColor: lightColors.colorBlue,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingElement: {
    color: lightColors.colorBlue,
  },
  reviewContainer: {
    rowGap: spacing.sm,
    flex: 1,
  },
  links: {
    height: sizing.medium,
    backgroundColor: lightColors.colorBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing.sm,
    padding: spacing.md,
  },
});

const ReviewRepository = ({ item, isPressable }) => {
  const [id, setId] = useState();

  const navigate = isPressable ? useNavigate() : undefined;
  const date = format(item.node.createdAt, "dd MMM yyyy");
  useEffect(() => {
    if (!id) return;
    navigate(`/repository/${id}`);
  }, [id]);
  const handleViewPress = (id) => {
    setId(id);
  };
  const handleDeletePress = () => {};

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingElement}>{item.node.rating}</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text fontSize="subheading" fontWeight="bold">
            {item?.node?.user?.username ?? undefined}
            {item?.node?.repositoryId ?? undefined}
          </Text>
          <Text>{date}</Text>
          <Text>{item.node.text}</Text>
        </View>
      </View>
      {isPressable && (
        <View style={styles.innerContainer}>
          <Pressable
            style={styles.links}
            onPress={() => handleViewPress(item.node.repositoryId)}
          >
            <Text color="primary" fontWeight="bold">
              View Repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.links, { backgroundColor: lightColors.textAlert }]}
            onPress={handleDeletePress}
          >
            <Text color="primary" fontWeight="bold">
              Delete Repository
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewRepository;
