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
    transform: [
      { translateX: +100 }, // Half of your estimated menu width (adjust if it looks off center)
      { translateY: -280 }, // Half of your estimated menu height
    ],
  },
});
const SelectMenu = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Pressable onPress={openMenu}>
        <TextInput
          label="Select Repositories"
          //value={selectedValue}
          editable={false}
          right={
            <TextInput.Icon
              icon={visible ? "menu-up" : "menu-down"}
              onPress={() => setVisible(!visible)}
            />
          }
        />
      </Pressable>
      <Portal>
        {visible && (
          <Pressable style={styles.transparentContainer} onPress={closeMenu} />
        )}
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={{ x: width / 2, y: height / 2 }}
          style={styles.menuCentered}
        >
          <Menu.Item onPress={() => {}} title="Select Repositories ..." />
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </Portal>
    </View>
  );
};

export default SelectMenu;
