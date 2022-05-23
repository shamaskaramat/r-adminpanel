import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import './app.css';
import Home from "./Pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Userlist from "./Pages/Userlist/Userlist";
import User from "./Pages/User/User";
import Newuser from "./Pages/Newuser/Newuser";
import Productlist from "./Pages/Productlist/Productlist";
import { Product } from "./Pages/Products/Product";
import Newproduct from "./Pages/Newproduct/Newproduct";

function App() {  
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Userlist/>} />
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newuser" element={<Newuser/>}/>
        <Route path="/products" element={<Productlist/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newproduct" element={<Newproduct/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
