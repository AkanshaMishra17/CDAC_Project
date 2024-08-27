import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import kaju_paneer3 from './../assets/kaju_paneer3.jpg';
import panner_chili2 from './../assets/paneer_chili2.jpg';
// import Navbar from '../components/navbar1';
import paneer_chingari from './../assets/Paneer chingari.jpeg';
import Paneer_makhanwala from './../assets/Paneer_makhanwala.jpg';
import Kaju_Masala from './../assets/Kaju_Masala.jpg';
import malai_kofta from './../assets/malai_kofta.webp';
import veg_kolhapuri from './../assets/veg_kolhapuri.jpeg';
import Mastani from './../assets/Mastani.jpg'
import Sizzler from './../assets/Sizzler.jpg'
import butter_chicken from './../assets/butter_chicken.webp'
import italian_pizza from './../assets/Italian.jpeg'
import loniDosa from './../assets/LoniDosa.avif'
import { Link } from 'react-router-dom';

function Paneer() {
  const navigate = useNavigate();
  const location = useLocation();
  const onAdd = () => {
    navigate('/itemadd', { state: { from: location.pathname } });
  };

  const cardImageStyle = {
    height: '250px', // Increase the height to make images taller
    objectFit: 'cover', // Ensures the image covers the entire area without distortion
  };

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="App container-sm">
        <div className="header row my-5">
          <div className="col-md-4">
            <h1 className="text-center text-primary">Menu Items</h1>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="search"
                id="mySearch"
                name="q"
                className="form-control form-control-sm"
                placeholder="Search the site…"
                size="30"
              />
              <button className="btn btn-primary btn-lg" type="button">Search</button>
            </div>
          </div>
          <div className="col-md-4 text-end">
            <button onClick={onAdd} className="btn btn-success btn-lg" type="button">Add</button>
          </div>
        </div>

        <div className="content row">
          <div className="col-md-3">
            <h2 className="fs-6">Menu Items</h2>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><Link to="/pizza/mexican">Mexican Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/tikka-paneer">Tikka Paneer Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/veg-paprika">Veg Paprika Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/margherita">Margherita Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/tandoori-chicken">Tandoori chicken Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/cheese-loaded">Cheese Loaded Pizza</Link></li>
              <li className="list-group-item"><a href="#one">Paneer Angara</a></li>
              <li className="list-group-item"><a href="#one">Paneer Masala</a></li>
              <li className="list-group-item"><a href="#one">Paneer Makhanwala</a></li>
              <li className="list-group-item"><a href="#one">Veg biryani</a></li>
              <li className="list-group-item"><a href="#one">Mastani</a></li>
              <li className="list-group-item"><a href="#one">Paneer Lababdar</a></li>
              <li className="list-group-item"><a href="#one">Chinese sizzler</a></li>
              <li className="list-group-item"><a href="#one">Soups</a></li>
              <li className="list-group-item"><a href="#one">thali</a></li>
              <li className="list-group-item"><a href="#one">Loni dosa</a></li>
              <li className="list-group-item"><a href="#one">Italian pizza</a></li>
              <li className="list-group-item"><a href="#one">butter chicken</a></li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={kaju_paneer3} className="card-img-top" alt="Paneer Kaju Masala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Paneer Kaju Masala</h5>
                    <p className="card-text">₹300</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={panner_chili2} className="card-img-top" alt="Paneer Chili Fry" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Paneer Chili Fry</h5>
                    <p className="card-text">₹200</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={italian_pizza} className="card-img-top" alt="Paneer Makhanwala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Italian pizza</h5>
                    <p className="card-text">₹140</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={loniDosa} className="card-img-top" alt="Paneer Makhanwala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Loni Dosa</h5>
                    <p className="card-text">₹100</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={paneer_chingari} className="card-img-top" alt="Paneer Chingari" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Paneer Chingari</h5>
                    <p className="card-text">₹320</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={Mastani} className="card-img-top" alt="Veg Kolhapuri" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Mastani</h5>
                    <p className="card-text">₹150</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={Sizzler} className="card-img-top" alt="Veg Kolhapuri" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Sizzler</h5>
                    <p className="card-text">₹500</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={Kaju_Masala} className="card-img-top" alt="Kaju Masala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Kaju Masala</h5>
                    <p className="card-text">₹350</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={Paneer_makhanwala} className="card-img-top" alt="Paneer Makhanwala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Paneer Makhanwala</h5>
                    <p className="card-text">₹320</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={butter_chicken} className="card-img-top" alt="Paneer Makhanwala" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Butter chicken</h5>
                    <p className="card-text">₹400</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={malai_kofta} className="card-img-top" alt="Malai Kofta" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Malai Kofta</h5>
                    <p className="card-text">₹350</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src={veg_kolhapuri} className="card-img-top" alt="Veg Kolhapuri" style={cardImageStyle} />
                  <div className="card-body">
                    <h5 className="card-title">Veg Kolhapuri</h5>
                    <p className="card-text">₹320</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>

             

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Paneer;



/*
import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import kaju_paneer3 from './../assets/kaju_paneer3.jpg';
import panner_chili2 from './../assets/paneer_chili2.jpg';
import Navbar from '../components/navbar1';
import paneer_chingari from './../assets/Paneer chingari.jpeg'
import Paneer_makhanwala from './../assets/Paneer_makhanwala.jpg'
import Kaju_Masala from './../assets/Kaju_Masala.jpg'
import malai_kofta from './../assets/malai_kofta.webp'
import veg_kolhapuri from './../assets/veg_kolhapuri.jpeg'


function Paneer() {
  const navigate = useNavigate();
  const location = useLocation();
  const onAdd = () => {
      navigate('/itemadd', { state: { from: location.pathname } });
  }
 
  return (
    <React.Fragment>
    <Navbar />
    <div className="App container-sm">
      <div className="header row my-5">
        <div className="col-md-4">
          <h1 className="text-center text-primary">Main Course</h1>
        </div>
        <div className="col-md-4">
          <div className="input-group">
            <input
              type="search"
              id="mySearch"
              name="q"
              className="form-control form-control-sm"
              placeholder="Search the site…"
              size="30"
            />
            <button className="btn btn-primary btn-lg" type="button">Search</button>
          </div>
        </div>
        <div className="col-md-4 text-end">
          <button onClick={onAdd} className="btn btn-success btn-lg" type="button">Add</button>
        </div>
      </div>

      <div className="content row">
        <div className="col-md-3">
          <h2 className="fs-6">Main Course</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="#one" >Paneer Angara</a></li>
            <li className="list-group-item"><a href="#one" >Paneer Masala</a></li>
            <li className="list-group-item"><a href="#one" >Paneer Makhanwala</a></li>
            <li className="list-group-item"><a href="#one" >Paneer Chingari</a></li>
            <li className="list-group-item"><a href="#one" >Paneer Kofta</a></li>
            <li className="list-group-item"><a href="#one" >Paneer Lababdar</a></li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card-img-top" >
                <img src={kaju_paneer3} className="card" alt="Paneer Kaju Masala"  />
                <div className="card-body1">
                  <h3 className="card-title fs-6">Paneer Kaju Masala</h3>
                  <p className="card-text fs-6">₹300</p>
                  <button className="btn btn-success btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div  className="card-img-top">
                <img src={panner_chili2} className="card" alt="Paneer Chili Fry"  />
                <div className="card-body1">
                  <h3 className="card-title fs-6">Paneer Chili Fry</h3>
                  <p className="card-text fs-6">₹200</p>
                  <button className="btn btn-success btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card" style={{ width: '18rem',maxHeight: '200px', margin: '10px' }}>
                <img src={paneer_chingari} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Paneer Chingari</h5>
                  <p className="card-text">₹320</p>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger" style={{ marginLeft: '10px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="card" style={{ width: '18rem', maxHeight: '200px', margin: '10px' }}>
                <img src={Kaju_Masala} className="card-img-top" 
                        style={{ height: '100px', objectFit: 'cover' }} 
                        />
                <div className="card-body">
                  <h5 className="card-title">Kaju Masala</h5>
                  <p className="card-text">₹350</p>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger" style={{ marginLeft: '10px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card" style={{ width: '18rem', maxHeight: '200px', margin: '10px' }}>
                <img src={Paneer_makhanwala} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Paneer Makhanwala</h5>
                  <p className="card-text">₹320</p>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger" style={{ marginLeft: '10px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="card" style={{ width: '18rem', maxHeight: '200px', margin: '10px' }}>
                <img src={malai_kofta} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Malai kofta</h5>
                  <p className="card-text">₹350</p>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger" style={{ marginLeft: '10px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-6 mb-4">
              <div  className="card-img-top">
                <img src={veg_kolhapuri} className="card" alt="Paneer Chili Fry"  />
                <div className="card-body1">
                  <h3 className="card-title fs-6">Veg kolhapuri</h3>
                  <p className="card-text fs-6">₹320</p>
                  <button className="btn btn-success btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </div>
?    </React.Fragment>
  );
}

export default Paneer;
*/
