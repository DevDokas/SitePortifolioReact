//React & Etc
import React from "react";

//Components
import Nav from "../components/Nav/Nav.jsx";

//Styles
import './styles/styleHome.css'
/* import BackgroundVideo from '../../assets/videos/space-background.mp4' */
/* import Background from '../../assets/background.png' */

export default function Home() {
    return(
    <React.StrictMode>
        <HomeApp />
    </React.StrictMode>
    )
}

// eslint-disable-next-line
function HomeApp() {
    return(
        <>
        
        {/* <video src={BackgroundVideo} autoPlay loop muted></video> */}
        <Nav />
{/*         <div className="screen">
            <p className="DevDokasParagraph"><span className="TextColorOne">devdokas@devdokas-linux</span>:<span className="TextColorTwo">~</span>$</p>
        </div>  */}    
        </>
    )
}

