import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";

type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <BackButton style={styles.backButton} route={"/"} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: "10%",
    paddingVertical: "3%",
    backgroundColor: "#1056B3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#FFAE00",
    borderBottomWidth: 2,
  },
  backButton: {
    position: "absolute",
    paddingLeft: "10%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    flex: 1,
    textAlign: "center",
  },
});
