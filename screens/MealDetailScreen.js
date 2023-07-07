import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import IconButton from "../components/IconButton";
export default function MealDetailScreen({ navigation, route }) {
  const foodid = route.params.id;
  const meal = MEALS.find((Meal) => Meal.id === foodid);

  function headerButtonPressHandler() {
    meal.liked = !meal.liked;
    console.log(liked);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerBackground: () => {
        return (
          <View style={styles.title}>
            <Image
              source={require("../assets/imgs/logo.png")}
              style={styles.logo}
            />
          </View>
        );
      },
      headerRight: () => {
        return (
          <IconButton
            icon="heart"
            color="#90a955"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  const ingredientsItem = meal.ingredients.map((ingre) => (
    <Text key={ingre} style={styles.text}>
      <Text style={styles.bullet}>&#8226; </Text>
      {ingre}
    </Text>
  ));

  const stepsList = meal.steps.map((step, index) => (
    <Text key={step} style={styles.text}>
      {`${index + 1}.  ${step}`}
    </Text>
  ));
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.img} />
        </View>
        {/* <Text style={[styles.text, { fontSize: 25 }]}>{meal.title}</Text> */}
        <View style={styles.moreinfo}>
          <View style={styles.infoDetail}>
            <Entypo name="hour-glass" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {meal.duration} MINS
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Entypo name="book" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {meal.complexity.toUpperCase()}
            </Text>
          </View>
          <View style={styles.infoDetail}>
            <Entypo name="bowl" size={18} color="black" />
            <Text style={[styles.text, { fontSize: 15, color: "#344e41" }]}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
              padding: "1%",
              color: "#344e41",
            },
          ]}
        >
          Ingredients
        </Text>
        <View style={styles.ingredientsContainer}>{ingredientsItem}</View>
        <Text
          style={[
            styles.text,
            { fontSize: 25, padding: "1%", color: "#344e41" },
          ]}
        >
          Steps
        </Text>
        <View style={styles.stepsContainer}>{stepsList}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ffffff",
  },
  imgContainer: {
    width: "90%",
    height: 200,
    margin: "3%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  text: {
    fontFamily: "Diphylleia-Regular",
    fontSize: 18,
    margin: 2,
    color: "#132a13",
    // textAlign: "center",
  },
  moreinfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    borderTopColor: "#344e41",
    borderTopWidth: 1,
  },
  ingredientsContainer: {
    width: "90%",
  },
  stepsContainer: {
    width: "90%",
  },
  bullet: {
    fontSize: 22,
  },
  infoDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    margin: "2%",
  },
  title: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
  },
  logo: {
    width: "16%",
    height: "53%",
    margin: "2%",
    marginTop: "10%",
  },
});
