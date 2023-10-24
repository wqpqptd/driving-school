import Head from 'next/head';
import Image from 'next/image';
import { FC, useState } from 'react';
import { TypeBCart } from './categories/b/TypeBCart';
import { TypeCCart } from './categories/b/TypeCCart';

interface TypeAProps {}

const TypeB: FC<TypeAProps> = ({}) => {
  const [activeTab, setActiveTab] = useState('B');
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image
          width={100}
          height={100}
          className="h-20 w-28"
          src="/logo.png"
          alt="logo"
        />
      </div>
      <h2 className="text-center text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
      Trung tâm đào tạo bằng lái xe
      </h2>
      <h3 className=" mb-5 mt-10 text-center text-2xl font-bold tracking-tight text-black sm:text-xl">
        Chọn các danh mục:
      </h3>
      <div className="m-4 mt-1 flex justify-center space-x-4">
        <div
          onClick={() => setActiveTab('B')}
          className={`border-b-4 ${
            activeTab === 'B' ? 'border-red-500' : 'border-gray-300'
          }  cursor-pointer`}
        >
          <div className="h-10 w-10 cursor-pointer px-3 text-2xl font-black text-gray-600 hover:text-indigo-600 ">
            B
          </div>
        </div>
        <div
          onClick={() => setActiveTab('B+E')}
          className={`border-b-4 ${
            activeTab === 'B+E' ? 'border-red-500' : 'border-gray-300'
          }  cursor-pointer`}
        >
          <div className=" h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
            B+E
          </div>
        </div>
      </div>
      {activeTab === 'B' && <TypeBCart />}
      {activeTab === 'B+E' && <TypeCCart />}
    </div>
  );
};

export default TypeB;
