import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import propTypes from "prop-types";

import { api } from "../lib/Api";
import { usersService } from "../lib/services/usersService";
import { useMutation } from "react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (token && recoveredUser) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        setLoading(false);

    }, []);

    const { isLoading, mutateAsync } = useMutation(usersService.create);

    const login = async (email, password) => {
        try {
            const response = await mutateAsync({email, password});
    
            const loggedUser = response.data.user;
            const token = response.data.token;
    
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    
            localStorage.setItem("user", JSON.stringify(loggedUser)); 
            localStorage.setItem("token", token);
    
            setUser({loggedUser});
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Não foi possível entrar", {
                    position: toast.POSITION.TOP_RIGHT
                });
                
            }
        }
    };

    const logout = () => {
        window.localStorage.clear();
        api.defaults.headers.Authorization = null;
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{auth: !!user, user, login, loading, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: propTypes.node
}