import { StyleSheet, Text, View, } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type SongRowProps = { title: string; artist: string; duration: string; };

export default function SongRow({ title, artist, duration, }: SongRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.artist}>
          {artist} • {duration}
        </Text>
      </View>

      <Ionicons
        name="ellipsis-vertical"
        size={20}
        color="#A7A7A7"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  artist: {
    color: "#A7A7A7",
    fontSize: 13,
    marginTop: 4,
  },
});