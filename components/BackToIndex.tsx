import { View, ViewStyle } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";

interface BackToIndexProps {
  style?: ViewStyle;
}

const BackToIndex = ({ style }: BackToIndexProps) => {
  return (
    <View style={style}>
      <Icon
        name="arrow-back"
        size={24}
        color="orange"
        onPress={() => router.push("/")}
      />
    </View>
  );
};

export default BackToIndex;
