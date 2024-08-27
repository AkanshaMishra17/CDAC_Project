import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/register'
import Paneer from './Pages/paneer';
import Home from './Pages/home'
import Login from './Pages/login'
import Pizza from './Pages/pizza'
import ItemAdd from './Pages/itemadd'
import CategoryAdd from './Pages/categoryadd'
import EditedHome from './Pages/editedhome'
import EditPaneer from './Pages/editpaneer'
import FrontPage from './Pages/frontpage'
import CartPage from './Pages/cart'
import Payment from './Pages/payment'
import ProfilePage from './Pages/profile';
// import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import PizzaDetail from './Pages/pizzaDetail'
import Home1 from './Pages/home1'
// import CategoryAdd from './Pages/categoryadd';
import Navbar from './components/navbar1';
import AddItemForm from './components/addItemForm';
import Checkout from './Pages/checkout';
import Category from './components/Category'
// import Category from './components/Category';
import OrderConfirmation from './Pages/OrderConfirmation'

import './App.css'
import Order from './Pages/Order';
import Cart from './Pages/cart';


function App() {
  return (
    <div classname="container-fluid">
          <Navbar />
        <div classname='container'>
            <Routes>

            <Route path='/' element={<FrontPage />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/paneer' element={<Paneer />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/itemadd' element={<ItemAdd />} />
            <Route path='/editpaneer' element={<EditPaneer />} />
            <Route path='/categoryadd' element={<CategoryAdd />} />
            <Route path='/editedhome' element={<EditedHome />} />
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='/order' element={<Order/>}/>
            <Route path='/cart' element={ <Cart />} />
            <Route path='/payment' element={ <Payment/>}/>
            <Route path='/profile' element ={ <ProfilePage/>}/>
            <Route path="/pizza/:pizzaId" element={<PizzaDetail />} />
            <Route path='/home' element={<Home1 />} />
            <Route path='/add-category' element={<CategoryAdd />} />
            <Route path='/addItem' element={<AddItemForm/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/pizza/:pizzaId" element={<PizzaDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/order-confirmation' element={<OrderConfirmation />} />

            </Routes>
        </div>
        
        
    </div>
    
  );
}

export default App;
