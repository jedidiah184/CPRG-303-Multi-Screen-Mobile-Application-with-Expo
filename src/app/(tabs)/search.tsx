import { StyleSheet, Text, TextInput, View, ScrollView, } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const categories = [
  { name: "Pop", color: "#8D67AB" },
  { name: "Hip-Hop", color: "#BA5D07" },
  { name: "Rock", color: "#E61E32" },
  { name: "R&B", color: "#DC148C" },
  { name: "Podcasts", color: "#006450" },
  { name: "Charts", color: "#1E3264" },
];

export default function SearchScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>
        Search
      </Text>

      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={23}
          color="#000000"
        />

        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#555555"
        />
      </View>

      <Text style={styles.sectionHeading}>
        Browse all
      </Text>

      <View style={styles.grid}>
        {categories.map((category) => (
          <View
            key={category.name}
            style={[
              styles.category,
              {
                backgroundColor:
                  category.color,
              },
            ]}
          >
            <Text style={styles.categoryTitle}>
              {category.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  content: {
    padding: 18,
    paddingTop: 60,
    paddingBottom: 100,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },

  searchBox: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 5,
    height: 50,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "600",
  },

  sectionHeading: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  category: {
    width: "48%",
    height: 105,
    borderRadius: 6,
    padding: 15,
    marginBottom: 15,
  },

  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});