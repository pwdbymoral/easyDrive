import React, { FC } from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";

interface CustomBttnProps {
  title: string;
  handlePress: () => void;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  isLoading?: boolean;
}

const CustomBttn: FC<CustomBttnProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={containerStyles}
      disabled={isLoading}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBttn;
