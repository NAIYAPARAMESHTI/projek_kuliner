import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

const DATA = [
  {
    id: "1",
    title: "resep rawon",
    poster:
      "https://i.pinimg.com/236x/80/a7/37/80a73715c4240dfe07468981bf24d856.jpg",
    description:
      "Rawon adalah sup khas Indonesia yang menggunakan daging sapi sebagai bahan utama",
  },
  {
    id: "2",
    title: "resep sambal matah",
    poster:
      "https://i.pinimg.com/236x/d6/61/30/d661302ed042ae60ce70270e599e6540.jpg",
    description:
      "Sambal khas Bali yang terdiri dari irisan cabai, bawang merah, serai, dan daun jeruk purut. Sambal ini disajikan mentah dengan tambahan minyak kelapa dan perasan jeruk limau",
  },
  {
    id: "3",
    title: "resep klepon",
    poster:
      "https://i.pinimg.com/236x/68/a5/54/68a554d24d5e1871fc6caffb34a87914.jpg",
    description:
      "jajanan tradisional berbentuk bulat yang terbuat dari tepung ketan berisi gula merah cair, dilapisi dengan parutan kelapa",
  },
  {
    id: "4",
    title: "resep kue benjak enjak",
    poster:
      "https://i.pinimg.com/236x/38/7b/59/387b5936ed5aa7ed1966752d09dd3081.jpg",
    description:
      "Kue tradisional khas Sumatera Selatan yang terbuat dari campuran pisang, kelapa parut, dan gula merah",
  },
  {
    id: "5",
    title: "resep mie tarempa",
    poster:
      "https://i.pinimg.com/236x/c0/35/c5/c035c5c2276fd7f0f6c8abeb43e33639.jpg",
    description:
      "Mi goreng khas Kepulauan Riau yang kaya bumbu. Disajikan dengan potongan daging, tauge, dan cabai, memberikan rasa gurih, pedas, dan sedikit manis",
  },
  {
    id: "6",
    title: "resep kole kole kacang",
    poster:
      "https://i.pinimg.com/236x/0b/7f/b4/0b7fb4bd0ad8e6ff9727134d7a056ebf.jpg",
    description:
      "Terbuat dari kacang hijau yang dihaluskan, dicampur dengan gula merah, dan santan",
  },
  {
    id: "7",
    title: "resep tahu bacem",
    poster:
      "https://i.pinimg.com/236x/11/54/41/1154412eac848c7500c9cc26906048d6.jpg",
    description:
      "Tahu yang dimasak dengan gula merah, bawang putih, ketumbar, dan bumbu lainnya",
  },
  {
    id: "8",
    title: "resep urap urap",
    poster:
      "https://i.pinimg.com/236x/d5/d1/25/d5d12539c3743de3b62a556159bac07b.jpg",
    description:
      "sayuran yang direbus dan dicampur dengan parutan kelapa berbumbu",
  },
  {
    id: "9",
    title: "resep tahu campur",
    poster:
      "https://i.pinimg.com/236x/6f/9e/e7/6f9ee7a8866f2ca10e332146adcefbf9.jpg",
    description:
      "terdiri dari tahu goreng, lontong, tauge, dan selada, disiram dengan kuah petis yang gurih",
  },
  {
    id: "10",
    title: "resep sambal dabu dabu ",
    poster:
      "https://i.pinimg.com/236x/ef/e8/9e/efe89ee8f6a311da705e89f47f7ac808.jpg",
    description:
      " Sambal khas Manado yang terbuat dari campuran cabai, bawang merah, tomat, dan perasan jeruk nipis",
  },
  {
    id: "11",
    title: "resep mi godhog jogja",
    poster:
      "https://i.pinimg.com/236x/8f/5f/72/8f5f72b47cba38363a03d612c36f66a1.jpg",
    description:
      "Mi rebus khas Jogja yang dimasak dengan kuah gurih dan sedikit manis",
  },
  {
    id: "12",
    title: "resep kerak telor",
    poster:
      "https://i.pinimg.com/236x/e6/8f/b2/e68fb27847f81bbbf620afbea69627d3.jpg",
    description:
      "Makanan khas Betawi yang terbuat dari beras ketan putih, telur, dan ebi",
  },
  {
    id: "13",
    title: "resep rendang ",
    poster:
      "https://i.pinimg.com/236x/8c/24/9f/8c249f1c5a07371b5ae0f36fe7a13692.jpg",
    description: "daging sapi yang dimasak dengan santan dan rempah-rempah ",
  },
  {
    id: "14",
    title: "resep otak otak",
    poster:
      "https://i.pinimg.com/236x/df/85/11/df85119c23c5023ded4daff8af7efb9b.jpg",
    description:
      "ikan tenggiri yang dihaluskan, dicampur dengan bumbu, dan dibungkus daun pisang sebelum dipanggang",
  },
  {
    id: "15",
    title: "resep papeda",
    poster:
      "https://i.pinimg.com/236x/f6/1f/ed/f61fedd7e30310ac7682938f52ab1ac6.jpg",
    description: "Bubur sagu khas Papua dan Maluku yang bertekstur kenyal",
  },
  {
    id: "16",
    title: "resep karedok",
    poster:
      "https://i.pinimg.com/236x/50/dd/fc/50ddfc38b066abc77cad3ed184556b03.jpg",
    description:
      "Hidangan khas Sunda berupa sayuran mentah yang disiram bumbu kacang",
  },
  {
    id: "17",
    title: "resep rujak cingur",
    poster:
      "https://i.pinimg.com/236x/c2/a7/30/c2a7306c92db9c8cd37043c85b103095.jpg",
    description:
      "Terdiri dari cingur (mulut sapi), sayuran, dan lontong, disiram dengan bumbu kacang dan petis",
  },
  {
    id: "18",
    title: "resep nogosari ",
    poster:
      "https://i.pinimg.com/236x/ce/7c/c3/ce7cc37e2a9f9a0ce58a63c128f998d3.jpg",
    description:
      "Jajanan tradisional dari tepung beras dan santan, diisi pisang, kemudian dibungkus daun pisang",
  },
  {
    id: "19",
    title: "resep coto makasar",
    poster:
      "https://i.pinimg.com/236x/45/b2/6c/45b26c9f302be3fdd3c06caca8f79e0c.jpg",
    description:
      "Sup daging khas Makassar yang dimasak dengan rempah-rempah dan kacang tanah",
  },
  {
    id: "20",
    title: "resep es pisang ijo",
    poster:
      "https://i.pinimg.com/236x/a1/38/06/a1380650eca3df71300b83cfc0ea8abb.jpg",
    description:
      "Hidangan penutup khas Makassar berupa pisang yang dibalut adonan hijau dari tepung, disajikan dengan kuah santan dan sirup merah manis",
  },
];

export default function TeamDetail() {
  const { team } = useLocalSearchParams(); // Ambil parameter 'team' dari URL
  const selectedItem = DATA.find((item) => item.id === team); // Temukan item berdasarkan ID

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedItem.poster }} style={styles.image} />
      <Text style={styles.title}>{selectedItem.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
