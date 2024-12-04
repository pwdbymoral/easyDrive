import React from "react";
import { Link, router } from "expo-router";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import CustomBttn from "../components/CustomBttn";

var largura = Dimensions.get('window').width
var altura = Dimensions.get('window').height

const index = () => {
  return (
    <View style={styles.backside}>
      <View style={styles.formContainer}>
        <View style={{alignSelf: "stretch", alignItems: "center"}}>
          <Image
            source={require("../assets/images/vigarisse.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.teste}>
          
          <Text style={{fontSize: 24, color: "white", letterSpacing: 2}}>
            Facilite sua direção com
          </Text>
          
          <Text style={{fontSize: 20, color: "white", letterSpacing: 1,}}>
           seu melhor amigo de viagens
          </Text>
          
        </View>
        <View style={{marginTop: 24}}>
          <View style={{marginBottom: 10}}>
            <CustomBttn
              title="Login"
              handlePress={() => router.push("/login")}
              textStyles={styles.butao}
            />
          </View>
        <CustomBttn
          title="Cadastro"
          handlePress={() => router.push("/cadastro")}
          textStyles={styles.butao}
        />

        </View>
      </View>
    </View>
  );
};

export default index;

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
    width: largura,
    height: altura,
    flex: 1,
    alignContent: "flex-start",
    
  },
  teste: {
    justifyContent: "center",
    alignItems: "center",

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
  
});