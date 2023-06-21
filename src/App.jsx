import React from 'react'
import ComponentProps from "./belajar/componentProps"
import Input from './components/atom/Input';
import InputForm from './components/molecules/InputForm';
import Login from './components/organism/Login';
import AuthLayout from './components/template/AuthLayout';
import Register from './components/organism/Register';
import Counter from './belajar/counter';

function App() {
  return (
    // simbol <></> = fragment sebagai parent dari suatu komponen
    <>
      <div className="flex flex-row gap-x-10 justify-center items-center min-h-screen">
        {/* cara menambahkan style yang tidak ada di tailwind menggunkan arbitari atau 
        kurung siku seperti contoh textcolor dibawah ini */}
        {/* <ComponentProps textColor="text-cyan-500" text="Selamat Datang"/> */}
        {/* <AuthLayout title="Login" desc="Silahkan Masuk">
          <Login />
        </AuthLayout>
        <AuthLayout title="Register" desc="Silahkan Masuk">
          <Register />
        </AuthLayout> */}
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
