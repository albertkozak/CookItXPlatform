// 1
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

// 2
const RecipeItem = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{recipe.title}</Text>
      <Image source={{ uri: recipe.imageURL }} style={styles.image} />
    </View>
  );
};

// 3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  image: {
    width: 50,
    height: 50
  },
  text: {
    paddingRight: 10
  }
});

// 4
export default RecipeItem;
