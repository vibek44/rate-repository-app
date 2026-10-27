import { View, Pressable, StyleSheet } from "react-native";
import DescriptionPart from "./DescriptionPart";
import RatingContent from "./RatingContent";
import { useNavigate } from "react-router-native";
import { spacing } from "../../theme";

const styles = StyleSheet.create({
  items: {
    paddingHorizontal: spacing.md,
  },
});

const RepositoryItem = ({ item, isPressable }) => {
  const Wrapper = isPressable ? Pressable : View;
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;
  const url = isPressable ? undefined : item.url;
  const navigate = isPressable ? useNavigate() : undefined;

  const handlePress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <Wrapper
      style={styles.items}
      testID="repositoryItem"
      onPress={isPressable ? () => handlePress(id) : undefined}
      testID="repositoryItem"
    >
      <DescriptionPart
        introData={{ fullName, description, language }}
        avatarUrl={ownerAvatarUrl}
      />
      <RatingContent
        rating={{
          forksCount,
          stargazersCount,
          ratingAverage,
          reviewCount,
          url,
        }}
      />
    </Wrapper>
  );
};

export default RepositoryItem;
