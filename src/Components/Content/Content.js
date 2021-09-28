import React, { useContext } from 'react'
import "./Content.css"
import data from "../../assets/data"
import {Context} from "../../context/contextLangs"

export default function Content() {

    const {lang} = useContext(Context)

    return (
        <div className="content">
            <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].txt}</p>
        </div>
    )
}
