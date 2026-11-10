import { View, StyleSheet, ActivityIndicator } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import { useState, useEffect } from "react";
import Text from "../Text";
import { spacing } from "../../theme";
import RepositoryListContainer from "./RepositoryListContainer";
import { PaperProvider } from "react-native-paper";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    label: "Latest Repositories",
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchText: "",
  });

  const { label, orderBy, orderDirection, searchText } = variables;
  const [debouncedText] = useDebounce(searchText, 1000);

  const { data, loading, error } = useRepositories(
    orderBy,
    orderDirection,
    debouncedText
  );
  const repositories = data?.repositories;
  const handleVariables = (label, orderBy, orderDirection) => {
    setVariables({ ...variables, label, orderBy, orderDirection });
  };
  const handleSearchVariables = (text) => {
    setVariables({ ...variables, searchText: text });
  };
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
    <PaperProvider>
      <RepositoryListContainer
        repositories={repositories}
        handleVariables={handleVariables}
        label={label}
        handleSearchVariables={handleSearchVariables}
        searchText={searchText}
      />
    </PaperProvider>
  );
};

export default RepositoryList;
