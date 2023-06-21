import React from 'react'

export default function Button(props) {
    const { color = "bg-black", children, size="w-full", onClick } = props;
    // dibawah ini adalah cara menggunakan props children
    return <button className={`h-15 p-2 font-semibold rounded-md ${color} ${size} text-white`} onClick={onClick}>{children}</button>
}