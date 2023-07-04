import { productImage } from '../../../assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className=" flex flex-col md:flex-row  rounded-lg overflow-hidden  md:h-[80vh] ">
      <div className=" md:w-1/2 h-auto  flex items-center justify-center">
        <Image src={productImage} width={0} height={0} alt="Image Login" />
      </div>
      <div className="flex flex-col items-center justify-center md:w-1/2 h-auto   ">
        <div className="w-full  m-auto p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="w-10 rounded-md h-1 bg-black"></span>
            <p className="font-semibold">Contact Us</p>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Contact our Support and Sales Team</h1>
          <p>Need to get with the team ? We&apos;re all ears</p>
          <div className="flex gap-4">
            <button type="submit" className=" text-white bg-blue-300">
              Contact Us
            </button>
            <button type="submit" className=" text-white bg-blue-300">
              Visit Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
