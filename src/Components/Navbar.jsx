
import PropTypes from 'prop-types'
import Link from './Link';
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {

  const [open,setOpen] = useState(false)
    
    const routes = [
{ id: 1, name: "Home", path: "/" },
{ id: 2, name: "About", path: "/about" },
{ id: 3, name: "Services", path: "/services" },
{ id: 4, name: "Contact", path: "/contact" },
{ id: 5, name: "Profile", path: "/profile" }

];

 return (
   
<div>
     <div className='md:hidden mt-2' onClick={()=> setOpen(!open)}>
        {
            open === true ? <IoCloseOutline className='text-2xl' /> : <CiMenuBurger className='text-2xl ' />
        }
     
     </div>
    <ul className={`md:flex duration-1000 absolute  ${open ? 'top-8': '-top-60'} md:static  bg-green-400 p-5 pl-3 ml-6 rounded-md shadow-lg`}>
    {
        routes.map((route) =><Link  key={route.id} route={route}></Link>)
    }
    </ul>
</div>
  )
}

Navbar.propTypes = {
 routes:PropTypes.array,
}

export default Navbar

