import React from "react";

import Nav from '../components/Nav/Nav.jsx'

import './styles/styleAbout.css'

export default function About() {
    return(
        <React.StrictMode>
            <Nav />
            <h1 className="h1test">Sobre</h1>
        </React.StrictMode>
    )
}