import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const Profile = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1D3D47", dark: "#A1CEDC" }}
      headerImage={
        <Image
          source={require("@/assets/images/globe.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <Image
          source={require("@/assets/images/globe.png")}
          style={styles.profilePicture}
        />
        <ThemedText style={styles.profileName}>Pedro Henrique</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  reactLogo: {
    height: 290,
    width: 290,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 32,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
