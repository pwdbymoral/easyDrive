import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FormField from "./FormField";
import Button from "./Button";
import { Link, router } from "expo-router";
import { signUp } from "@/api/signup";

const SignupForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // const response = await signUp(nome, email, password);
      console.log("Cadastro realizado com sucesso!");
      router.push("../(tabs)/home");
    } catch (error) {
      console.error(
        "Erro ao tentar cadastrar o motorista. Tente novamente.",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormField
          title="Nome"
          value={nome}
          placeholder="Digite seu nome"
          handleChangeText={setNome}
        />
        <FormField
          title="E-mail"
          value={email}
          placeholder="Digite seu e-mail"
          handleChangeText={setEmail}
          keyboardType="email-address"
        />
        <FormField
          title="Senha"
          value={password}
          placeholder="Digite sua senha"
          handleChangeText={setPassword}
          secureTextEntry
        />
        <Button
          text="Cadastre-se"
          onPress={handleSubmit}
          style={styles.buttonSubmit}
          loading={isSubmitting}
        />
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Já tem uma conta?</Text>
          <Link href={"/cadastro"} style={styles.link}>
            Pegue o caminho certo!
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  form: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderColor: "#4B96F9",
  },
  buttonSubmit: {
    alignSelf: "center",
  },
  linkContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 2,
  },
  linkText: {
    color: "white",
    paddingBottom: 20,
  },
  link: {
    color: "#FFAE00",
    textDecorationLine: "underline",
  },
});

export default SignupForm;
