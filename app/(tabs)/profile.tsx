import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const Profile = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1D3D47", dark: "#A1CEDC" }}
    >
      <ThemedText>Perfil</ThemedText>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
