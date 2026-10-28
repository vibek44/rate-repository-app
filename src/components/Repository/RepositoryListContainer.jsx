import RepositoryItem from "./RepositoryItem";
import { FlatList } from "react-native";
import ItemSeparator from "./ItemSeparater";

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
