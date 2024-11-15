import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EasyDrive</ThemedText>
      </ThemedView>
      <ThemedText>Valor da Corrida:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="R$ 0,00"
        keyboardType="number-pad"
      />
      <ThemedText>Distância em km:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="0,00 km"
        keyboardType="number-pad"
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: "50%",
            alignSelf: "center",
            borderWidth: 4,
            borderColor: "#1C333E",
          },
        ]}
        //border: 4px solid #1C333E
        onPress={() => alert("Em breve!")}
      >
        <ThemedText style={styles.buttonText}>Confirmar</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: 0,
    left: 0,
    // position: "absolute",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 100,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#FFF",
    color: "#333",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FFAE00",
    paddingVertical: 12,
    borderRadius: 100,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
