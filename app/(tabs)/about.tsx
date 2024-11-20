import { View, Text, StyleSheet } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>NOESANTARA FOOD</Text>
        <Text style={styles.description}>
          tersedia banyak resep masakan nusantara yang dapat kalian coba!
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE4EC",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#D81B60",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#333333",
    lineHeight: 24,
  },
})