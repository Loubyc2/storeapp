import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data'
import Category from './Category'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__carousel-content">
                <div className="home__slick-carousel">
                    <Link to="/" className="home_slick">
                        <img src="/images/slick/slick-carousel-1.jpg" alt="img-slick" />
                        <div className="home_slick-text">
                            <h5>Edición Limitada</h5>
                            <p>Obtén el tuyo antes de que se acabe para siempre</p>
                        </div>
                    </Link>
                    <Link to="/" className="home_slick">
                        <img src="/images/slick/slick-carousel-2.jpg" alt="img-slick" />
                        <div className="home_slick-text">
                            <h5>Colecciones de tendencia</h5>
                            <p>¡Nuevas pasiones y diseños todos los días!</p>
                        </div>
                    </Link>
                    <Link to="/" className="home_slick">
                        <img src="/images/slick/slick-carousel-3.jpg" alt="img-slick" />
                        <div className="home_slick-text">
                            <h5>Coleccionistas</h5>
                            <p>¡Diseños con licencia oficial para tus paredes!</p>
                        </div>
                    </Link>
                    <Link to="/" className="home_slick">
                        <img src="/images/slick/slick-carousel-4.jpg" alt="img-slick" />
                        <div className="home_slick-text">
                            <h5>Únite a Lb Design Club</h5>
                            <p>Disfrute de sus beneficios y observe cómo crece su colección</p>
                        </div>
                    </Link>
                    <Link to="/" className="home_slick">
                        <img src="/images/slick/slick-carousel-5.jpg" alt="img-slick" />
                        <div className="home_slick-text">
                            <h5>¿Qué es una pantalla?</h5>
                            <p>Descubra estampados en metal únicos</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* home categories */}
            <div className="home__categories">
                {/* home bestselling */}
                <div className="home__category-bestselling">
                    <h2>Más Vendido</h2>
                    <div className="home__categories-bestselling-content">
                        {data.bestselling.map(item => (
                            <div className="home__category-item" key={item.id}>
                                <Category img={item.img} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* home animal */}
                <div className="home__category-animal">
                    <h2>Animales</h2>
                    <div className="home__categories-animal-content">
                        {data.animal.map(item => (
                            <div className="home__category-item" key={item.id}>
                                <Category img={item.img} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* home maps */}
                <div className="home__category-animal">
                    <h2>Maps</h2>
                    <div className="home__categories-animal-content">
                        {data.maps.map(item => (
                            <div className="home__category-item maps" key={item.id}>
                                <Category img={item.img} more={item.more} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* home exclusive */}
                <div className="home__category-animal">
                    <h2>Exclusivo</h2>
                    <div className="home__categories-animal-content">
                        {data.exclusive.map(item => (
                            <div className="home__category-item" key={item.id}>
                                <Category img={item.img} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="home__newsletter">
                    <h2 className="newletter-title">¡No te lo pierdas! <span>Suscríbete a nuestra newsletter</span></h2>
                    <form className="newsletter-form">
                        <div className="home__newsletter-search">
                            <input type="text" placeholder="Ingrese tu correo electrónico" />
                            <button className="newsletter-btn">Enviar</button>
                        </div>
                        <div className="home__newsletter-checkbox">
                            <input type="checkbox" id="newsletter-check" />
                            <label htmlFor="newsletter-check">Sí, me gustaría recibir correos electrónicos con ofertas especiales, nuevos productos y actualizaciones de sitios web</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
