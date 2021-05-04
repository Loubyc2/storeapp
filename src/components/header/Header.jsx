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
            <div className="header-top">
                <div className="header-menu">
                    <AiIcons.AiOutlineMenu size={24} onClick={handleShow} />
                    <p style={{ fontSize: ".8rem" }}>Menu</p>
                </div>
                <div className={showMenu ? "header-menu-content" : "hide-menu"}>
                    <div className="header-menu-top">
                        <h4>Menú</h4>
                        <AiOutlineCloseCircle onClick={handleShow} />
                    </div>
                    <h6>I m the menu content</h6>
                    <h6>I m the menu content</h6>
                    <h6>I m the menu content</h6>
                    <h6>I m the menu content</h6>
                    <h6>I m the menu content</h6>
                    <h6>I m the menu content</h6>
                </div>
                <Link to="/" className="header-logo">
                    <h6>Louby Design</h6>
                </Link>
                <div className="header-right">
                    <Link to="/"><AiIcons.AiOutlineUser size={24} />
                        <p style={{ fontSize: ".8rem" }}>Cuenta</p>
                    </Link>
                    <Link to="/">  <RiIcons.RiShoppingCart2Line size={24} />
                        <p style={{ fontSize: ".8rem" }}>Caro</p>
                    </Link>
                </div>
            </div>

            <div className="header-search">
                <AiIcons.AiOutlineSearch size={20} />
                <input type="text" name="" id="" placeholder="Buscar productos" />
            </div>

        </div>
    )
}

export default Header


