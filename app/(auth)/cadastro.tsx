import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import CustomBttn from "../../components/CustomBttn";
import FormField from "../../components/FormField";

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      console.log(form);
      const response = await fetch(
        "http://192.168.113.161:8000/CadastrarMotorista/cadastrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: form.nome,
            telefone: "21999999999",
            email: form.email,
            senha: form.password,
            meta_diaria_liquida: 150.0,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        router.push("../(tabs)/home");
      } else {
        console.log("Erro: dados incorretos", data.message);
      }
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
    <View style={styles.backside}>
      <View style={styles.teste}>
        <Image
          source={require("../../assets/images/easyDriveNoBG.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.formContainer,
            {
              color: "white",
              fontSize: 20,
              letterSpacing: 4,
              fontWeight: "bold",
            },
          ]}
        >
          Venha você também dirigir facilmente
        </Text>
        <FormField
          title="Nome"
          value={form.nome}
          placeholder="Digite seu nome"
          handleChangeText={(e) => setForm({ ...form, nome: e })}
          otherStyles={{ marginBottom: 20 }}
        />
        <FormField
          title="E-mail"
          value={form.email}
          placeholder="Digite seu e-mail"
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={{ marginBottom: 20 }}
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          placeholder="Digite sua senha"
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={{ flex: 4 }}
        />
        <CustomBttn
          title="Cadastre-se"
          handlePress={submit}
          textStyles={styles.butao2}
          isLoading={isSubmitting}
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Text style={{ color: "white", paddingBottom: 20 }}>
            Já tem uma conta?
          </Text>
          <Link
            href={"/cadastro"}
            style={{ color: "orange", textDecorationLine: "underline" }}
          >
            Pegue o caminho certo!
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  backside: {
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
    width: 300,
    height: 300,
    flex: 1,
    alignContent: "flex-start",
    margin: 20,
  },
  teste: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  butao: {
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
  butao2: {
    backgroundColor: "#4B96F9",
    borderColor: "#1C333E",
    borderWidth: 4,
    borderRadius: 40,
    width: 220,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 4,
  },
});
