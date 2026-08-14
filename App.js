import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import DetailsSection from "./components/DetailsSection";
import NotesSection from "./components/NotesSection";

const AVATAR_URL = "https://i.pravatar.cc/200";
const MAX_NOTE_LENGTH = 200;

export default function App() {
  const [notes, setNotes] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* KeyboardAvoidingView ensures that the keyboard does not cover the input fields on both iOS and Android platforms. */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* 
              ScrollView allows the content to be scrollable when the keyboard is open, 
              ensuring that all input fields remain accessible.
              The contentContainerStyle prop is used to apply padding around the content.
              The keyboardShouldPersistTaps prop ensures that tapping on the ScrollView does not dismiss the keyboard, 
              allowing users to interact with other elements while typing. 
          */}
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            {/* Profile Header */}
            <Header
              name="Alex Johnson"
              title="Software Engineer"
              avatarUrl={AVATAR_URL}
            />

            {/* Details Section */}
            <DetailsSection
              phone="+65 9123 4567"
              email="alex@example.com"
              location="Singapore"
            />

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Notes Section */}
            <NotesSection
              notes={notes}
              setNotes={setNotes}
              maxNoteLength={MAX_NOTE_LENGTH}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    padding: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#dee2e6",
    marginVertical: 16,
  },
});
