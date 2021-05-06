import React, { useState } from 'react';
// import styled from 'styled-components'
import { AiOutlineCloseCircle } from "react-icons/ai"
import "./Header.css"

// icons
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
    const [showMenu, setSwhowMenu] = useState(false)

    const handleShow = () => {
        setSwhowMenu(!showMenu)
    }
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__menu">
                    <AiIcons.AiOutlineMenu size={24} onClick={handleShow} />
                    <p style={{ fontSize: ".8rem" }}>Menu</p>
                </div>
                <div className={showMenu ? "active" : "header__menu-content"}>
                    <div className="header__menu-top">
                        <h4>Menú</h4>
                        <AiOutlineCloseCircle onClick={handleShow} />
                    </div>
                    <div className="header___menu-links">
                        <Link to="/"> <p>Explorar colecciones</p> </Link>
                        <Link to="/"> <p>Encuentrar tu pantallas</p> </Link>
                        <Link to="/"> <p>Inspírate</p> </Link>
                        <Link to="/"> <p>Edición limitada</p> </Link>
                        <Link to="/"> <p>Ayuda</p> </Link>
                        <Link to="/"> <p>Sobre nosotros</p> </Link>
                        <Link to="/signin" onClick={() => setSwhowMenu(!showMenu)}> <p>Iniciar sesión</p> </Link>

                    </div>
                    <div className="header__bestselling">
                        <Link to="/">
                            <div className="header__bestselling-card">
                                <img src="./images/bestselling/menu-bestselling-1.webp" alt="bestselling-img" />
                                <h4>Explorar los más vendidos</h4>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="header__bestselling-card">
                                <img src="./images/bestselling/menu-bestselling-2.webp" alt="bestselling-img" />
                                <h4>Colecciones destacadas</h4>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="header__bestselling-card">
                                <img src="./images/bestselling/menu-bestselling-3.webp" alt="bestselling-img" />
                                <h4>Delicias geeks</h4>
                            </div></Link>
                        <Link to="/">
                            <div className="header__bestselling-card">
                                <img src="./images/bestselling/menu-bestselling-4.webp" alt="bestselling-img" />
                                <h4>Mejores obras de arte especiales</h4>
                            </div>
                        </Link>

                    </div>
                </div>
                <Link to="/" className="header__logo">
                    <h6>Louby Design</h6>
                </Link>
                <div className="header__right">
                    <Link to="/"><AiIcons.AiOutlineUser size={24} />
                        <p style={{ fontSize: ".8rem" }}>Cuenta</p>
                    </Link>
                    <Link to="/">  <RiIcons.RiShoppingCart2Line size={24} />
                        <p style={{ fontSize: ".8rem" }}>Caro</p>
                    </Link>
                </div>
            </div>

            <div className="header__search">
                <AiIcons.AiOutlineSearch size={20} />
                <input type="text" name="" id="" placeholder="Buscar productos" />
            </div>

        </div>
    )
}

export default Header


