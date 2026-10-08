import { ScrollView, StyleSheet, Text, View, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import AlbumCard from "../../../components/AlbumCard";
import SectionHeader from "../../../components/SectionHeader";
import { albums } from "../../../data/musicData";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Top header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Good evening
        </Text>

        <View style={styles.headerIcons}>
          <Ionicons
            name="notifications-outline"
            color="white"
            size={25}
          />

          <Ionicons
            name="time-outline"
            color="white"
            size={25}
          />

          <Ionicons
            name="settings-outline"
            color="white"
            size={25}
          />
        </View>
      </View>

      {/* Filter buttons */}
      <View style={styles.filters}>
        <View style={styles.activeFilter}>
          <Text style={styles.activeFilterText}>
            All
          </Text>
        </View>

        <View style={styles.filter}>
          <Text style={styles.filterText}>
            Music
          </Text>
        </View>

        <View style={styles.filter}>
          <Text style={styles.filterText}>
            Podcasts
          </Text>
        </View>
      </View>

      <SectionHeader title="Recently played" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* Display each album */}
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            artist={album.artist}
            image={album.image}
            onPress={() =>
              router.push(`/album/${album.id}`)
            }
          />
        ))}
      </ScrollView>

      <SectionHeader title="Made for you" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* Display albums in reverse order */}
        {albums
          .slice()
          .reverse()
          .map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              image={album.image}
              onPress={() =>
                router.push(`/album/${album.id}`)
              }
            />
          ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Main screen
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  // Screen spacing
  content: {
    padding: 18,
    paddingTop: 60,
    paddingBottom: 120,
  },

  // Header layout
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Greeting text
  greeting: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  // Header icon layout
  headerIcons: {
    flexDirection: "row",
    gap: 18,
  },

  // Filter button layout
  filters: {
    flexDirection: "row",
    gap: 8,
    marginTop: 25,
  },

  // Normal filter button
  filter: {
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
  },

  // Normal filter text
  filterText: {
    color: "#FFFFFF",
  },

  // Selected filter button
  activeFilter: {
    backgroundColor: "#1ED760",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
  },

  // Selected filter text
  activeFilterText: {
    color: "#000000",
    fontWeight: "600",
  },
});