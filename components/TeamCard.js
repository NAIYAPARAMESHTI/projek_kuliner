import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const TeamCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.id },
      }}
    >
      <View style={StyleSheet.container}>
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          source={{
            uri: item.gambar,
            height: 200,
            width: 200,
          }}
        />
        <Text className="text-center font-bold text-white">{item.title}</Text>
        <Text className="text-center text-white">{item.description}</Text>
      </View>
    </Link>
  );
};

export default TeamCard;
