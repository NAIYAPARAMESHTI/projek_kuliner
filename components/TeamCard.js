import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const TeamCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.id },
      }}
    >
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.poster }} style={styles.cardImage} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.overview && (
            <Text style={styles.cardDescription}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    padding: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  overview: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
  },
});

export default TeamCard;
