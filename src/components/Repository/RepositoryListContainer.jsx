import RepositoryItem from "./RepositoryItem";
import { FlatList } from "react-native";
import ItemSeparator from "./ItemSeparater";
import SelectMenu from "./SelectMenu";

export const RepositoryListContainer = ({ repositories, handleVariables }) => {
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
      ListHeaderComponent={<SelectMenu handleVariables={handleVariables} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;
