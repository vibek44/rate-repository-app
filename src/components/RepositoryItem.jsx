import { View } from "react-native";
import Text from "./Text";

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  },
}) => {
  const fields = [
    { label: "Full name", value: fullName },
    { label: "description", value: description },
    { label: "language", value: language },
    { label: "stars", value: stargazersCount },
    { label: "forks", value: forksCount },
    { label: "rating", value: ratingAverage },
    { label: "review", value: reviewCount },
  ];
  return (
    <>
      {fields.map((field) => (
        <Text key={field.label}>
          {field.label}: {field.value}
        </Text>
      ))}
    </>
  );
};

export default RepositoryItem;
