import React from 'react'
import Login from '../../organism/Login';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <footer className="w-full m-0">
                <div className="flex flex-wrap items-center justify-between px-2 bg-gradient-to-r from-red-700 via-red-400 to-red-700">
                    <div className="flex flex-row p-5 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <img src="/image/Licht.jpeg" className="rounded-full dark:text-gray-900">
                            </img>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-white">
                            <li>
                                <a rel="" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="" href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap gap-12 mr-4 mb-4">
                        <li>
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400" >
                                <a href="" className="text-white text-center w-full h-full">
                                    <img src="/image/ig.png" className="rounded-full dark:text-gray-900" />
                                    Instagram
                                </a>
                            </div>

                        </li>
                        <li>
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <a href="" className="text-white text-center w-full h-full">
                                    <img src="/image/fb.png" className="rounded-full dark:text-gray-900" />
                                    Facebook
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <a href="" className="text-white text-center w-full h-full">
                                    <img src="/image/twt.png" className="rounded-full dark:text-gray-900" />
                                    Twitter
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}