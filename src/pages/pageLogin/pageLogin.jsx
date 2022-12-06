import React from "react";
import Nav from "../components/Nav/Nav.jsx"

import Coding from '../../assets/pcside.png'
import './styles/styleLogin.css'

export default function Login() {
    return (
        <>
        <Nav />
        <div className="container">
        <div className="imgDiv">
            <img className="imgLogin" src={Coding} alt="" />
        </div>
        <form className="FormLogin" action="#">
            <div className="Div DivUser">
                <input type="text" id="user" placeholder="Usuário: "/>
            </div>
            <div className="Div DivPassword">
                <input type="password" id="password"  placeholder="Senha: "/>
            </div>
            <div className="DivButton">
                <button className="Button LoginButton">Login</button>
                <div className="DivText">
                    <p>Ainda não se registrou? </p>
                    <a href="/register" className="RegisterButton"> Registrar agora!</a>
                </div>
            </div>
        </form>
        </div>
        </>
    )
}