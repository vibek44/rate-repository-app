import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Text from "../Text";
import { useParams } from "react-router-native";
import { useSingleRepository } from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import ReviewRepository from "./ReviewRepository";
import ItemSeparator from "./ItemSeparater";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, reviews, loading, fetchMore, error } =
    useSingleRepository(id);

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
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewRepository item={item} isPressable={false} />
      )}
      onEndReached={fetchMore}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} isPressable={false} />
      )}
    />
  );
};

export default SingleRepository;
