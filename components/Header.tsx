import Link from 'next/link';

import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BsArrowRightShort } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import Image from 'next/image';

export const Header = () => {
  return (
    <section className=" mt-2  w-full min-w-[380px]">
      <div className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="About Image"
            fill
            className="opacity-50"
          />
        </div>
        <div className="container mx-auto ml-0 mt-0 flex h-auto w-3/4 flex-col items-start px-4 pt-10 sm:ml-12 sm:items-start md:ml-24 lg:ml-36 2xl:pl-28 2xl:pt-36">
          <div className="mt-15 z-10 flex h-[250px] w-[350px] flex-col justify-between bg-red-600 sm:h-[180px] sm:w-[550px] md:h-[200px] md:w-[550px] lg:w-[600px]">
            <div className="custom-divider relative bottom-3 py-0" />
            <h1 className="p-1 text-center text-3xl font-extrabold  text-white  ">
              Trung tâm đào tạo bằng lái xe!
            </h1>
            <div className="z-11 relative  flex h-1/4 w-full items-center bg-white p-1 text-base font-bold text-black sm:left-5 sm:h-1/4 md:text-xl">
              <h2 className=" p-auto text-center text-xs sm:text-base md:text-base">
                Đến với chúng tôi để đường về nhà trở nên vui vẻ và an toàn hơn!
              </h2>
            </div>
          </div>
          <div className="z-10 flex h-14 w-64 items-center bg-red-600 pl-10 font-bold text-white">
            Gọi ngay 0359 350 383
          </div>
          <Link
            href="/contact"
            className="group z-10 mt-1 flex h-16 w-64 cursor-pointer items-center border-b-4 border-white bg-transparent pl-10 font-bold text-white"
          >
            Liên hệ với với chúng tôi!
            <span className="ml-2 hidden group-hover:flex">
              <BsArrowRightShort className="m-2 h-6 w-6" />
            </span>
          </Link>
          <div className="relative -mt-3 w-full md:-mt-5">
            <div
              id="atuty"
              className="relative mt-4 w-60 bg-transparent md:bottom-20 md:left-96"
            >
              <div className=" relative z-20 text-lg font-bold text-white">
                <p className=" p-4">Kỳ sát hạch kế tiếp:</p>
              </div>
              <div className="cart  bg-white">
                <i className="icon bg-white">
                  <MdDateRange className="h-8 w-8" />
                </i>
                <p className="bg-white">11.11.2023 Vào lúc: 07:00</p>
              </div>

              <div className="custom-divider" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
