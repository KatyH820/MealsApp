import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.card}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerCard}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const DeviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: "5%",
    backgroundColor: "#e9edc9",
    borderRadius: "10%",
    width: DeviceWidth * 0.4,
    height: DeviceWidth * 0.4,
    shadowColor: "black",
    shadowRadius: 0.7,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1, borderRadius: "10%" },
  buttonPressed: {
    backgroundColor: "#ccd5ae",
    // opacity: 0.5,
  },
  innerCard: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontFamily: "Diphylleia-Regular",
    fontSize: 18,
  },
});
