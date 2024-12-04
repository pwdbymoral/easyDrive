import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import CustomBttn from "../../components/CustomBttn";
import FormField from "../../components/FormField";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true); // Indica que o envio está em progresso
    try {
      const response = await fetch(
        "http://192.168.113.161:8000/loginMotorista/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            senha: form.password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Login bem-sucedido
        alert("Login realizado com sucesso!");
        router.push("../(tabs)/home"); // Redireciona após o login
      } else {
        // Exibe erro se houver
        alert(`Erro: dados incorretos`);
      }
    } catch (error) {
      alert("Erro ao tentar realizar o login. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false); // Finaliza o estado de carregamento
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
          Bem-vindo de volta!
        </Text>
        <FormField
          title="E-mail"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={{ marginBottom: 20 }}
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={{ flex: 2 }}
        />
        <CustomBttn
          title="Entrar"
          handlePress={submit} // Chama a função de submit para fazer o login
          textStyles={styles.butao2}
          isLoading={isSubmitting}
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
          }} /*"justify-center pt-5 flex-row gap-2"*/
        >
          <Text style={{ color: "white", paddingBottom: 20 }}>
            Não tem uma conta?
          </Text>
          <Link
            href={"/cadastro"}
            style={{ color: "orange", textDecorationLine: "underline" }}
          >
            Cadastre-se já!
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    width: 180,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 4,
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
