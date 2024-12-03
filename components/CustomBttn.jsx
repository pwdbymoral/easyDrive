import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomBttn = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{containerStyles : isLoading ? opacity - 50 : ""}}
      disabled={isLoading}
    >
      <Text style={textStyles}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBttn;
