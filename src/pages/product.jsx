import React from 'react'
import CardProduct from '../components/organism/CardProduct'
import Button from '../components/atom/Button';

export default function ProductPage() {
    const data = [{
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
        image: "public/image/ps2.jpg",
        title: " PS 2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 3.000.000"
    }, {
        id: 4,
        image: "public/image/ps3.jpg",
        title: " PS 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 4.000.000"
    }, {
        id: 5,
        image: "public/image/ps3.jpg",
        title: " PS 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 5.000.000"
    }, {
        id: 6,
        image: "public/image/ps4.jpg",
        title: " PS 4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: " Rp. 6.000.000"
    },
    {
        id: 7,
        image: "public/image/ps2.jpg",
        title: " PS 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 4.000.000"
    },
    {
        id: 8,
        image: "public/image/ps4.jpg",
        title: " PS 4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 7.000.000"
    }, {
        id: 9,
        image: "public/image/ps4.jpg",
        title: " PS 4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 8.000.000"
    }, {
        id: 10,
        image: "public/image/ps5.jpg",
        title: " PS 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 9.000.000"
    }, {
        id: 11,
        image: "public/image/ps5.jpg",
        title: " PS 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 10.000.000"
    }, {
        id: 12,
        image: "public/image/ps5.jpg",
        title: " PS 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat",
        price: "Rp. 12.000.000"
    },
    ];

    return (
        <>
            <header className="bg-gradient-to-r text-center py-6 text-5xl font-semibold text-white from-red-700 via-green-700 to-blue-700">
                Licht Store
            </header>
            <div className="flex flex-wrap justify-betwen justify-center bg-[url('public/image/stick.jpg')] bg-center items-center py-3 gap-10">
                    {data.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
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
