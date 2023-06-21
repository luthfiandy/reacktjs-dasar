import React from "react";

export default function Button(props) {
    const { color = "bg-black", children, text = "text-black", size, type = "submit", onClick = () => { } } = props;
    // dibawah ini adalah cara menggunakan props children
    return (
        <button
            type={type}
            onClick={onClick}
            className={`h-15 w-full py-1 font-semibold rounded-md ${color} ${size} ${text}`}
        >
            {children}
        </button>
    );
}