import React from 'react'
import Login from '../../organism/Login';
import { Link } from 'react-router-dom';

export default function AuthLayout(props) {
    const { children, title, desc, type } = props;
    return (
        <>
            <header className="bg-gradient-to-r text-center py-5 text-5xl font-semibold text-white from-red-700 via-green-700 to-purple-500 p-1">
                Licht Store
            </header>
            <div className="flex justify-start items-start max-w-screen">
                <div className="bg-gradient-to-r from-red-700 via-green-700 to-blue-700 p-1">
                    <div className="w-full max-w-lg h-[520px] border rounded-lg p-8 bg-white">
                        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">{title}</h1>
                        <p className="text-center font-medium text-slate-500 mb-4">{desc}</p>
                        {children}
                    </div>
                </div>
            </div>
            <footer className="dark:bg-gray-800 dark:text-gray-400 w-full">
                <div className="flex flex-wrap items-center mx-auto justify-between px-2 bg-gradient-to-r from-red-700 via-green-700 to-blue-700">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <img src="/image/Licht.jpeg" className="rounded-full dark:text-gray-900">
                            </img>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a href="#">Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="publ">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}