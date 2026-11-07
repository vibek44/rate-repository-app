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
    transform: [{ translateX: 160 }, { translateY: -280 }],
  },
  menuContent: {
    width: 300,
    backgroundColor: "white", // Ensures the wider background stays solid white
  },
});
const SelectMenu = ({ handleVariables }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const handleSelect = (label, order, direction) => {
    setSelectedValue(label);
    handleVariables(order, direction);
    closeMenu();
  };
  return (
    <View>
      <Pressable onPress={openMenu}>
        <TextInput
          placeholder="Select Repositories"
          value={selectedValue}
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
          contentStyle={styles.menuContent}
        >
          <Menu.Item
            onPress={() => {}}
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
              handleSelect(
                "Highest rated repositories",
                "RATING_AVERAGE",
                "DESC"
              );
            }}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => {
              handleSelect(
                "Lowest rated repositories",
                "RATING_AVERAGE",
                "ASC"
              );
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </Portal>
    </View>
  );
};

export default SelectMenu;
