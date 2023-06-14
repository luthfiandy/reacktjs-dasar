import React from 'react'

export default function Button(props) {
    const { color = "bg-black", children, size="w-full" } = props;
    // dibawah ini adalah cara menggunakan props children
    return <button className={`h-15 py-1 font-semibold rounded-md ${color} ${size} text-white`}>{children}</button>
}