import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "token") {
    this.namespace = namespace;
  }
  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(`${this.namespace}:login`);
    return rawToken ? JSON.parse(rawToken) : undefined;
  }
  async setAccessToken(tokenId) {
    await AsyncStorage.setItem(
      `${this.namespace}:login`,
      JSON.stringify(tokenId)
    );
  }
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:login`);
  }
}

export default AuthStorage;
