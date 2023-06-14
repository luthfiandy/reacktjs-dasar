import React from 'react';
import CardProduct from '../components/organism/CardProduct';
import Button from '../components/atom/Button';


export default function ProductPage() {
    return (
        <>
            <header className="bg-gradient-to-r text-center py-5 text-5xl font-semibold text-white from-red-700 via-green-700 to-blue-700">
                Licht Store
            </header>
            <body className="flex justify-start bg-[url('public/image/stick.jpg')] bg-center items-center gap-5 bg-cover">
                <div className="flex flex-row justify-between py-8 px-8 gap-4">
                    <div className="flex flex-row justify-start items-start mx-4 p-8">
                        <CardProduct>
                            <CardProduct.Header image="public/image/ps5.webp" />
                            <CardProduct.Body>
                                <div className="flex flex-row justify-between items-center mx-4">
                                    <Button size="w-10" color="bg-yellow-400">-</Button>
                                    <div>jumlah</div>
                                    <Button size="w-10" color="bg-yellow-400">+</Button>
                                </div>
                            </CardProduct.Body>
                            <CardProduct.Footer price="Rp. 20.000.000" />
                        </CardProduct>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-red-700 via-green-700 to-blue-700 p-2">
                        <button className="absolute right-20 top-[130px] w-12 h-12">
                            <img src="/image/wl.png" alt="wishlist" />
                        </button>
                        <div className="flex justify-start items-start rounded-lg bg-white">
                            <div className="flex flex-row w-3/4 h-[525px] rounded-lg px-7">
                                <div>
                                    <h1 className="text-8xl font-bold text-start mb-2 text-blue-600">PS 5</h1>
                                    <p className="text-start font-medium text-slate-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sapiente, quidem id nulla, animi possimus odit dignissimos officiis aperiam assumenda, facere sit ducimus maxime placeat tempora earum in enim. Vero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
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