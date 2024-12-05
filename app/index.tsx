import React from "react";
import { router } from "expo-router";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import CustomBttn from "../components/CustomBttn";
import Button from "@/components/Button";

const { width, height } = Dimensions.get("window");

const Index: React.FC = () => {
  return (
    <View style={styles.backside}>
      <View style={styles.formContainer}>
        <Image
          source={require("../assets/images/vigarisse.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          Facilite sua direção com seu melhor amigo de viagens
        </Text>
        <View style={styles.buttons}>
          <Button text="Login" onPress={() => router.push("/login")} />
          <Button text="Cadastro" onPress={() => router.push("/cadastro")} />
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  backside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D4792",
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  logo: {
    width: width,
    height: height,
    flex: 1,
    alignContent: "flex-start",
  },
  title: {
    fontSize: 24,
    color: "white",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 24,
    marginHorizontal: 30,
  },
  buttons: {
    flexDirection: "column",
    height: 110,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#4B96F9",
    borderColor: "#1C333E",
    borderWidth: 4,
    borderRadius: 40,
    width: 360,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 4,
  },
});
