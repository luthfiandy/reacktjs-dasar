import React from "react";

//nested component = komponen dalam komponen

function Button() {
  return <button className="h-10 px-6 font-semibold rounded-md bg-blue-700 text-white">Buttton</button>
}

// pake cara anon function
// props(properti) = argumen/parameter yang bisa di kirim ke kompenen lainnya
// fungsinya agar kita bisa mengkustomisasi/mengubah komponen yang kita buat


const Button2 = (props) => {
  // dibawah ini adalah cara ngasih nilai default kedalam props (dalam contoh ini si 'text')
  const {text="..."} = props;
  //dibawah ini adalah cara menggunakan props
  return <button className={`h-10 px-6 font-semibold rounded-md ${props.color} text-white`}>{text}</button>
}

const Button3 = (props) => {
  // dibawah ini adalah cara menggunakan props children untuk menkustomisasi komponen diantara tag pembuka penutup
  const {color = "bg-black", children } = props;
  // dibawah ini adalah cara menggunakan props children
  return <button className={`h-15 px-6 font-semibold rounded-md ${color} text-white`}>{children}</button>
}

export default function ComponentProps(props) {
  const {textColor, text} = props
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <h1 className={`${textColor} text-5xl font-bold text-center` }>{text}</h1>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">Button</button>
        <button className="h-10 px-6 font-semibold rounded-md bg-gray-300 text-black">Button</button>
        <Button />
        <Button2 color = "bg-green-500" text="Logout"/>
        <Button2 color = "bg-red-500" />
      </div>
      <div className="flex justify-center items-center mt-3 gap-x-4">
        <Button2 color = "bg-violet-500" />
        <Button2 color = "bg-yellow-500" />
    
        <Button3 >
          Logout <span className="text-red-500"> bro </span>
          <p>test jaringan</p>
        </Button3>
      </div>
    </>
  )
}