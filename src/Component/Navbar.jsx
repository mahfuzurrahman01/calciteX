import React, { useState } from 'react';
import logo from '../assets/logo/Black And White Rakia Design Studio Logo.png'
import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'
const Navbar = () => {
    const [openToggle, setOpenToggle] = useState(true)
    return (
        <div >
            <header className="p-4  bg-white shadow-lg shadow-gray-200   duration-300 relative ">
                <div className="lg:w-11/12 w-full flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="# " aria-label="Back to homepage" className="flex items-center p-2">
                       <img src={logo} alt="" className='lg:w-48 w-32 '/>
                    </a>
                    <ul className="items-stretch  space-x-3  lg:flex hidden">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="# " className="flex items-center px-4 text-gray-900 hover:text-blue-600 text-xl font-semibold -mb-1 border-b-2  border-transparent">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="# " className="flex items-center px-4 text-gray-900 hover:text-blue-600 text-xl font-semibold -mb-1 border-b-2  border-transparent">About us</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="# " className="flex items-center px-4 text-gray-900 hover:text-blue-600 text-xl font-semibold -mb-1 ">Products</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="# " className="flex items-center px-4 text-gray-900 hover:text-blue-600 text-xl font-semibold -mb-1 border-b-2  border-transparent">FAQ</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="# " className="flex items-center px-4 text-gray-900 hover:text-blue-600 text-xl font-semibold -mb-1 border-b-2  border-transparent">Contact us</a>
                        </li>
                    </ul>
                    <div onClick={() => setOpenToggle(!openToggle)} className="lg:hidden block">
                        {
                            openToggle ? <button className=" justify-end p-4 ">
                                <HiOutlineBars3BottomRight className='text-xl w-10 h-8'></HiOutlineBars3BottomRight>
                            </button> : <button className=" justify-end p-4 ">
                                <HiOutlineXMark className='text-xl w-10 h-8'></HiOutlineXMark>
                            </button>
                        }
                    </div>
                </div> 
                <div className={ openToggle ? 'bg-gray-50 w-full lg:hidden block absolute duration-300  ease-linear translate-y-[-200%]  left-0 right-0 ':'bg-gray-50  lg:hidden block w-full absolute left-0 right-0 translate-y-0  ease-linear duration-300'}>
                    <ul className='p-5 '>
                        <li className='hover:text-white bg-gray-100 py-2 px-2 shadow-lg  mt-2 rounded hover:bg-blue-500'>Home</li>
                        <li className='hover:text-white bg-gray-100 py-2 px-2 shadow-lg  mt-2 rounded hover:bg-blue-500'>About us</li>
                        <li className='hover:text-white bg-gray-100 py-2 px-2 shadow-lg  mt-2 rounded hover:bg-blue-500'>Products</li>
                        <li className='hover:text-white bg-gray-100 py-2 px-2 shadow-lg  mt-2 rounded hover:bg-blue-500'>FAQ</li>
                        <li className='hover:text-white bg-gray-100 py-2 px-2 shadow-lg  mt-2 rounded hover:bg-blue-500'>Contact us</li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;