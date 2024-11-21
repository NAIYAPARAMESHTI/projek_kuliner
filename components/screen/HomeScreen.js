import React, { useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import TeamCard from "../components/TeamCard";

const DATA = [
  {
    id: "1",
    title: "resep rawon",
    poster:
      "https://i.pinimg.com/236x/80/a7/37/80a73715c4240dfe07468981bf24d856.jpg",
    description: "Rawon adalah sup daging dengan kuah hitam khas Indonesia.",
  },
  {
    id: "2",
    title: "resep sambal matah",
    poster:
      "https://i.pinimg.com/236x/d6/61/30/d661302ed042ae60ce70270e599e6540.jpg",
    description: "Sambal matah adalah sambal segar khas Bali.",
  },
  // Tambahkan data lainnya...
];

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearchText(text);
    const newData = DATA.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleCardPress = (item) => {
    navigation.navigate("DetailScreen", { recipe: item });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Mau masak apa hari ini?"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => (
          <TeamCard
            title={item.title}
            poster={item.poster}
            onPress={() => handleCardPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
