import { useState } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import { Menu, Divider, TextInput, Portal } from "react-native-paper";
import { spacing, sizing, lightColors } from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  transparentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000080",
  },
  menuCentered: {
    transform: [{ translateX: 30 }, { translateY: -0 }],
  },
  menuContent: {
    width: 280,
    backgroundColor: lightColors.colorWhite,
  },
});
const SelectMenu = ({ handleVariables, label }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const handleSelect = (label, orderBy, orderDirection) => {
    handleVariables(label, orderBy, orderDirection);
    closeMenu();
  };
  return (
    <View>
      <Portal>
        {visible && (
          <Pressable style={styles.transparentContainer} onPress={closeMenu} />
        )}
      </Portal>

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu}>
            <View pointerEvents="none">
              <TextInput
                placeholder={label}
                editable={false}
                right={
                  <TextInput.Icon icon={visible ? "menu-up" : "menu-down"} />
                }
                style={{
                  backgroundColor: lightColors.colorGrey,
                }}
              />
            </View>
          </Pressable>
        }
        style={styles.menuCentered}
        contentStyle={styles.menuContent}
      >
        <Menu.Item
          title="Select an item..."
          titleStyle={{ color: "#A8A8A8" }}
        />
        <Menu.Item
          onPress={() => {
            handleSelect("Latest Repositories", "CREATED_AT", "DESC");
          }}
          title="Latest Repositories"
        />
        <Menu.Item
          onPress={() => {
            handleSelect("Highest rated repositories", "RATING_AVERAGE", "ASC");
          }}
          title="Highest rated repositories"
        />
        <Menu.Item
          onPress={() => {
            handleSelect("Lowest rated repositories", "RATING_AVERAGE", "DESC");
          }}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

export default SelectMenu;
