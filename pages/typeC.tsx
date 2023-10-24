import Head from 'next/head';

import { Apply } from '@/components/Apply';

export default function Index() {
  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe - Giấy phép xe mô tô hạng C </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container mx-auto max-w-7xl ">
        <h1 className="my-3 text-2xl">Đang tiến hành</h1>
        <p className="my-2 text-lg text-red-600">
        Các cuộc sát hạch bằng C, C + E được tổ chức thường xuyên. Liên hệ với chúng tôi để biết thêm thông tin. Mọi thứ sẽ được giải thích kỹ lưỡng.
        </p>
        <Apply />
      </div>
    </>
  );
}
