//React & Etc
import React from "react";

//Styles
import Logo from '../../../assets/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles/styleNav.css'

export default function Nav() {
    return(
        <>
        <nav>
            <a href="/">
                <img className="logo" src={Logo} alt="" />
            </a>
            <ul>
                <li>
                    <a className="menu" href="/">Início</a>
                </li>
                <li>
                    <a className="menu" href="/about">Saiba mais</a>
                </li>
            </ul>
            <a className="profile" href="/profile"><AccountCircleIcon sx={{height: '75px', width: '75px', color: '#172a41'}}/></a>
        </nav>
        </>
    )
}