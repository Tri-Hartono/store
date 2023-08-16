'use client';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import axios from 'axios';
import Rekomendasi from '../../../../components/Rekomendasi';
import { useDispatch } from 'react-redux';
import { add } from '../../../../redux/cartSlice';
import { useEffect, useState } from 'react';

const getDetailProducts = async (params) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${params}`);
  return res.data;
};
export default function DetailProducts({ params }) {
  const [dataProduct, setDataProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getDetailProducts(params.id);
      setDataProduct(product);
    };

    fetchProduct();
  }, [params.id]);

  const addToCart = () => {
    if (dataProduct) {
      dispatch(add(dataProduct));
    }
  };

  if (!dataProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-setting">
      <div className="flex flex-col md:flex-row justify-between py-14 md:py-20 lg:py-24 w-full h-full gap-10 md:gap-20">
        <div className="w-[60%] h-[30vh] m-auto md:h-auto md:w-1/2 relative">
          <Image src={dataProduct.image} objctFit="contain" layout="fill" alt={dataProduct.title} />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2>{dataProduct.title}</h2>
          <p className="font-bold">{dataProduct.category}</p>
          <p>{dataProduct.description}</p>
          <h3 className="flex items-center gap-1">
            Rate: <span className="font-bold">{dataProduct.rating.rate}</span> <AiFillStar className="text-yellow-500" />
          </h3>
          <h3>
            Price : <span className="font-bold">${dataProduct.price}</span>
          </h3>
          <div className="flex gap-4">
            <button onClick={addToCart}>Cart</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <Rekomendasi />
    </div>
  );
}
