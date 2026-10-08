import { Image, Pressable, StyleSheet, Text,} from "react-native";

type AlbumCardProps = {
  title: string;
  artist: string;
  image: any;
  onPress: () => void;
};

export default function AlbumCard({ title, artist, image, onPress, }: AlbumCardProps) {
  return (
    // Makes the album card clickable
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      {/* Album cover */}
      <Image
        source={image}
        style={styles.albumImage}
      />

      {/* Album title */}
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>

      {/* Artist name */}
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
// Album card layout
  card: {
    width: 155,
    marginRight: 16,
  },

  // Album cover image
  albumImage: {
    width: 155,
    height: 155,
    marginBottom: 8,
  },

  // Album title
  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  // Artist name
  artist: {
    color: "#A7A7A7",
    fontSize: 13,
    marginTop: 4,
  },
});