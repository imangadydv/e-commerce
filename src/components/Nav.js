
import {Link,useNavigate} from 'react-router-dom'
import logo from "../assets/shopping-online.png"
const Nav=()=>{
    
    const auth=localStorage.getItem('user');
    const navigate =useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/signup");
    }
    return(
        <div>
             <img src={logo} className="logoi " alt="" />
           { auth?<ul className='nav-ul'>
           
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout</Link></li>             
            </ul>
            :
            <ul className='nav-ul nav-right'>
              <li><Link to="/signup">SignUp</Link></li>
              <li><Link to="/login">Login</Link></li>  
            </ul>
            }
        </div>
    )
}

export default Nav;