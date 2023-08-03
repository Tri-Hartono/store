import Image from 'next/image';
import { bg, men1, men2, men3, women1, women2, women3 } from '../assets';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="mt-16  md:h-screen  flex flex-col  gap-4  ">
      <div className=" w-full  py-32 md:h-4/5 flex items-center justify-center relative bg-blue-300   ">
        <div className="px-setting absolute inset-0 mt-6">
          <Image src={bg} width="auto" height="auto" className="  w-full h-full" />
        </div>
        <div className="relative z-10 space-y-4 font-bold text-white bg-white/20 shadow md:shadow-none p-4 rounded-md  text-center  ">
          <h1 className="">
            <span className="text-yellow-300 ">NEW</span> SEASON
          </h1>
          <h2 className="">
            CHECK OUT ALL THE <span className="text-yellow-300">TRENDS</span>
          </h2>
        </div>
      </div>
      <div className="w-full h-1/5 flex flex-col md:flex-row gap-4 px-setting ">
        <CardDetail title="Men's" ket="Clothing" imageSatu={men1} imageDua={men2} imageTiga={men3} colors="bg-yellow-300" />
        <CardDetail title="Women's" ket="Clothing" imageSatu={women1} imageDua={women2} imageTiga={women3} colors="bg-blue-300" />
      </div>
    </div>
  );
}

const CardDetail = ({ title, ket, imageSatu, imageDua, imageTiga, colors }) => {
  return (
    <Link href={'/products'} className="w-full overflow-hidden relative shadow flex items-center justify-between space-x-4 px-4 md:px-6 lg:px-10">
      <div className="">
        <h3 className="font-bold">{title}</h3>
        <h3>{ket}</h3>
      </div>
      <div className={`absolute w-1/2 rounded-bl-full right-0 h-full ${colors} `}></div>
      <div className="flex gap-2 relative">
        <div className="w-16 h-16">
          <Image src={imageSatu} width={0} height={0} alt="Image Satu" />
        </div>
        <div className=" w-16 h-16">
          <Image src={imageDua} width={0} height={0} alt="Image dua" />
        </div>
        <div className=" w-16 h-16">
          <Image src={imageTiga} width={0} height={0} alt="Image tiga" />
        </div>
      </div>
    </Link>
  );
};
