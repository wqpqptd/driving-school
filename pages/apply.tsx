import { Apply } from '@/components/Apply';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe - Nộp hồ sơ </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Apply />
    </>
  );
}
