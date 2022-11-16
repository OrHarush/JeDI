import React from 'react';
import { useContext } from "react";
import { useState } from "react";

const loginContext = React.createContext();
export const useLoginContext = () => useContext(loginContext);

const LoginProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('LoginToken'));

    return (
        <loginContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </loginContext.Provider>

    );
}

export default LoginProvider