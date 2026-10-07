import { Pressable, StyleSheet, Text, View, } from "react-native";

type AlbumCardProps = {
  title: string;
  artist: string;
  color: string;
  onPress: () => void;
};

export default function AlbumCard({ title, artist, color, onPress,}: AlbumCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      <View
        style={[
          styles.albumImage,
          { backgroundColor: color },
        ]}
      >
        <Text style={styles.albumLetter}>
          {title.charAt(0)}
        </Text>
      </View>

      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>

      <Text
        style={styles.artist}
        numberOfLines={1}
      >
        {artist}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 155,
    marginRight: 16,
  },

  albumImage: {
    height: 155,
    width: 155,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  albumLetter: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  artist: {
    color: "#A7A7A7",
    fontSize: 13,
    marginTop: 4,
  },
});