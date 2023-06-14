import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <>  <div class="max-h-screen bg-[url('../../public/image/stick.jpg')] object-center bg-cover bg-center">
            <AuthLayout title="Register" desc="Silahkan Masuk" type="">
                <Register />
                <p className="text-sm mt-4 text-center">
                    Dont have an account?{" "}
                    {/* <a className="font-bold text-blue-500" href="/register">Register</a> */}
                    <Link className="font-bold text-blue-500" to="/">
                        Login
                    </Link>
                </p>
            </AuthLayout>
            </div>
        </>
    )
}
