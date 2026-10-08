import {
  Image,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type AlbumCardProps = {
  title: string;
  artist: string;
  image: any;
  onPress: () => void;
};

export default function AlbumCard({
  title,
  artist,
  image,
  onPress,
}: AlbumCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.albumImage}
      />

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
    width: 155,
    height: 155,
    marginBottom: 8,
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