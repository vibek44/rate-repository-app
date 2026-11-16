import { ApolloProvider } from "@apollo/client/react";
import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import { SafeAreaProvider } from "react-native-safe-area-context";
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </SafeAreaProvider>
  );
}
