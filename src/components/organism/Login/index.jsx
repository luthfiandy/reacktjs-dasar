import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'

export default function Login(props) {
  return (
    <form action="">
        <InputForm label="Email" type="email" placeholder="Masukkan email"/>
        <InputForm label="Password" type="password" name="password" placeholder="Masukkan password"/>
        <Link className="font-bold text-blue-500" to="/Login">
          <Button color="bg-blue-500">Login</Button>
        </Link>
        
    </form>
    
  )
}
