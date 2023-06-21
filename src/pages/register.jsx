import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'
import Navbar from '../components/template/Navbar'
import Footer from '../components/template/Footer'


export default function RegisterPage() {
    return (
        <> <Navbar type="auth"></Navbar>
            <div className="justify-center items-center bg-[url('../../public/image/regist.jpg')] p-[60px]">
                <AuthLayout title="Register" desc="Silahkan Masuk" type="">
                    <Register />
                    <p className="text-sm text-center">
                        Dont have an account?{" "}
                        {/* <a className="font-bold text-blue-500" href="/register">Register</a> */}
                        <Link className="font-bold text-red-500" to="/">
                            Login
                        </Link>
                    </p>
                </AuthLayout>
            </div>
            <Footer></Footer>
        </>
    )
}
