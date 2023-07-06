'use client';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { STATUSES, fetchProducts } from '../redux/productSlice';
import CardProducts from './CardProducts';

export default function Rekomendasi() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUSES.LOADING) {
    return <p>Tunggu Sebentar</p>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

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
      {status === STATUSES.LOADING ? (
        <>
          <p>Tunggu Sebentar</p>
        </>
      ) : (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          {products.slice(0, 4).map((product, index) => (
            <CardProducts key={index} {...product} />
          ))}
        </div>
      )}
    </>
  );
}
