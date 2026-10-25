import { View } from "react-native";
import DescriptionPart from "./DescriptionPart";
import RatingContent from "./RatingContent";

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  },
}) => {
  return (
    <View testID="repositoryItem">
      <DescriptionPart
        introData={{ fullName, description, language }}
        avatarUrl={ownerAvatarUrl}
      />
      <RatingContent
        rating={{ forksCount, stargazersCount, ratingAverage, reviewCount }}
      />
    </View>
  );
};

export default RepositoryItem;
