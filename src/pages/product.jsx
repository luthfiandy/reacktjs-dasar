import React, { useState } from 'react'
import CardProduct from '../components/organism/CardProduct'
import Button from '../components/atom/Button';


export default function ProductPage() {

    // state = data/penyimpanan private yg dipake buat menghandle komponen yang berubah2
    const [cart, setCart] = useState([
        // {
        //     name: "PS",
        //     qty: 1,
        // },
    ]);

    const data = [
        {
            id: 1,
            image: "public/image/ps1.jpg",
            title: " PS 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
            price: " Rp. 1.000.000"
        },
        {
            id: 2,
            image: "public/image/ps2.jpg",
            title: " PS 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
            price: "Rp. 2.000.000"
        },
        {
            id: 3,
            image: "public/image/ps3.jpg",
            title: " PS 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
            price: "Rp. 3.000.000"
        },
        // {
        //     id: 4,
        //     image: "public/image/ps3.jpg",
        //     title: " PS 3",
        //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        //     price: "Rp. 4.000.000"
        // }, {
        //     id: 5,
        //     image: "public/image/ps3.jpg",
        //     title: " PS 3",
        //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        //     price: "Rp. 5.000.000"
        // }, {
        //     id: 6,
        //     image: "public/image/ps4.jpg",
        //     title: " PS 4",
        //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        //     price: " Rp. 6.000.000"
        // },

    ];
    const [modal, setModal] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage, removeItem("password");
        window.location.href = "/login";
    }

    const handleToCart = (id) => {
        // setCart ([
        //     ...cart,
        //     {
        //     id: id,
        //     qty: 1,
        //     },
        // ]);

        //kalo ada id yg sama maka akan menambahkan qty +1
        if (cart.find((item) => item.id === id)) {
            //dia akan mapping dan membongkar itemnya
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            // kalo data nya cuma 1 maka akan di set satu
            setCart([...cart, { id, qty: 1 }]);
        }
        console.log(cart);
    }


    return (
        <>
            {modal && (
                <div className="w-full flex justify-center items-center h-screen absolute bg-black/50">
                    <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center border border-red-400">
                        <h2 className=" text-center justify-center items-center text-2xl">Apakah anda ingin keluar?</h2>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis ipsa nihil omnis odio voluptatum!
                        </p> */}
                        <div className=" flex mt-4 gap-10">
                        <button className="bg-red-500 p-2 rounded-lg text-white mx-2" onClick={() => setModal(false)}>
                            CLOSE
                        </button>
                        <button className="bg-green-500 py-2 px-4 rounded-lg text-white" onClick={() => window.location.href="/"}>
                            YES
                        </button>
                        </div>
                    </div>
                </div>
                )}
            <header className='flex justify-between items-center bg-gradient-to-r text-white from-red-700 via-green-700 to-blue-700' >
                <div className='w-20'>
                </div>
                <div className=" text-center py-6 text-5xl font-semibold">
                    Licht Store
                </div>
                <div className='mr-10'>
                    <Button onClick={() => setModal(true)}> logout</Button>
                </div>
            </header>
            <div className="w-full h-full">
                <div className="flex flex-wrap justify-start bg-[url('public/image/stick.jpg')] h-full bg-center items-center py-3 gap-2">
                    {data.map((data) => (
                        <CardProduct key={data.id}>
                            <CardProduct.Header image={data.image} />
                            <CardProduct.Body title={data.title}>{data.desc}</CardProduct.Body>
                            <CardProduct.Footer price={data.price} id={data.id} handleToCart={handleToCart} />
                        </CardProduct>
                    ))}
                    <table className="w-96 max-h-screen p-2">
                        <thead className='text-bold text-white items-center justify-center'> Cart
                            <tr className='text-white flex-wrap'>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                // mencari id dalam var data, kalo id yg di data sama dengan id yg ada di cart maka ambil produknya
                                const datas = data.find((data) => data.id === item.id);
                                return (
                                    <tr className='text-white font-bold' key={item.id}>
                                        <td className="text-center">{datas.title}</td>
                                        <td>{datas.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td>{(item.qty * datas.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="dark:bg-gray-800 dark:text-gray-400 w-full">
                <div className="flex flex-wrap items-center py-2 justify-between px-2 bg-gradient-to-r from-red-700 via-green-700 to-blue-700">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <img src="/image/Licht.jpeg" className="rounded-full dark:text-gray-900">
                            </img>
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a href="#">Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="publ">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
