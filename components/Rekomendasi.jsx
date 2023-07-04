'use client';
import Link from 'next/link';
import CardProducts from './CardProducts';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../redux/productSlice';
import { useEffect } from 'react';

export default async function Rekomendasi() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-between items-center pt-10">
        <h2>Product Recommendations</h2>
        <div>
          <Link href={'/products'}>
            <button>All Product</button>
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
        {products.slice(0, 4).map((product, index) => (
          <CardProducts key={index} {...product} />
        ))}
      </div>
    </>
  );
}
