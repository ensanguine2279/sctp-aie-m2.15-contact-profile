import { StyleSheet, Text, View, Image } from "react-native";

export default function Header({ name, title, avatarUrl }) {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.subtitleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 16,
    color: "#6c757d",
  },
});
