import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import DetailsSection from "./components/DetailsSection";
import NotesSection from "./components/NotesSection";

const AVATAR_URL = "https://i.pravatar.cc/200";
const MAX_NOTE_LENGTH = 200;

export default function App() {
  const [notes, setNotes] = useState("");

  // State to track the active tab: true for "Details", false for "Notes"
  const [isDetailsTab, setIsDetailsTab] = useState(true);

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

            {/* Tab Navigation Row */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  isDetailsTab && styles.activeTabButton,
                ]}
                onPress={() => setIsDetailsTab(true)}
              >
                <Text
                  style={[styles.tabText, isDetailsTab && styles.activeTabText]}
                >
                  Details
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabButton,
                  !isDetailsTab && styles.activeTabButton,
                ]}
                onPress={() => setIsDetailsTab(false)}
              >
                <Text
                  style={[
                    styles.tabText,
                    !isDetailsTab && styles.activeTabText,
                  ]}
                >
                  Notes
                </Text>
              </TouchableOpacity>
            </View>

            {/* Conditional Rendering based on active tab state */}
            {isDetailsTab ? (
              // Details Section
              <DetailsSection
                phone="+65 9123 4567"
                email="alex@example.com"
                location="Singapore"
              />
            ) : (
              // Notes Section
              <NotesSection
                notes={notes}
                setNotes={setNotes}
                maxNoteLength={MAX_NOTE_LENGTH}
              />
            )}
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
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6c757d",
  },
  activeTabText: {
    color: "#007bff",
  },
});
