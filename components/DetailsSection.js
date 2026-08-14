import { View, Text, StyleSheet } from "react-native";

export default function DetailsSection({ phone, email, location }) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={[styles.row, styles.lastRow]}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{location}</Text>
      </View>
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
