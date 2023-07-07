import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Image, StyleSheet, View, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
export default function CatagoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
