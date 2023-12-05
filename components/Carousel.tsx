import Image from 'next/image';
import Link from 'next/link';
import { Carousel as CaruselCardd } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CaruselCard } from './ui/CaruselCard';

export const Carousel = () => {
  const images1 = [
    ['/clientss/client1.png', '/clientss/client2.png'],
    ['/clientss/client3.png', '/clientss/client4.png'],
    ['/clientss/client5.png', '/clientss/client6.png'],
    ['/clientss/client7.png', '/clientss/client8.png'],
    ['/clientss/client9.png', '/clientss/client10.png'],
  ];
  const images2 = [
    [
      '/clientss/client1.png',
      '/clientss/client2.png',
      '/clientss/client3.png',
      '/clientss/client4.png',
    ],
    [
      '/clientss/client6.png',
      '/clientss/client7.png',
      '/clientss/client8.png',
      '/clientss/client9.png',
    ],
    [
      '/clientss/client10.png',
      '/clientss/client6.png',
      '/clientss/client7.png',
      '/clientss/client8.png',
    ],
  ];

  return (
    <section className="mx-auto my-16 w-full max-w-[1250px] lg:w-3/4">
      {/* <div className="block sm:hidden">
        <CaruselCard images={images1} />
      </div>
      <div className="hidden sm:block">
        <CaruselCard images={images2} />
      </div> */}
      {/* <Link
        // href="/about"
        href ="#"
        className="mx-auto mt-10 block w-[90%] rounded-lg bg-red-700 px-3 py-2.5 text-center text-2xl font-bold leading-7  text-white hover:opacity-80  lg:w-1/3"
      >
        Xem thêm nhiều đánh giá {'>>'}
      </Link> */}
    </section>
  );
};
