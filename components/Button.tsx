import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  onPress: () => void;
  text: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, loading }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
    {loading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text style={styles.buttonText}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#FFAE00",
    borderRadius: 20,
    borderColor: "#1C333E",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#1C333E",
    fontWeight: "bold",
  },
});

export default Button;
