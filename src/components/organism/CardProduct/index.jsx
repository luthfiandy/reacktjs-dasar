import React from 'react';
import Button from '../../atom/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';

export default function CardProduct(props) {
    const { children } = props;
    return (
        <>
            <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1">
                <div className="w-96 h-[610px] bg-white rounded-lg">{children}</div>
            </div>
        </>
    )
}

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <div className="overflow-y-hidden text-clip h-80">
            <img src={image} alt="gambar" className="px-28 py-10 rounded-t-lg" />
            </div>
        </a>
    );
};

const Body = (props) => {
    const { title, children } = props;
    return (
        <>
            <div>
                <a href="#">
                    <h5 className="overflow-y-auto truncate text-3xl px-4 font-bold text-slate-900">{title}</h5>
                    <div className="overflow-y-hidden text-clip h-24">
                    <p className="mt-2 px-4 py-2 text-slate-700 text-base text-justify">{children}</p>
                    </div>
                </a>
            </div>
        </>
    );
};

const Footer = (props) => {
    const { price, handleToCart, id } = props;
    const dispatch = useDispatch();
    return (
        <>
            <div className="p-6 mt-2 mb-2">
                <div className="flex justify-center items-center items-center py-2 px-2">
                    <span className="text-2xl font-bold text-slate-900" >
                        Harga : {price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
                    </span>
                    {/* <h1 className="text-xs font-bold text-slate-900">{price}</h1> */}
                </div>
                <div className="font-bold text-blue-500">
                    <Button color="bg-blue-500" onClick={() => dispatch(addToCart({id, qty: 1 }))}>Beli</Button>
                </div>
            </div>
        </>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;