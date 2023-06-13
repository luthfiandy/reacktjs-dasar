import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login(props) {
  return (
    <form action="">
        <InputForm label="Email" type="email" placeholder="Masukkan email"/>
        <InputForm label="Password" type="password" name="password" placeholder="Masukkan password"/>
        <Button color="bg-blue-500">Login</Button>
    </form>
    
  )
}
