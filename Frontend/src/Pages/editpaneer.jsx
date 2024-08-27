import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
// S
import Panner_kaju_masala from './../assets/Kaju-Paneer-Masala-Recipe-1.jpg';
import panner_chili_fry from './../assets/panner_chili_fry.jpeg';


function EditPaneer() {
  return (
    <div className="App">
    <div className="header">

    <div class="grid-item"><h1>Best in Paneer</h1></div>
  <div class="grid-item"><div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the site…"
      size="30" />
    <button className="search-btn" >Search</button>
  </div>
  </div>
  <div class="grid-item">
    <button className="add-btn" type="Submit">Add</button> 
  </div>

    
    {/* <button type="button" className="search-button">Search</button>
    <button type="button">Add</button> */}
    
    </div>
    <div className="content">
        <div className="sidebar">
          <h2>Paneer special</h2>
          <ul>
            <li><a id="sec-1" href="#one">Paneer Angara</a></li>
            <li><a id="sec-1" href="#one">Paneer masala</a></li>
            <li><a id="sec-1" href="#one">Paneer makhanwala</a></li>
            <li><a id="sec-1" href="#one">Paneer chingari</a></li>
            <li><a id="sec-1" href="#one">Paneer kofta</a></li>
            <li><a id="sec-1" href="#one">Paneer Lababbdar</a></li>
          </ul>
        </div>
        <div className="pizza-items">
          <div className="pizza-item">
          {/* <img src={require('./Panner_kaju_masala.jpeg')} /> */}
            <img src={Panner_kaju_masala} alt="Paneer Kaju msala" className="pizza-image" />
            <h3>Paneer Kaju msala</h3>
            <p>₹300</p>
            <div class="grid-container1">
            <div class="grid-item1">
              {/* <button type="button"  className="add-to-cart">Edit</button> */}
              <button className='btn btn-success'>Edit</button>
            </div>
            <div class="grid-item2">
            <button className='btn btn-danger'>Delete</button>
            </div>
            </div>
          </div>
          <div className="pizza-item">
            <img src={panner_chili_fry}  alt="Paneer chili fry" className="pizza-image" />
            <h3>Paneer chili fry</h3>
            <p>₹280</p>
            <div class="grid-container1">
            <div class="grid-item1">
            <button className='btn btn-success'>Edit</button>
            </div>
            <div class="grid-item2">
            <button className='btn btn-danger'>Delete</button>
            </div>
            </div>
          </div>

          
          </div>  
    </div>
    </div>
    
  );
}

export default EditPaneer;