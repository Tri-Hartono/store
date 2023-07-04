import Image from 'next/image';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

export default function CardProducts(product) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(product));
  };
  return (
    <div className=" flex flex-col gap-4 justify-between shadow p-4 w ">
      <div className="w-32 h-32 mx-auto relative ">
        <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" />
      </div>
      <div className="">
        <div>{product.title.substring(0, 20) + '...'}</div>
        <div>
          Price : <span className="font-bold">${product.price}</span>
        </div>
        <div className="flex items-center gap-1">
          Rate: <span className="font-bold">{product.rating.rate}</span> <AiFillStar className="text-yellow-500" />
        </div>
      </div>
      <div className="flex gap-4 w-full justify-between items-center">
        <AiOutlineShoppingCart className="w-5 h-5" onClick={addToCart} />
        <Link href={`/products/${product.id}`}>
          <AiOutlineArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
