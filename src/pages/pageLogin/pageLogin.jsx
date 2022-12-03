import React from "react";

import Coding from '../../assets/coding.jpg'
import './styles/styleLogin.css'

export default function Login() {
    return (
        <>
        <div className="container">
        <img src={Coding} alt="" />
        <form action="#">
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
                <a href="/register" className="Button RegisterButton">Registrar</a>
            </div>
        </form>
        </div>
        </>
    )
}