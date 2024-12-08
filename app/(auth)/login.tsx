import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import FormField from "../../components/FormField";
import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/easyDriveNoBG.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1056B3",
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    height: 300,
    width: 450,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  welcomeText: {
    color: "white",
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: "bold",
  },
  passwordField: {
    flex: 2,
  },
  signupContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 2,
  },
  signupText: {
    color: "white",
    paddingBottom: 20,
  },
  signupLink: {
    color: "#FFAE00",
    textDecorationLine: "underline",
  },
  bolinha: {
    backgroundColor: "#DFEDFE",
    height: 72,
    width: 72,
    alignSelf: "flex-start",
    borderColor: "#1C333E",
    borderWidth: 6,
    borderRadius: 360,
    zIndex: 1,
  },
});
