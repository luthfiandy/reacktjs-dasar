import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login() {
  const handleLogin = (event) => {
    // event.preventDefault();= buat mencegah halaman merefresh pada saat mensubmit suatu form
    event.preventDefault();
    //consolo.log yg ke 1
    console.log("terklik login");
    //event.target.email.value buat ngambil value yang ada di input form
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    //buat nge redirect ke hal lain

    alert("Login Succes!!");
    window.location.href = "/product"
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
      <InputForm label="Password" type="password" name="password" placeholder="Masukkan password" />
      <Button color="bg-red-600" text="text-white">
        Masuk
      </Button>
    </form>
  );
}
