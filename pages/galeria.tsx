import Image from 'next/image';
import Head from 'next/head';

import { SliderGallery } from '../components/SliderGallery';
import { Apply } from '@/components/Apply';

const images = [
  '/about/about1.jpg',
  '/about/about2.jpg',
  '/about/about3.jpg',
  '/about/about4.jpg',
  '/about/about5.jpg',
  '/about/about6.jpg',
  '/about/about7.jpg',
  '/about/about8.jpg',
];

const index = ({}) => {
  return (
    <>
      <Head>
        <title>Thư viện ảnh của trung tâm đào tạo bằng lái xe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="mx-auto mb-10 max-w-2xl py-16 sm:text-center">
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
        <p className="mt-6 p-3 text-lg leading-8 text-gray-600">
        Tham gia nhóm những người lái xe hài lòng và bắt đầu cuộc phiêu lưu của bạn với việc lái xe tại trường dạy lái xe hàng đầu ở Cần Thơ. Chúng tôi cung cấp các khóa học toàn diện về ô tô, xe máy, xe tải và xe buýt sẽ giúp bạn lái xe an toàn và tự tin trên bất kỳ loại đường nào. Tận dụng ưu đãi phong phú của chúng tôi và đăng ký ngay hôm nay để tham gia một khóa học sẽ mở ra những cơ hội mới cho bạn và cho phép bạn tự do di chuyển theo cách riêng của mình!
        </p>
      </div>
      <SliderGallery images={images} />
      <Apply />
    </>
  );
};

export default index;
