import React from "react";
import { Link } from "react-router-dom";
import pizza from './../assets/pizza.jpg';
import paneer from './../assets/Kaju-Paneer-Masala-Recipe-1.jpg';
import biryani from './../assets/biryani.jpg';
import chinese_sizzler from './../assets/chinese sizzler.jpg';
import Paneer_do_pyaza from './../assets/Paneerpizza.jpg';
import Loni_dosa from './../assets/LoniDosa.avif';
import Sizzler from './../assets/Sizzler.jpg';
import Navbar from "../components/navbar1";
import butter_chicken from './../assets/butter_chicken.webp'


const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossorigin="anonymous"
            ></link>

            <header className="text-center my-5">
            <h1
                    className="text-capitalize"
                    style={{
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: '#D43F4F', 
                        background: 'linear-gradient(to right, #FF5F6D, #FFC371)', 
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        padding: '20px',
                        borderRadius: '10px',
                        display: 'inline-block',
                    }}
                >Pearl Restaurant</h1>
                <hr />
            </header>

            <section className="container my-4">
                <h2 className="text-center text-success mb-4">What's on your mind?</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={pizza} alt="Chinese Sizzler" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Pizza</h5>
                                <p className="card-text">Tandoori paneer, italian and many more cheesy loaded pizzas</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={paneer} alt="Butter Chicken" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Paneer</h5>
                                <p className="card-text">Mouthwatering paneer dishes like paneer chingari,paneer lazeez</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={biryani}  alt="Paneer Do Pyaza" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Biryani</h5>
                                <p className="card-text">Hydrabadi veg and non-veg biryanis are available.explore more</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={Sizzler}  alt="Loni Dosa" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Sizzler</h5>
                                <p className="card-text">chinese and veg as well as non veg are available</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
                   
                <hr />

                <h2 className="text-center text-success my-4">Best dishes in our restaurant</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={chinese_sizzler} alt="Chinese Sizzler" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Chinese Sizzler</h5>
                                <p className="card-text">Noodles with fries and stuffed cheese potato.</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={butter_chicken} alt="Butter Chicken" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Butter Chicken</h5>
                                <p className="card-text">Mouthwatering butter chicken available.</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={Paneer_do_pyaza}  alt="Paneer Do Pyaza" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Paneer Do Pyaza</h5>
                                <p className="card-text">Tandoori paneer, Italian, and many more cheesy loaded pizzas.</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                    <div className="card shadow-sm card-img-top">
                            <img src={Loni_dosa}  alt="Loni Dosa" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">Loni Dosa</h5>
                                <p className="card-text">Loni dosa with chutney.</p>
                                <Link to="#" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;
