import { View, Text } from "react-native";
import useUser from "../../hooks/useUser";

const MyReviews = () => {
  const { data } = useUser(true);
  console.log(data);
  return (
    <View>
      <Text>My Reviews</Text>
    </View>
  );
};

export default MyReviews;
