import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <>
            <div class="max-h-screen bg-[url('../../public/image/stick.jpg')] object-center bg-cover bg-center">
                <AuthLayout title="Login" desc="Silahkan Masuk" type="login">
                    <Login />
                    <p className="text-sm mt-4 text-center">
                        Dont have an account?{" "}
                        {/* <a className="font-bold text-blue-500" href="/register">Register</a> */}
                        {/* cara menggunakan routing pake Link buat pindah antar komponen/halaman */}
                        <Link className="font-bold text-blue-500" to="/register">
                            Register
                        </Link>
                    </p>
                </AuthLayout>
            </div>
        </>
    )
}
