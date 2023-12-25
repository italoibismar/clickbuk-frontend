import axios from "axios";
import { sleep } from "./Utils";

export const api = axios.create({
    baseURL: "https://clickbuk-api.vercel.app",
});

// // Adicione um interceptor para solicitações
// api.interceptors.request.use(
//     (config) => {
//       // Aqui você pode adicionar configurações de autenticação, como tokens, se necessário
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
  
  // // Adicione um interceptor para respostas
  // api.interceptors.response.use(
  //   (response) => {
  //     // Se a resposta for bem-sucedida, apenas a retorna
  //     return response;
  //   },
  //   (error) => {
  //     // Se a resposta retornar um status 401, faça o logout
  //     if (error.response && error.response.status === 401) {
  //       // Coloque aqui a lógica para fazer o logout do usuário
  //       window.localStorage.clear();
  //       window.location.href = "./acesso";
  //     }
  
  //     // Retorna o erro para que ele possa ser tratado nas chamadas que o originaram
  //     return Promise.reject(error);
  //   }
  // );

api.interceptors.response.use(async data => {
    await sleep(500);

    return data;
});

// export const createSession = async (email, password) => {
//     return api.post("/login", { email, password });
// }