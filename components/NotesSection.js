import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function NotesSection({ notes, setNotes, maxNoteLength }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.notesContainer}>
      <Text style={styles.notesLabel}>Notes</Text>
      <TextInput
        style={[styles.textInput, isFocused && styles.focusedInput]}
        placeholder="Type a personal note about this contact..."
        placeholderTextColor="#888"
        multiline
        textAlignVertical="top"
        value={notes}
        onChangeText={setNotes}
        maxLength={maxNoteLength}
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Text style={styles.counterText}>
        {notes.length} / {maxNoteLength} characters
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notesLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 8,
  },
  textInput: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#fff",
    color: "#212529",
  },
  focusedInput: {
    borderColor: "#007bff",
    borderWidth: 2,
  },
  counterText: {
    textAlign: "right",
    fontSize: 12,
    color: "#6c757d",
    marginTop: 6,
  },
});
