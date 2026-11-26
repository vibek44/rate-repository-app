import Text from "./Text";
import { View, StyleSheet } from "react-native";
import { getErrors } from "../utils/errorHandler";
import { spacing } from "../theme";
const styles = StyleSheet.create({
  textContainer: {
    marginTop: spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: spacing.md,
  },
});

const ErrorBoard = ({ error }) => {
  const errMessage = getErrors(error);
  if (!errMessage) return null;
  if (errMessage.type === "GRAPHQL") {
    return (
      <View style={styles.textContainer}>
        {errMessage.messages.map((err, index) => (
          <Text color="Alert" key={index}>
            {err}
          </Text>
        ))}
      </View>
    );
  }
  if (errMessage.type === "SERVER") {
    return (
      <View style={styles.textContainer}>
        {errMessage.messages.map((err, index) => (
          <Text color="Alert" key={index}>
            {err}
          </Text>
        ))}
      </View>
    );
  }

  if (errMessage.type === "NETWORK") {
    return (
      <View style={styles.textContainer}>
        {errMessage.messages.map((err, index) => (
          <Text color="Alert" key={index}>
            {err}
          </Text>
        ))}
      </View>
    );
  }
};

export default ErrorBoard;
