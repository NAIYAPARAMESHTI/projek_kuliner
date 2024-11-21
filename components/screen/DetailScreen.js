import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function DetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.poster }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#834141",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    textAlign: "center",
  },
});
