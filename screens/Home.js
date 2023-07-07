import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import CatagoriesScreen from "../screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";

import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Diphylleia-Regular",
          fontSize: 30,
        },
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "#ffffff" },
        // headerShadowVisible: true,
        animation: "fade_from_bottom",
        headerBackground: () => {
          return (
            <View style={styles.title}>
              <Image
                source={require("../assets/imgs/logo.png")}
                style={styles.logo}
              />
              <Image
                source={require("../assets/imgs/logo.png")}
                style={styles.logo}
              />
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="MealsCategories"
        component={CatagoriesScreen}
        options={{ title: "Meals Categories" }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: "ffffff",
  },
  logo: {
    width: "16%",
    height: "60%",
    margin: "2%",
    marginTop: "10%",
    marginBottom: "1%",
  },
  title: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e5e5e5",
  },
});
