import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.113.161:8000",
});

const signUp = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post("/CadastrarMotorista/cadastrar", {
      name,
      telefone: "21999999999",
      email,
      password,
      meta_diaria_liquida: 150.0,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Erro ao cadastrar: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
};

export { signUp };
