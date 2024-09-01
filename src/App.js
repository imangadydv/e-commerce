import Nav from "./components/Nav.js"
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer.js"
import Signup from "./components/signup.js";
import Profile from "./components/profile.js";
import PrivateComponents from "./components/privateComponents.js";
import Login from "./components/Login.js"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponents/>}>
        <Route path="/" element={<h1>Product listing components</h1>}/>
        <Route path="/add" element={<h1> Add Product </h1>}/>
        <Route path="/update" element={<h1>Product listing update</h1>}/>
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
