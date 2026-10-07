import { ScrollView, StyleSheet, Text, View, } from "react-native";

import { Stack, useLocalSearchParams, } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import SongRow from "../../../components/SongRow";
import { albums } from "../../../data/musicData";

export default function AlbumDetailScreen() {
  const { id } =
    useLocalSearchParams<{ id: string }>();

  const album = albums.find((item) => item.id === id);

  if (!album) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Album not found.
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: album.title,
        }}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View
          style={[
            styles.albumCover,
            {
              backgroundColor: album.color,
            },
          ]}
        >
          <Text style={styles.albumLetter}>
            {album.title.charAt(0)}
          </Text>
        </View>

        <Text style={styles.title}>
          {album.title}
        </Text>

        <Text style={styles.artist}>
          {album.artist}
        </Text>

        <Text style={styles.description}>
          {album.description}
        </Text>

        <View style={styles.actionRow}>
          <View style={styles.leftActions}>
            <Ionicons
              name="heart-outline"
              size={30}
              color="#B3B3B3"
            />

            <Ionicons
              name="arrow-down-circle-outline"
              size={30}
              color="#B3B3B3"
            />

            <Ionicons
              name="ellipsis-horizontal"
              size={30}
              color="#B3B3B3"
            />
          </View>

          <View style={styles.playButton}>
            <Ionicons
              name="play"
              size={30}
              color="#000000"
            />
          </View>
        </View>

        {album.songs.map((song) => (
          <SongRow
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  content: {
    padding: 20,
    alignItems: "stretch",
    paddingBottom: 50,
  },

  albumCover: {
    width: 240,
    height: 240,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  albumLetter: {
    color: "#FFFFFF",
    fontSize: 80,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  artist: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
  },

  description: {
    color: "#A7A7A7",
    fontSize: 14,
    marginTop: 6,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },

  leftActions: {
    flexDirection: "row",
    gap: 22,
  },

  playButton: {
    backgroundColor: "#1ED760",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  errorContainer: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: "#FFFFFF",
  },
});