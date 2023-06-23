import { useParams } from "react-router";
import { getDetailProduct } from "../services/product.service";
import { useEffect, useState } from "react";

const DetailProductPage = () => {
    const {id} = useParams() ;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
        });
    }, [id]) ;

    console.log(product);

    return (
        <div>
            Detail Product : {id}
        </div>
    );
};

export default DetailProductPage