import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function FavoriteScreen({ navigation }) {
  const likedMeal = MEALS.filter((meal) => meal.liked);

  function pressHandler(id) {
    navigation.navigate("MealDetail", { id: id });
  }
  const cards = likedMeal.map((meal) => (
    <MealItem
      key={meal.id}
      title={meal.title}
      imageUrl={meal.imageUrl}
      duration={meal.duration}
      complexity={meal.complexity}
      affordability={meal.affordability}
      onPress={() => pressHandler(meal.id)}
    />
  ));

  return (
    <ScrollView style={styles.Rootscreen}>
      <View>{cards}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Rootscreen: { flex: 1 },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
