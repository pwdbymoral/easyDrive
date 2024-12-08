// api/login.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.113.161:8000",
});

const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/loginMotorista/login", {
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Erro ao fazer login: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export { login };
