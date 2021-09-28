import React, { createContext, useState } from 'react'

export const Context = createContext();

const langType = ["EN", "FR", "ES"];

let navLang = navigator.language.slice(0,2).toUpperCase();

if (langType.indexOf(navLang) === -1) {
    navLang = "EN";
}

const ContextProvider = props => {

    const [lang, setLang] = useState(navLang)

    const toggleLang = changeLang => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;