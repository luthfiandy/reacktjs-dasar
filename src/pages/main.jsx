import React, {useEffect, useState} from 'react'
import { getProduct } from '../services/product.service'
import CardProduct from '../components/organism/CardProduct';
import Button from '../components/atom/Button';

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct((data) => {
        setData(data);
        console.log("dataQ",data)
    });
}, []);

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.localStorage.clear()
  window.location.href = "/product";
};

  return (
      <>
        <div className="flex justify-between items-center bg-gray-800 text-white font-semibold px-4 py-4">
          <h4 className="text-xl"></h4>
          <Button color="bg-red-500" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="w-full flex flex-wrap justify-center items-center gap-6 py-8">
            {data.map((item, i) => (
                // <CardProduct key={data.id} onClick={() => window.location.href = `/detail-product/${data.id}`}>
                <CardProduct key={i}>
                  <CardProduct.Header src={`https://xivapi.com/${item.Icon}`}/>
                  <CardProduct.Body>{item.ID}{item.Name}{item.Url}</CardProduct.Body>
                </CardProduct>
              ))}
          </div>
        </div>
      </>
    );
  }

