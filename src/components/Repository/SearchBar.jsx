import { Searchbar } from "react-native-paper";
import { spacing, lightColors } from "../../theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  barContainer: {
    marginVertical: spacing.md,
    backgroundColor: lightColors.colorWhite,
    marginHorizontal: spacing.md,
  },
});

const SearchBar = ({ handleSearchVariables, searchText }) => {
  return (
    <Searchbar
      placeholder="Search"
      value={searchText}
      onChangeText={(text) => handleSearchVariables(text)}
      style={styles.barContainer}
    />
  );
};

export default SearchBar;
