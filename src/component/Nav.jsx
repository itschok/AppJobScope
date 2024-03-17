import React, { useState }  from "react";

function Nav(){
    const{isMenuopen, setIsMenuopen} = useState(false);

    const toggleMenu = ()=>{
        setIsMenuopen(!isMenuopen)
    }
    return(
    <nav className="p-4">
        <div className="flex item-center justify-between">
            <div className="text-5xl font-black text-orange-500 ">JobScope</div>
            {/*toggle menu buttion*/}
            <div className="md:hidden">
                <button id="menu-toggle"className="text-white"onClick={toggleMenu}>
                    <svg 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d ="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul className='hidden md:flex space-x-9 items-end'>
                <li><a href="#" className="text-gray-900  hover:text-orange-500 text-xl">HOME</a></li>
                <li><a href="#" className="text-gray-900  hover:text-orange-500 text-xl">ABOUT US</a></li>
                <li><a href="#" className="text-gray-900  hover:text-orange-500 text-xl">REGISTER</a></li>
                <li><a href="#" className="text-gray-900  hover:text-orange-500 text-xl">LOGIN</a></li>
                <li><a href="#" className="text-gray-900 hover:text-orange-500 text-xl">FOR COMPANY</a></li>
            </ul>
        </div>
        {/** Mobile Menu */}
        {isMenuopen ? (
            <ul className='flex-col md:hidden space-x-4'>
                <li><a href="#" className="text-white font-bold hover:text-orange-500">HOME</a></li>
                <li><a href="#" className="text-white font-bold hover:text-orange-500">ABOUT US</a></li>
                <li><a href="#" className="text-white font-bold hover:text-orange-500">REGISTER</a></li>
                <li><a href="#" className="text-white font-bold hover:text-orange-500">LOGIN</a></li>
                <li><a href="#" className="text-white font-bold hover:text-orange-500">FOR COMPANY</a></li>
            </ul>
        ): null }
 
    </nav>
    )
}
export default Nav