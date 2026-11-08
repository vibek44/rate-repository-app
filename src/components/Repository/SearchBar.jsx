import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { spacing, lightColors } from "../../theme";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  barContainer: {
    marginVertical: spacing.md,
    backgroundColor: lightColors.backgroundColorList,
    marginHorizontal: spacing.md,
  },
});

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <Searchbar
      placeholder="Search"
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
      style={styles.barContainer}
    />
  );
};

export default SearchBar;
