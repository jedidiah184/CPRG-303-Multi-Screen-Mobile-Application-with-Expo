import { StyleSheet, Text, View, Pressable, } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Text style={styles.profileLetter}>
          J
        </Text>
      </View>

      {/* User name */}
      <Text style={styles.name}>
        Jedidiah
      </Text>

      {/* Follower information */}
      <Text style={styles.followers}>
        12 followers • 18 following
      </Text>

      <Pressable style={styles.editButton}>
        <Text style={styles.editText}>
          Edit profile
        </Text>
      </Pressable>

      {/* Playlist section */}
      <Text style={styles.sectionTitle}>
        Your playlists
      </Text>

      {/* Playlist image */}
      <View style={styles.playlist}>
        <View style={styles.playlistImage}>
          <Ionicons
            name="musical-notes"
            size={35}
            color="#FFFFFF"
          />
        </View>

        {/* Playlist information */}
        <View>
          <Text style={styles.playlistTitle}>
            My Playlist
          </Text>

          <Text style={styles.playlistInfo}>
            Playlist • Jedidiah
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main screen
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    paddingTop: 75,
    alignItems: "center",
  },

  // Profile image
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
  },

  // Profile letter
  profileLetter: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
  },

  // User name
  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  // Follower text
  followers: {
    color: "#A7A7A7",
    marginTop: 10,
  },

  // Edit profile button
  editButton: {
    borderWidth: 1,
    borderColor: "#777777",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 25,
  },

  // Edit button text
  editText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  // Playlist section title
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 15,
  },

  // Playlist row
  playlist: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },

  // Playlist image box
  playlistImage: {
    width: 70,
    height: 70,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  // Playlist title
  playlistTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // Playlist information
  playlistInfo: {
    color: "#A7A7A7",
    marginTop: 5,
  },
});