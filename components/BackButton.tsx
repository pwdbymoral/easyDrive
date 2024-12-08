import { View, ViewStyle } from "react-native";
import React from "react";
import { Href, router } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";

interface BackButtonProps {
  route: Href<string | object>;
  style?: ViewStyle;
}

const BackButton = ({ route, style }: BackButtonProps) => {
  return (
    <View style={style}>
      <Icon
        name="arrow-back"
        size={24}
        color="#FFAE00"
        onPress={() => router.push(route)}
      />
    </View>
  );
};

export default BackButton;
