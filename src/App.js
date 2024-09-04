import Nav from "./components/Nav.js"
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer.js"
import Signup from "./components/signup.js";
import Profile from "./components/profile.js";
import PrivateComponents from "./components/privateComponents.js";
import Login from "./components/Login.js"
import AddProduct from "./components/AddProduct.js"
import Productlist from "./components/Productlist.js";
import UpdateProduct from "./components/UpdateProduct.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponents/>}>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1>get out</h1>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
