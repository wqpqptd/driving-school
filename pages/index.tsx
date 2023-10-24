import Head from 'next/head';

import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { FiveSteps } from '@/components/FiveSteps';
import { Impression } from '@/components/Impression';
import { Features } from '@/components/Features';
import { Carousel } from '@/components/Carousel';
import { Oferts } from '@/components/Oferts';
import { Apply } from '@/components/Apply';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe - Trung tâm đào tạo hàng đầu ở Cần Thơ!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Header />
        <Oferts />
        <Gallery />
        <Impression />
        <FiveSteps />
        <Carousel />
        <Features />
        <Apply />
      </div>
    </>
  );
}
