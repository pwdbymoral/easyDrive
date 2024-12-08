import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import Button from "@/components/Button";
import FormField from "../../components/FormField";
import SignupForm from "@/components/SignupForm";

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/easyDriveNoBG.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>
          Venha você também dirigir facilmente.
        </Text>
      </View>
      <SignupForm />
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1056B3",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  logo: {
    height: 300,
    width: 450,
  },
  titleText: {
    color: "white",
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
