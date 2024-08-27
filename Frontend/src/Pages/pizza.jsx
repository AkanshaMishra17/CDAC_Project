import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import tandoori_paneer from './../assets/tandoori-paneer.jpeg';
import italian_pizza from './../assets/Italian.jpeg';
import Navbar from '../components/navbar1';

function Pizza() {
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
            <h1 className="text-center text-primary">Best in Pizza</h1>
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

        <div className="content row mt-4">
          <div className="col-md-3">
            <h2 className="text-success">Pizza special</h2>
            <ul className="list-group">
            <li className="list-group-item"><Link to="/pizza/mexican">Mexican Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/tikka-paneer">Tikka Paneer Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/veg-paprika">Veg Paprika Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/margherita">Margherita Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/tandoori-chicken">Tandoori chicken Pizza</Link></li>
            <li className="list-group-item"><Link to="/pizza/cheese-loaded">Cheese Loaded Pizza</Link></li>
            </ul>
          </div>

          <div className="col-md-9 ">
            <div className="row">
              <div className="col-sm-6 mb-4 ">
                <div className="card-img-top">
                  <img src={tandoori_paneer} className="card" alt="tandoori paneer pizza" />
                  <div className="card-body1">
                    <h3 className="card-title fs-6">Tandoori Paneer Tikka Pizza</h3>
                    <p className="card-text fs-6">₹140</p>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-4">
                <div className="card-img-top">
                  <img src={italian_pizza}  alt="Italian pizza" />
                  <div className="card-body1">
                    <h3 className="card-title fs-6">Italian Pizza</h3>
                    <p className="card-text fs-6">₹140</p>
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

export default Pizza;
