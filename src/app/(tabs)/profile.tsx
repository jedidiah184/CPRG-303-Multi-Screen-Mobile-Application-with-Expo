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

      <Text style={styles.name}>
        Jedidiah
      </Text>

      <Text style={styles.followers}>
        12 followers • 18 following
      </Text>

      <Pressable style={styles.editButton}>
        <Text style={styles.editText}>
          Edit profile
        </Text>
      </Pressable>

      <Text style={styles.sectionTitle}>
        Your playlists
      </Text>

      <View style={styles.playlist}>
        <View style={styles.playlistImage}>
          <Ionicons
            name="musical-notes"
            size={35}
            color="#FFFFFF"
          />
        </View>

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
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    paddingTop: 75,
    alignItems: "center",
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
  },

  profileLetter: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  followers: {
    color: "#A7A7A7",
    marginTop: 10,
  },

  editButton: {
    borderWidth: 1,
    borderColor: "#777777",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 25,
  },

  editText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 15,
  },

  playlist: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },

  playlistImage: {
    width: 70,
    height: 70,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  playlistTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  playlistInfo: {
    color: "#A7A7A7",
    marginTop: 5,
  },
});