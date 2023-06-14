import React from 'react';
import Button from '../../atom/Button';
import { Link } from 'react-router-dom';

export default function CardProduct(props) {
    const { children } = props;
    return (
        <>
            <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1">
                <div className="w-full max-w-lg bg-white rounded-lg">{children}</div>
            </div>
        </>
    )
}

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="gambar" className="p-4 rounded-t-lg" />
        </a>
    );
};

const Body = (props) => {
    const { title, children } = props;
    return (
        <>
            <div>
                <a href="#">
                    <h5 className="text-3xl px-4 font-bold text-slate-900">{title}</h5>
                    <p className="mt-3 px-4 py-2 text-slate-700 text-base text-justify">{children}</p>
                </a>
            </div>
        </>
    );
};

const Footer = (props) => {
    const { price } = props;
    return (
        <>
            <div className="px-6 py-4">
                <div className="flex justify-between items-center py-2 px-2">
                    <span className="text-2xl font-bold text-slate-900" >Harga </span>
                    <h1 className="text-xs font-bold text-slate-900">{price}</h1>
                </div>
                <Link className="font-bold text-blue-500" to="/Catalog">
                    <Button color="bg-blue-500">Beli</Button>
                </Link>
            </div>
        </>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;