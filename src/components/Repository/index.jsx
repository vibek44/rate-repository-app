import { View, StyleSheet, ActivityIndicator } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import Text from "../Text";
import { spacing } from "../../theme";
import RepositoryListContainer from "./RepositoryListContainer";
import { PaperProvider } from "react-native-paper";

const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const { orderBy, orderDirection } = variables;
  const { data, loading, error } = useRepositories(orderBy, orderDirection);
  const repositories = data?.repositories;
  const handleVariables = (order, direction) => {
    setVariables({ ...variables, orderBy: order, orderDirection: direction });
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
      />
    </PaperProvider>
  );
};

export default RepositoryList;
