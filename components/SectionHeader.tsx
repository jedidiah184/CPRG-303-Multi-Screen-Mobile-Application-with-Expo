import { StyleSheet, Text } from "react-native";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title, }: SectionHeaderProps) {
  return (
    <Text style={styles.heading}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 24,
  },
});