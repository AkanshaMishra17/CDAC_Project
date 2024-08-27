
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import pizza from './../assets/pizza.jpg';
import paneer from './../assets/Kaju-Paneer-Masala-Recipe-1.jpg';
import biryani from './../assets/biryani.jpg';
import Sizzler from './../assets/Sizzler.jpg';
import chinese_sizzler from './../assets/chinese sizzler.jpg';
import butter_chicken from './../assets/butter chicken.webp';
import Paneer_do_pyaza from './../assets/Paneerpizza.jpg';
import Loni_dosa from './../assets/LoniDosa.avif';


const EditedHome = () =>
    {
        return <React.Fragment>
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <h1 className="text-center text-danger text-capitalize my-5px">Pearl Restaurant</h1>

            
            <hr/>
            <br></br>

        <div class="container">
        <h2 className="text-center text-success ">What's in your mind?? </h2>
            <div class="row">
                <div class="col-sm">
                <div class="card" >
            <img src={pizza} class="card-img-top"
            alt="" 
            height="200px" />

            <div class="card-body">
                <h5 class="card-title">Pizza</h5>
                <p class="card-text">Tandoori paneer, italian and many more cheesy loaded pizzas</p>
                <Link to="/pizza" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={paneer} height="200px" />
            <div class="card-body">
                <h5 class="card-title">Paneer</h5>
                <p class="card-text">Mouthwatering paneer dishes like paneer chingari,paneer lazeez</p>
                <Link to="/paneer" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={biryani} height="200px" /> 
            <div class="card-body">
                <h5 class="card-title">Biryani</h5>
                <p class="card-text">Hydrabadi veg and non-veg biryanis are available.explore more</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>

                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={Sizzler} height="200px" /> 
            <div class="card-body">
                <h5 class="card-title">Sizzler</h5>
                <p class="card-text">chinese and veg as well as non veg are available</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
            </div>

            <br/>
            <hr></hr>

            <h2 className="text-center text-success ">Best dishes in our restaurant </h2>
            <div class="row">
                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={chinese_sizzler}
            alt="" 
            height="200px" />

            <div class="card-body">
                <h5 class="card-title">Chinese sizzler</h5>
                <p class="card-text">noodles with fries and stuffed cheese potato</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={butter_chicken} height="200px" />
            <div class="card-body">
                <h5 class="card-title">Butter chicken</h5>
                <p class="card-text">Mouthwatering butter chicken avaible</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={Paneer_do_pyaza} height="200px" /> 
            <div class="card-body">
                <h5 class="card-title">Paneer Do Pyaza</h5>
                <p class="card-text">Tandoori paneer, italian and many more cheesy loaded pizzas</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>

                <div class="col-sm">
                <div class="card" >
            <img class="card-img-top" src={Loni_dosa} height="200px" /> 
            <div class="card-body">
                <h5 class="card-title">Loni Dosa</h5>
                <p class="card-text">Loni dosa with chutney</p>
                <Link to="#" class="btn btn-primary">View</Link>
            </div>
            </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>
    }

    export default EditedHome;