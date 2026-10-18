import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.md,
  },
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

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
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
