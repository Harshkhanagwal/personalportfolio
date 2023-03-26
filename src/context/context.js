import { createContext } from "react";
import { useState } from "react";


export const Globalcontext = createContext();

export const GlobalData = ({ children }) => {

    const [theme, setTheme] = useState('dark')
    const [menu, setMenu] = useState(true)



    return (<Globalcontext.Provider value={{ theme, menu, setMenu, setTheme }}>{children}</Globalcontext.Provider>);
}

export default GlobalData;