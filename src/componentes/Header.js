import React, { use } from "react";
import logo from '../imagenes/logo.png';
import '../css/Header.css'
import { useState } from "react";



function Header(){
    const [menushow,setShow] = useState(false); 

    const MostrarMenu = () =>{
    setShow(!menushow);
    }
    return(
        <header>
            <img className="logo" src={logo}></img>
            <nav >
            <button id="menu-toggle" onClick={MostrarMenu}>☰</button>
            <ul id="menu"  className={`menu-desplegable ${menushow ? "show" : ""}`}>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#catalogo">Categorías</a></li>
            </ul>
    </nav>
        </header>
    )
}

export default Header;