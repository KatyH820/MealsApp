import { FlatList, View, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function handleRender(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetail", { id: itemData.item.id });
    }
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={handleRender}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "ffffff",
  },
});
