import React, { useState } from 'react'
import logo from "../imgs/logo.png"
import {Link, Outlet} from "react-router-dom"

const Navbar = () => {

    const[searchVisible, setSearchVisible] = useState(false);
    return(
        <>
            <nav className='navbar'>
                <Link to="/" className='flex-none w-10'>
                    <img src={logo} alt="" className='w-full'/>
                </Link>

                <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (searchVisible ? "show" : "hide")}>
                    <input type="text" placeholder='Search' 
                    className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12'/>

                    <i className="fi fi-rr-search absolute right-[10%] md:left-5 md:pointer-events-none top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
                </div>

                <div className='flex items-center gap-3 ml-auto md:gap-6'>
                    <button className='justify-center flex bg-grey items-center rounded-full w-12 h-12 md:hidden' onClick={() => setSearchVisible((curr)=> !curr)}>
                    <i className="fi fi-rr-search text-xl"></i>
                    </button>

                    <Link to="/editor" className='hidden md:flex gap-2 link'>
                        <i class="fi fi-sr-pen-nib"></i>
                        <p>write</p>

                    </Link>

                    <Link to="/login" className='btn-dark py-2'>
                        login
                    </Link>

                    <Link to="/signup" className='btn-light py-2 hidden md:block'>
                        signup
                    </Link>
                </div>


            </nav>

            <Outlet/>
        </>

    )
}

export default Navbar;
