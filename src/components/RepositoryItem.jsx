import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
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
    <>
      <DescriptionPart
        introData={{ fullName, description, language }}
        avatarUrl={ownerAvatarUrl}
      />
      <RatingContent
        rating={{ forksCount, stargazersCount, ratingAverage, reviewCount }}
      />
    </>
  );
};

export default RepositoryItem;
