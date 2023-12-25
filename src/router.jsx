import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from "./lib/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import { Private } from "./lib/Private";

import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
import Welcome from "./pages/Welcome";
import Reset from "./pages/Reset"
import List from "./pages/List";
import Categories from "./pages/Category";
import Summary from "./pages/Summary";
import SignUp from "./pages/Signup";
import { Layout } from "./components/Layout";
import Account from "./pages/Account";
import Subscribe from "./pages/Subscribe";
import Test from "./pages/Test";

const Router = () => {
    return ( 
        <BrowserRouter>
            <ToastContainer theme="colored" />
            <ScrollToTop />
            <AuthProvider>
                <Routes>
                    <Route element={<Private isPrivate={false} />}>
                        <Route path="/acesso" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/esqueci-minha-senha" element={<Forgot />} />
                        <Route path="/confirmar-cadastro" element={<Confirm />} />
                        <Route path="/seja-bem-vindo/:id/verify/:token" element={<Welcome />} />
                        <Route path="/redefinir-senha/:token" element={<Reset />} />
                    </Route>

                    <Route element={<Private isPrivate />}>
                        <Route path="/minha-conta" element={<Account />} />
                        <Route path="/assinatura" element={<Subscribe />} />
                        <Route path="/testes" element={<Test />}/>
                        <Route element={<Layout />}>
                            <Route path="/" element={<List />} />
                            <Route path="/categorias" element={<Categories />} />
                            <Route path="/resumos" element={<Summary />} />
                            <Route path="/minha-conta" element={<Account />} />
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
     );
}
 
export default Router;