import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export default function DetailsSection({ phone, email, location }) {
  const handleRowPress = (label, value) => {
    let message = "";
    if (label === "Phone") {
      message = `Call ${value}?`;
    } else if (label === "Email") {
      message = `Send email to ${value}?`;
    } else {
      message = `View location: ${value}?`;
    }

    Alert.alert(label, message, [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => console.log(`${label} action confirmed`) },
    ]);
  };

  return (
    <View style={styles.detailsContainer}>
      <Pressable
        style={({ pressed }) => [styles.row, pressed && styles.pressedRow]}
        onPress={() => handleRowPress("Phone", phone)}
      >
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{phone}</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.row, pressed && styles.pressedRow]}
        onPress={() => handleRowPress("Email", email)}
      >
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.row,
          styles.lastRow,
          pressed && styles.pressedRow,
        ]}
        onPress={() => handleRowPress("Location", location)}
      >
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{location}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  pressedRow: {
    backgroundColor: "#f1f3f5", // Light grey highlight when tapped
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#495057",
  },
  value: {
    fontSize: 15,
    color: "#212529",
  },
});
