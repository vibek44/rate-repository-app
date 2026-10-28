import { View, StyleSheet } from "react-native";
import { spacing } from "../../theme";
const styles = StyleSheet.create({
  separator: {
    height: spacing.md,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
