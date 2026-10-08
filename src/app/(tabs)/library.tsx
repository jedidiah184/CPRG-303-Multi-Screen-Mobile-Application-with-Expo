import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { albums } from "../../../data/musicData";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileLetter}>
            J
          </Text>
        </View>

        <Text style={styles.heading}>
          Your Library
        </Text>

        <View style={styles.headerIcons}>
          <Ionicons
            name="search"
            size={25}
            color="#FFFFFF"
          />

          <Ionicons
            name="add"
            size={30}
            color="#FFFFFF"
          />
        </View>
      </View>

      <View style={styles.filters}>
        <View style={styles.filter}>
          <Text style={styles.filterText}>
            Playlists
          </Text>
        </View>

        <View style={styles.filter}>
          <Text style={styles.filterText}>
            Albums
          </Text>
        </View>
      </View>

      {/* Album list */}
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 100,
        }}

        // Display each album
        renderItem={({ item }) => (
          <View style={styles.albumRow}>
            <Image
              source={item.image}
              style={styles.albumImage}
            />

            <View>
              <Text style={styles.albumTitle}>
                {item.title}
              </Text>

              <Text style={styles.artist}>
                Album • {item.artist}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Main screen
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 18,
    paddingTop: 60,
  },


  // Header Layout
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  profileCircle: {
    width: 35,
    height: 35,
    backgroundColor: "#1ED760",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  profileLetter: {
    fontWeight: "bold",
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
    flex: 1,
  },

  headerIcons: {
    flexDirection: "row",
    gap: 20,
  },

  // Filter button layout
  filters: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },

  // Filter button
  filter: {
    borderWidth: 1,
    borderColor: "#777777",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  filterText: {
    color: "#FFFFFF",
  },

  albumRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  albumImage: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  letter: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  albumTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  artist: {
    color: "#A7A7A7",
    fontSize: 14,
    marginTop: 5,
  },
});