import React from "react";

import Logo from '../../assets/logo.png'
import './styles/styleLogin.css'

export default function Login() {
    return (
        <>
        <form action="#">
            <a href="/">
                <img src={Logo} alt="" />
            </a>
            <div className="Div DivUser">
                <label htmlFor="user">Usuário:</label> <br />
                <input type="text" id="user"/>
            </div>
            <div className="Div DivPassword">
                <label htmlFor="password">Senha:</label> <br />
                <input type="password" id="password" />
            </div>
            <div className="DivButton">
                <button className="Button LoginButton">Login</button>
                <button className="Button RegisterButton">Registrar</button>
            </div>
        </form>
        </>
    )
}