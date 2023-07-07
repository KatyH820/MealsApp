import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import CatagoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FavoriteScreen from "./screens/FavoriteScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Diphylleia-Regular": require("./assets/fonts/Diphylleia-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontFamily: "Diphylleia-Regular",
              fontSize: "30",
            },
            headerTitleAlign: "center",
            contentStyle: { backgroundColor: "#ffffff" },
            // headerShadowVisible: true,
            animation: "fade_from_bottom",
            headerBackground: () => {
              return (
                <View style={styles.title}>
                  <Image
                    source={require("./assets/imgs/logo.png")}
                    style={styles.logo}
                  />
                  <Image
                    source={require("./assets/imgs/logo.png")}
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
        {/* <CatagoriesScreen /> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#adb5bd",
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

    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.75,
    // shadowRadius: 2,
  },
});
