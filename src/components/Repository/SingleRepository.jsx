import { View, ActivityIndicator, StyleSheet } from "react-native";
import Text from "../Text";
import { useParams } from "react-router-native";
import { useSingleRepository } from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
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
  const { data, loading, error } = useSingleRepository(id);
  const repository = data?.repository;
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

  return <RepositoryItem item={repository} isPressable={false} />;
};

export default SingleRepository;
