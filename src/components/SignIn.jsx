import { TextInput, View, StyleSheet, Pressable } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    height: 60,
    borderRadius: 12,
    borderWidth: 3,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  buttonWrapper: {
    height: 60,
    backgroundColor: "#007AFF",
    borderRadius: 12,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
const SignIn = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" style={styles.item} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.item}
      />
      <Pressable style={styles.buttonWrapper}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

/*
  buttonWrapper: {
    margin: (16, 12),
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
  },
  item: {
    margin: (16, 12),
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
  },*/
