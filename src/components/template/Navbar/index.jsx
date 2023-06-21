import React from 'react'
import Login from '../../organism/Login';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { type } = props;
    return (
        <>
            {type === "auth" ? (
                <div className="w-full sticky-0">
                    <div className=" text-5xl font-semibold text-white bg-gradient-to-r from-red-700 via-red-400 to-red-700">
                        <div className='flex items-center gap-x-2'>
                            <img src="/image/logo2.jpg" className="w-14 h-14 bg-cover bg-slate-400" />
                            <h1>Garudaku</h1>
                        </div>
                    </div>
                    {/* <button className="absolute top-2 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                <Link onclick="logout()" to="/">
                    Logout
                </Link>
            </button> */}
                </div>
            ) :
                (
                    <div className="w-full">
                        <div className="flex flex-wrap justify-between gap-4 text-5xl font-semibold text-white bg-gradient-to-r from-red-700 via-red-400 to-red-700">
                            <div className='flex items-center gap-x-2'>
                                <img src="/image/logo2.jpg" className="w-14 h-14 bg-slate-400" />
                                <h1>Garudaku</h1>
                            </div>
                            <div onclick="" className='flex gap-x-10 justify-center items-center'>
                                <div className='text-2xl'>
                                    Home
                                </div>
                                <div className='text-2xl'>
                                    Profile
                                </div>
                                <div className='text-2xl'>
                                    About
                                </div>
                            </div>
                            <div className='w-60'>

                            </div>
                        </div>
                        <button className="absolute top-2 right-8 bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded">
                            <Link onclick="logout()" to="/">
                                Logout
                            </Link>
                        </button>
                    </div>
                )}
        </>
    );
}