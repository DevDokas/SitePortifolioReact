import React from "react";

import Nav from "../components/Nav/Nav";

export default function Register(){
    return(
        <>
        <Nav />
        <div>
            <img src="../../assets/pexels-pixabay-270373.jpg" alt="" />
            <div>
                <form>
                    <input type="text" placeholder="Nome:"/>
                </form>
            </div>
        </div>
        </>
    )
}