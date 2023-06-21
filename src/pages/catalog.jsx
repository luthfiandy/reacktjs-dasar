import React from 'react';import CardProduct from '../components/organism/CardProduct';
import Navbar from '../components/template/Navbar'
import Footer from '../components/template/Footer'


export default function Dashboard() {
    const data = [{
        id: 1,
        image: "public/image/ml.jpg",
        title: "Mobile Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 2,
        image: "public/image/pubg3.png",
        title: "PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 3,
        image: "public/image/ff.jpg",
        title: "League of Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 4,
        image: "public/image/dota-2.jpg",
        title: "Dota 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 5,
        image: "public/image/lol.jfif",
        title: "League of Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 6,
        image: "public/image/ml.jpg",
        title: "Mobile Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 7,
        image: "public/image/pubg3.png",
        title: "PUBG",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 8,
        image: "public/image/ff.jpg",
        title: "League of Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 9,
        image: "public/image/dota-2.jpg",
        title: "Dota 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    {
        id: 10,
        image: "public/image/lol.jfif",
        title: "League of Legends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
    },
    ];

    const card = [{
        id: 1,
        image: "public/image/bronze-medal.png",
        title: "Paket Bronze",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
        price: "Rp. 1.000.000"
    },
    {
        id: 2,
        image: "public/image/silver-medal.png",
        title: "Paket Silver",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
        price: "Rp. 3.000.000"
    },
    {
        id: 3,
        image: "public/image/gold-medal.png",
        title: "Paket Gold",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nam autem saepe natus maxime repellat?",
        price: "Rp. 5.000.000"
    },
    ];

    return (
        <>
            <Navbar />
            <div className="w-full">
                <img src="/image/bg-1.jpg" className="w-full bg-cover"></img>
                <div className="absolute top-52 right-56 justify-start items-start text-5xl text-center font-bold text-white">Selamat datang di Akademi Garudaku</div>
            </div>
            <div className="w-full py-1">
                <div className="bg-[url(/image/bg-pd.jfif)] min-w-screen bg-cover flex flex-col justify-center items-center">
                    <div className="flex-row mt-4 justify-center items-center text-5xl text-center font-bold text-white font-serif">
                        Cabang Olahraga Esport
                    </div>
                    {/* <img src="/image/bg-pd.jfif" className="w-full bg-cover"></img> */}
                    <div className="w-full flex flex-wrap justify-center bg-center items-center p-1 gap-6 m-9">
                        {data.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                            </CardProduct>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-full pb-1">
                <div className="bg-[url(/image/prepare.jpg)] bg-cover flex flex-col justify-center items-center">
                    <img src="/image/eports.png" alt="" className='mt-10' />
                    {/* <h1 className="flex-row justify-center items-center text-5xl text-center font-bold text-yellow-600 mt-5 font-serif"> 
                    ESPORTS </h1>
                <p className="flex-row justify-center items-center text-5xl text-center font-bold text-yellow-700 mt-5 font-serif"> Master Class</p> */}
                    <div className="w-full h-full flex flex-wrap justify-center bg-center items-center p-1 gap-6 m-9">
                        <div className="w-full flex flex-warp justify-center bg-center items-center p-1 gap-6 m-9">
                        {card.map((product) => (
                            <CardProduct type="login" key={product.id}>
                                <CardProduct.Header type="page" image={product.image}/>
                                <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                                <CardProduct.Footer price={product.price}/>
                            </CardProduct>
                        ))}
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}