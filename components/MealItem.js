import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.card}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedEffect}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <Text style={[styles.text, { fontSize: 20 }]}>{title}</Text>
        </View>
        <View style={styles.moreinfo}>
          <View style={styles.infoDetail}>
            <Entypo name="hour-glass" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {duration} MINS
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Entypo name="book" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {complexity.toUpperCase()}
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Entypo name="bowl" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: "3%",
    backgroundColor: "#e9edc9",
    marginVertical: "5%",
    marginHorizontal: "3%",
    borderRadius: "10%",
    alignItems: "center",
    justifyContent: "center",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
  },
  img: {
    width: "100%",
    height: 200,
  },
  text: {
    fontFamily: "Diphylleia-Regular",
    fontSize: 13,
    textAlign: "center",
  },
  moreinfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    borderTopColor: "#344e41",
    borderTopWidth: 1,
  },
  infoDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    margin: "2%",
  },
  pressedEffect: {
    opacity: 0.75,
  },
});
