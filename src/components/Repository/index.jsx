import { View, StyleSheet, ActivityIndicator } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import Text from "../Text";
import RepositoryListContainer from "./RepositoryListContainer";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();
  const repositories = data?.repositories;
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
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
