import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { spacing, lightColors, sizing } from "../../theme";
import Text from "../Text";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
    columnGap: spacing.md,
    backgroundColor: lightColors.colorWhite,
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
});

const ReviewRepository = ({ item, isPressable }) => {
  const [id, setId] = useState();
  const Wrapper = isPressable ? Pressable : View;
  const navigate = isPressable ? useNavigate() : undefined;
  const date = format(item.node.createdAt, "dd MMM yyyy");
  useEffect(() => {
    if (!id) return;
    navigate(`/repository/${id}`);
  }, [id]);
  const handlePress = (id) => {
    setId(id);
  };
  return (
    <Wrapper
      style={styles.outerContainer}
      onPress={
        isPressable ? () => handlePress(item.node.repositoryId) : undefined
      }
    >
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
    </Wrapper>
  );
};

export default ReviewRepository;
