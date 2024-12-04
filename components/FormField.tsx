import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardTypeOptions } from "react-native";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: object;
  keyboardType?: KeyboardTypeOptions;
}

const FormFieldIcon: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View style={styles.iconWrapper}>
      <FontAwesome name={name} size={24} color="red" style={styles.icon} />
    </View>
  );
};

const FormFieldPasswordToggle: React.FC<{
  showPassword: boolean;
  handlePassword: () => void;
}> = ({ showPassword, handlePassword }) => {
  return (
    <TouchableOpacity onPress={handlePassword}>
      <FontAwesome
        name={!showPassword ? "eye" : "eye-slash"}
        size={24}
        color="#dfdede"
        style={styles.eyeIcon}
      />
    </TouchableOpacity>
  );
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType = "default",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const icon =
    title === "E-mail" ? "user" : title === "Password" ? "lock" : undefined;

  return (
    <View style={otherStyles}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconBackground} />
      <View style={styles.inputContainer}>
        {icon && <FormFieldIcon name={icon} />}
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />
        {title === "Password" && (
          <FormFieldPasswordToggle
            showPassword={showPassword}
            handlePassword={handlePassword}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    paddingLeft: 70,
    marginBottom: -10,
  },
  iconBackground: {
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
  },
  inputContainer: {
    backgroundColor: "#4B96F9",
    borderColor: "#1C333E",
    borderWidth: 4,
    borderRadius: 40,
    width: 360,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconWrapper: {
    position: "absolute",
    left: 24,
    bottom: 10,
    zIndex: 2,
  },
  icon: {
    alignSelf: "center",
  },
  textInput: {
    flex: 1,
    color: "white",
    fontWeight: "600",
    justifyContent: "center",
    paddingLeft: 80,
  },
  eyeIcon: {
    paddingTop: 9,
    paddingRight: 10,
  },
});

export default FormField;
