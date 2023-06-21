import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Login() {
  const handleLogin = (event) => {
    // event.preventDefault();= buat mencegah halaman merfresh
    event.preventDefault();
    //consolo.log yg ke 1
    console.log("terklik login");
    //event.target.email.value buat ngambil value yang ada di input form
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    //buat nge redirect ke hal lain
    window.location.href = "/product"
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* onSubmit = event handler yang menangani suatu form ketika di submit (button type "submit") */}
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" ref={emailRef} />
      <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" />
      {/* <Link className="font-bold text-blue-500" to="/Login"> */}
      <Button color="bg-blue-500">Login</Button>
      {/* </Link> */}
    </form>

  )
}
