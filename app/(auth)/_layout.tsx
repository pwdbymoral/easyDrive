import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/Header";

const authLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: true, header: () => <Header title="Login" /> }}
      />
      <Stack.Screen
        name="cadastro"
        options={{
          headerShown: true,
          header: () => <Header title="Cadastro" />,
        }}
      />
    </Stack>
  );
};

export default authLayout;
