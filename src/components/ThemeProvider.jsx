import { useState } from "react";
import ThemeContext from "../utils/themeContext";

export default function ThemeProvider({children}){
    //Buat state sebagai penampung perubahan
    const [theme, setTheme] = useState('light');

    const toogleTheme = (() => {
        setTheme((currentTheme) => {
            if(currentTheme === 'light') return setTheme('dark');
            return setTheme('light');
        })
    })

    console.log(theme);

    return <ThemeContext.Provider 
        value={{theme, toogleTheme}}
    > {children} </ThemeContext.Provider>
}