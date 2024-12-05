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
}

const FormFieldIcon: React.FC<{ name: string }> = ({ name }) => (
  <View style={styles.iconWrapper}>
    <Ionicons name={name} size={24} color="red" style={styles.icon} />
  </View>
);

const FormFieldPasswordToggle: React.FC<{
  showPassword: boolean;
  handlePassword: () => void;
}> = ({ showPassword, handlePassword }) => (
  <TouchableOpacity onPress={handlePassword}>
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color="#dfdede"
      style={styles.passwordToggleIcon}
    />
  </TouchableOpacity>
);

const FormFieldTitle: React.FC<{ title: string }> = ({ title }) => (
  <Text style={styles.fieldTitle}>{title}</Text>
);

const FormFieldInput: React.FC<{
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
  otherStyles,
  keyboardType = "default",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => setShowPassword((prev) => !prev);

  const icon =
    title === "E-mail"
      ? "person"
      : title === "Password"
      ? "lock-closed"
      : undefined;

  return (
    <View style={otherStyles}>
      <FormFieldTitle title={title} />
      <View style={styles.iconBackground} />
      <View style={styles.inputWrapper}>
        {icon && <FormFieldIcon name={icon} />}
        <FormFieldInput
          placeholder={placeholder}
          value={value}
          handleChangeText={handleChangeText}
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
  fieldTitle: {
    color: "white",
    paddingLeft: 70,
    marginBottom: -10,
  },
  inputField: {
    flex: 1,
    color: "white",
    fontWeight: "600",
    justifyContent: "center",
    paddingLeft: "18%",
  },
  icon: {
    alignSelf: "center",
  },
  iconBackground: {
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
  iconWrapper: {
    alignSelf: "center",
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
  passwordToggleIcon: {
    paddingRight: 0,
  },
});

export default FormField;
