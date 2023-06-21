import React from 'react';
import Button from '../../atom/Button';
import { Link } from 'react-router-dom';

export default function CardProduct(props) {
    const { children, type , border } = props;
    return (
        <>
        {type==="login" ? (
            <div className="bg-white p-1 w-96 h-[400px] rounded-md"> {border}
            <div className="flex flex-col w-full h-full bg-red-800 rounded-md ">{children}</div>
        </div>
        ):(
            <div className="bg-white p-1 w-60 h-[260px]">
            <div className="flex flex-row-reverse w-full h-full bg-red-800 ">{children}</div>
        </div>
        )}

        </>
    )
}

const Header = (props) => {
    const { image, type } = props;
    return (
        <>
        { type =="page" ? (
            <a className="w-full h-full p-4">
            <img src={image} alt="gambar" className="max-w-40 h-40" />
        </a>
        ) : (
            <a href="#" className="w-96 h-96 p-1">
            <img src={image} alt="gambar" className="" />
        </a>
        )}
        </>
    );
};

const Body = (props) => {
    const { title, children } = props;
    return (
        <>
            <div>
                <a href="#">
                    <h5 className="text-xl px-6 font-bold text-slate-200">{title}</h5>
                    <p className="mt-1 px-6 text-white text-sm text-start">{children}</p>
                </a>
            </div>
        </>
    );
};

const Footer = (props) => {
    const { price } = props;
    return (
        <>
            <div className="px-4 py-4">
                <div className="flex justify-between items-center py-2 px-2">
                    <span className="text-2xl font-bold text-white" >Harga </span>
                    <h1 className="text-lg font-bold text-slate-200">{price}</h1>
                </div>
                <Link className="font-bold text-blue-500" to="/Catalog">
                    <Button color="bg-blue-500">Pilih</Button>
                </Link>
            </div>
        </>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;