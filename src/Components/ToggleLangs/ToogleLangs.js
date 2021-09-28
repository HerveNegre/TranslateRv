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
            <img onClick={() => toggleLang("FR")} src={franceFlag} alt="france" />
            <img onClick={() => toggleLang("EN")} src={englishFlag} alt="english" />
            <img onClick={() => toggleLang("ES")} src={spainFlag} alt="spain" />
        </div>
    )
}
