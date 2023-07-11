import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
export default function FavoriteScreen({ navigation }) {
  // const ctx = useContext(FavoritesContext);
  // const likedid = ctx.id;

  const likedid = useSelector((state) => state.id);

  let likedMeal = MEALS.filter((meal) => likedid.includes(meal.id));

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
      <View style={styles.screen}>{cards}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Rootscreen: { flex: 1, backgroundColor: "white" },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
