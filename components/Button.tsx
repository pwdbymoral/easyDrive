import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  onPress: () => void;
  text: string;
  loading?: boolean;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, loading, style }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    disabled={loading}
  >
    {loading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text style={styles.buttonText}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#FFAE00",
    borderRadius: 20,
    borderColor: "#1C333E",
    borderWidth: 4,
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
