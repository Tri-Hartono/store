'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { remove } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function CardCart(product) {
  const [quantity, setQuantity] = useState(1);
  const [countProduct, setCountProduct] = useState(product.price);
  const dispatch = useDispatch();

  const increment = () => {
    setQuantity(quantity + 1);
    setCountProduct(countProduct + product.price);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setCountProduct(countProduct - product.price);
    }
  };
  const removeFromCart = () => {
    dispatch(remove(product.id));
  };

  return (
    <div className=" flex items-center justify-between border-b border-slate-200 py-10 gap-2">
      <div className="w-20 h-20 relative">
        <Image src={product.image} objectFit="contain" layout="fill" alt="" />
      </div>
      <div className=" w-1/2">
        <h3>item</h3>
        <p className="font-bold">{product.title}</p>
      </div>
      <div>
        <h3>price</h3>
        <p className="font-bold">${countProduct}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-center items-center gap-2">
          <button onClick={increment} className="px-2 py-1 bg-slate-800 text-white">
            +
          </button>
          <p>{quantity}</p>
          <button onClick={decrement} className="px-2 py-1 bg-slate-800 text-white">
            -
          </button>
        </div>
      </div>

      <AiOutlineDelete className=" w-5 h-5 " onClick={removeFromCart} />
    </div>
  );
}
