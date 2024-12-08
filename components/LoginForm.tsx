import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FormField from "./FormField";
import Button from "./Button";
import { login } from "@/api/login";
import { router } from "expo-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // const response = await login(email, password);
      console.log("Login realizado com sucesso");
      router.push("../(tabs)/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
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
        text="Entrar"
        style={styles.buttonSubmit}
        onPress={handleSubmit}
        loading={isSubmitting}
      />
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
  buttonSubmit: {
    alignSelf: "center",
  },
});

export default LoginForm;
