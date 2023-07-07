import { StyleSheet, Text, View } from "react-native";

export default function FavoriteScreen() {
  return <View style={styles.screen}>{/* <Text>Fav Screen</Text>; */}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
