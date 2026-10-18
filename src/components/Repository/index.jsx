import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import useRepositories from "../../hooks/useRepositories";

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
    alignItems: "center",
    justifyContent: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();
  console.log(data);

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
