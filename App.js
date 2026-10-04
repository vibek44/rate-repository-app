import { StatusBar } from "expo-status-bar";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  //const [count, setCount] = useState(0);
  function handlePress() {
    Alert.alert("hola", "i am presssable");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.item}>continue native app</Text>
      <Pressable onPress={handlePress}>
        <Text style={styles.item}>press 11</Text>
      </Pressable>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: 700,
  },
});
