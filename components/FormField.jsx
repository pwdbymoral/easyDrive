import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={otherStyles}>
      <Text style={{color: "white", paddingLeft: 70, marginBottom: -10}}/*"text-base text-white"*/>{title}</Text>
      <View style={{
          backgroundColor: "#DFEDFE",
          height: 72, 
          width: 72, 
          alignSelf: "flex-start", 
          borderColor: "#1C333E", 
          borderWidth: 6, 
          borderRadius: 360,
          marginBottom: -60,
          zIndex: 1,
          elevation: 1,
       }}/>
      <View style={{
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
        flexDirection: "row",
      }}
      >
        <View style={{position: "absolute", left: 24, bottom: 10, zIndex: 2}}>
        {title === "E-mail" && (
            <FontAwesome
              name={"user"}
              size={24}
              color={"red"}
              resizeMode="contain"
              style={{alignSelf: "center",}}
            />
        )}
        {title === "Password" && (
            <FontAwesome
              name={"lock"}
              size={24}
              color={"red"}
              resizeMode="contain"
              style={{alignSelf: "center",}}
            />
        )}
        </View>
        <TextInput
          style={{flex: 1, color: "white", fontWeight: "semibold", justifyContent: "center", paddingLeft: 80}}/*"flex-1 text-white font-semibold text-base"*/
          value={value}
          placeholder={placeholder}
          placeholderTextColor={{color: "gray"}}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        
        {title === "Password" && (
          <TouchableOpacity onPress={handlePassword}>
            <FontAwesome
              name={!showPassword ? "eye" : "eye-slash"}
              size={24}
              color={"#dfdede"}
              resizeMode="contain"
              style={{paddingTop: 9, paddingRight: 10,}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
