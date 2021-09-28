import React, { useContext } from 'react'
import "./ToggleLangs.css"
import franceFlag from "../../assets/france.svg"
import englishFlag from "../../assets/united-kingdom.svg"
import spainFlag from "../../assets/spain.svg"
import {Context} from "../../context/contextLangs"

export default function ToogleLangs() {

    const {toggleLang} = useContext(Context)

    return (
        <div className="container-langs">
            <img onClick={() => toggleLang("FR")} src={process.env.PUBLIC_URL + franceFlag} alt="france" />
            <img onClick={() => toggleLang("EN")} src={process.env.PUBLIC_URL + englishFlag} alt="english" />
            <img onClick={() => toggleLang("ES")} src={process.env.PUBLIC_URL + spainFlag} alt="spain" />
        </div>
    )
}
