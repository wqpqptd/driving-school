import Head from 'next/head';

import { Apply } from '@/components/Apply';

export default function Index() {
  return (
    <>
      <Head>
        <title>
        Trung tâm đào tạo bằng lái xe - Giấy phép lái xe buýt, vận chuyển hàng hóa
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container mx-auto max-w-7xl ">
        <h1 className="text-2xl">Đang tiến hành</h1>
        <p className="text-lg text-red-600">
        Các cuộc sát hạch bằng lái xe buýt và vận chuyển hàng hóa được tổ chức thường xuyên. Liên hệ với chúng tôi để biết thêm thông tin. Mọi thứ sẽ được giải thích kỹ lưỡng.
        </p>
        <Apply />
      </div>
    </>
  );
}
