import RepositoryItem from "./RepositoryItem";
import { FlatList, StyleSheet } from "react-native";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.md,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      legacyImplementation={true}
    />
  );
};

export default RepositoryListContainer;
