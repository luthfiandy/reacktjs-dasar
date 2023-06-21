import React from 'react'
import Login from '../../organism/Login';
import { Link } from 'react-router-dom';

export default function AuthLayout(props) {
    const { children, title, desc } = props;
    return (
        <>
            <div className="flex justify-end items-center max-w-screen">
                <div className="bg-gradient-to-r from-red-700 via-red-400 to-red-700 p-1 rounded-lg">
                    <div className="w-72 h-full border rounded-lg p-6 bg-white ">
                        <h1 className="text-3xl font-bold text-center mb-2 text-red-600">{title}</h1>
                        <p className="text-center font-medium text-slate-900 mb-4">{desc}</p>
                        {children}
                    </div>
                </div>
            </div>

        </>
    );
}