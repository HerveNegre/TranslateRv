import React, { useContext } from 'react'
import "./ToggleLangs.css"
import FrenchFlag from "../../assets/france.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"
import SpanishFlag from "../../assets/spain.svg"
import {Context} from "../../context/contextLangs"

export default function ToogleLangs() {

    const {toggleLang} = useContext(Context)

    return (
        <div className="container-langs">
            <img onClick={() => toggleLang("FR")} src={FrenchFlag} alt="france" />
            <img onClick={() => toggleLang("EN")} src={EnglishFlag} alt="english" />
            <img onClick={() => toggleLang("ES")} src={SpanishFlag} alt="spain" />
        </div>
    )
}
