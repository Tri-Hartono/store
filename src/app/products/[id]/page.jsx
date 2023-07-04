import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Rekomendasi from '../../../../components/Rekomendasi';
import axios from 'axios';

const getDetailProducts = async (params) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${params}`);
  return res.data;
};

export default async function DetailProducts({ params }) {
  const DataProduct = await getDetailProducts(params.id);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between py-10 md:py-20 w-full h-full">
        <div className="w-full h-60 mb-10 md:w-1/2 relative  ">
          <Image src={DataProduct.image} objectFit="contain" layout="fill" alt={DataProduct.title} />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2>{DataProduct.title}</h2>
          <p className="font-bold">{DataProduct.category}</p>
          <p>{DataProduct.description}</p>
          <h3 className="flex items-center gap-1">
            Rate: <span className="font-bold">{DataProduct.rating.rate}</span> <AiFillStar className="text-yellow-500" />
          </h3>
          <h3>
            Price : <span className="font-bold">${DataProduct.price}</span>
          </h3>
          <div className="flex gap-4">
            <button>Cart</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <Rekomendasi />
    </div>
  );
}
