import Image from 'next/image';
import { men1, men2, men3, women1, women2, women3 } from '../assets';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-[90vh]  w-auto flex flex-col justify-center gap-4 ">
      <div className="bg-[url('../../assets/images/bg.jpg')] bg-cover bg-no-repeat w-full h-3/4 flex items-center justify-end px-20">
        <div className="space-y-4">
          <h1 className="font-bold">NEW SEASON</h1>
          <h2>CHECK OUT ALL THE TRENDS</h2>
        </div>
      </div>
      <div className="w-full h-1/4 flex flex-col md:flex-row gap-4 ">
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
