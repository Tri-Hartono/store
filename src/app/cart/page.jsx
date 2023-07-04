'use client';
import CardCart from '../../../components/CardCart';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Cart() {
  const products = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col lg:flex-row  justify-between gap-4 md:py-10">
      <div className="w-full ">
        {products.length === 0 ? (
          <p>Your cart is Emty</p>
        ) : (
          <div>
            {products.map((product) => (
              <CardCart key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
      <div className="shadow h-fit p-4 lg:w-2/5 space-y-4 rounded-md ">
        <h3>Order Summary</h3>
        <div className="flex justify-between">
          <p>Sub total</p>
          <p className="font-bold">$200</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping tax</p>
          <p className="font-bold">$200</p>
        </div>
        <div className="flex justify-between">
          <p>Cuppon Code</p>
          <p className="font-bold">$200</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">$200</p>
        </div>
        <div className="flex justify-between items-center">
          <button>Checkout</button>
          <Link href="/products">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
