import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: object;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const FieldTitle: React.FC<{ title: string }> = ({ title }) => (
  <Text style={styles.fieldTitle}>{title}</Text>
);

const FieldIcon: React.FC<{ name: string }> = ({ name }) => (
  <Ionicons name={name} size={20} color="#FFAE00" style={styles.fieldIcon} />
);

const PasswordToggle: React.FC<{
  showPassword: boolean;
  handlePassword: () => void;
}> = ({ showPassword, handlePassword }) => (
  <TouchableOpacity onPress={handlePassword} style={styles.passwordToggle}>
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color="#dfdede"
    />
  </TouchableOpacity>
);

const PasswordInput: React.FC<{
  placeholder: string;
  value: string;
  handleChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}> = ({
  placeholder,
  value,
  handleChangeText,
  secureTextEntry,
  keyboardType,
}) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor="#ddd"
    value={value}
    onChangeText={handleChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    style={styles.inputField}
  />
);

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  keyboardType = "default",
  secureTextEntry,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => setShowPassword((prev) => !prev);

  const icon =
    title === "E-mail"
      ? "mail"
      : title === "Nome"
      ? "person"
      : title === "Senha" || secureTextEntry
      ? "lock-closed"
      : undefined;

  return (
    <View style={styles.container}>
      <FieldTitle title={title} />
      <View />
      <View style={styles.inputWrapper}>
        {icon && <FieldIcon name={icon} />}
        <PasswordInput
          placeholder={placeholder}
          value={value}
          handleChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />
        {secureTextEntry && (
          <PasswordToggle
            showPassword={showPassword}
            handlePassword={handlePassword}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  fieldTitle: {
    color: "white",
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 16,
  },
  fieldIcon: {
    position: "absolute",
    left: 16,
  },
  inputField: {
    color: "white",
    fontWeight: "600",
    justifyContent: "center",
    paddingLeft: "10%",
  },
  inputWrapper: {
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
  passwordToggle: {
    position: "absolute",
    right: 16,
  },
});

export default FormField;
