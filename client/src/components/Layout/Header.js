import React from 'react'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { useAuth } from '../../context/auth'
import { toast } from 'react-hot-toast'


const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });
    localStorage.removeItem("auth");
    toast.success("logout sucessufully")
  }
  return (
<>

<div>


  
    <ul className='menu_list'>
      <li className='bbb'>
        <Link to='/' className='ccc'>HOME</Link>
      </li>
      <li className='bbb'>
        <Link to='/category' className='ccc'>CATEGORY</Link>
      </li>
      {!auth ?.user ?(<>
      <li className='bbb'>
        <Link to='/Regestration' className='ccc'>REGESTRATION</Link>
      </li> 
      <li className='bbb'>
        <Link to='/Login' className='ccc'>LOGIN</Link>
      </li>
      </>):(
        
   <> <li className='bbb'> <Link onClick={handleLogout} to="/login" className="ccc" >Logout</Link></li> </>
  
    // <>
    //   <li className="nav-item dropdown">
    //     <Link
    //       className="nav-link dropdown-toggle"
    //       href="#"
    //       role="button"
    //       data-bs-toggle="dropdown"
    //       style={{ border: "none" }}
    //     >
    //       {auth?.user?.name}
    //     </Link>
    //     <ul className="dropdown-menu">
    //       <li>
    //         <Link
    //           to={`/dashboard/${
    //             auth?.user?.role === 1 ? "admin" : "user"
    //           }`}
    //           className="dropdown-item"
    //         >
    //           Dashboard
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           onClick={handleLogout}
    //           to="/login"
    //           className="dropdown-item"
    //         >
    //           Logout
    //         </Link>
    //       </li>
    //     </ul>
    //   </li>
    // </>
      )}
      
      <li className='bbb'>
        <Link to='/cart' className='ccc'>CART</Link>
      </li>
    </ul>
  
</div>

</>
  )
}
export default Header;