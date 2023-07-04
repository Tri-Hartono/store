'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const NavItems = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Product',
    url: '/products',
  },
  {
    name: 'contact',
    url: '/contact',
  },
];
export default function Navbar() {
  const [active, setActive] = useState(false);
  const items = useSelector((state) => state.cart);

  return (
    <div className="fixed bg-white/80 z-20 px-setting flex justify-between items-center w-full py-2  ">
      <Link href={'/'} className="z-20">
        <h2>Store</h2>
      </Link>
      <div className={`inset-0 lg:relative flex flex-col lg:flex-row  gap-4 w-full z-10 ${active ? 'fixed lg:relative' : 'hidden lg:flex'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full h-1/2 ">
          {NavItems.map((item, index) => (
            <Link href={item.url} className="" key={index}>
              <div>{item.name}</div>
            </Link>
          ))}
          <Link className="lg:hidden" href="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 z-20">
          <Link href="/cart" className="relative">
            <AiOutlineShoppingCart className="w-7 h-7 z-10 relative " />
            <p className="absolute bottom-0 right-0 bg-black/80 rounded-full text-white text-xs px-[2px] z-10">{items.length}</p>
          </Link>
          <div className="relative lg:hidden" onClick={() => setActive(!active)}>
            {active ? <AiOutlineClose className="w-5 h-5 " /> : <AiOutlineMenu className="w-5 h-5 " />}
          </div>
        </div>
        <Link className="hidden lg:flex" href="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
