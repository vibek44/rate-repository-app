import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useUser } from "../../hooks/useUser";
import ItemSeparator from "./ItemSeparater";
import { spacing } from "../../theme";
import ReviewRepository from "./ReviewRepository";

const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const MyReviews = () => {
  const { data, error, loading } = useUser(true);
  const reviewNodes = data?.me?.reviews?.edges;

  if (loading) {
    return (
      <View style={styles.textContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text color="secondary">Loading data...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.textContainer}>
        <Text color="Alert">SomeThing happen! Try again later! </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={<ItemSeparator />}
      renderItem={({ item }) => (
        <ReviewRepository item={item} isPressable={true} />
      )}
      keyExtractor={({ node }) => node.id}
    />
  );
};

export default MyReviews;
