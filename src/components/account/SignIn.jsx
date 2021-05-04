import React from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.css"


function SignIn() {
    return (
        <div className="signIn">
            <div className="signIn__top">
                <h2>Iniciar sesión</h2>
            </div>
            <div className="signIn__contents">
                <form action="" className="signIn__form">
                    <label htmlFor="">Correo electrónico</label>
                    <input type="text" />
                    <label htmlFor="">Contraseña</label>
                    <input type="text" />
                    <Link to="/" className="signIn__forgot-password">¿Olvidaste tu contraseña?</Link>
                    <Link to="/" className="signIn__btn login">
                        Iniciar sesión
                    </Link>
                    <Link to="/" className="signIn__btn facebook-login">
                        Iniciar sesión con Facebook
                    </Link>
                </form>
                <p style={{ textAlign: "center" }}>¿No tiene cuenta? <Link to="/" className="signIn__create-account">Crear una cuenta</Link></p>
            </div>
        </div>
    )
}

export default SignIn
