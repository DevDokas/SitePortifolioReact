//React & Etc
import React from "react";

//Components
import Nav from "../components/Nav/Nav.jsx";

//Styles
import './styles/styleHome.css'
import Background from '../../assets/background.png'

export default function Home() {
    return(
    <React.StrictMode>
        <HomeApp />
    </React.StrictMode>
    )
}

function HomeApp() {
    return(
        <div style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        /* marginTop: '-35px' */
        }}>
        
        <Nav />
        <div className="screen">
            <p className="DevDokasParagraph"><span className="TextColorOne">devdokas@devdokas-linux</span>:<span className="TextColorTwo">~</span>$</p>
        </div>    
        </div>
    )
}

