import RepositoryItem from "./RepositoryItem";
import { View, FlatList, StyleSheet } from "react-native";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: spacing.md,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} isPressable={true} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;
