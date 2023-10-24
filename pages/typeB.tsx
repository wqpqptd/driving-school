import Head from 'next/head';

import TypeB from '@/components/TypeB';
import { Apply } from '@/components/Apply';

export default function Index() {
  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe - Giấy phép xe mô tô hạng B</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container mx-auto max-w-7xl ">
        <TypeB />
        <Apply />
      </div>
    </>
  );
}
