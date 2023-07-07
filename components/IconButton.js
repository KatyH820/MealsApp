import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedEffect}
    >
      <Ionicons name={icon} size={28} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressedEffect: {
    opacity: 0.5,
  },
});
