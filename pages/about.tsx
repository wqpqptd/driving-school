import Head from 'next/head';
import Image from 'next/image';

import { Apply } from '@/components/Apply';
import { InstructorCard } from '@/components/ui/InstructorCard';

export default function Index() {
  const instructors = [
    { name: 'Bùi Đạt A', image: '/about/teacher1.jpg' },
    { name: 'Bùi Thành A', image: '/about/teacher2.jpg' },
    { name: 'Bùi Hữu A', image: '/about/teacher3.jpg' },
  ];
  const photos = [
    '/about/opinions/opinion1.png',
    '/about/opinions/opinion4.png',
    '/about/opinions/opinion3.png',
    '/about/opinions/opinion2.png',
    '/about/opinions/opinion5.png',
    '/about/opinions/opinion6.png',
  ];

  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe - Giới thiệu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <section className=" bg-lightWhite py-16">
        <div className="mx-auto  px-1">
          <h1 className="mb-8 text-center text-4xl font-bold ">
          Trung tâm đào tạo bằng lái xe ở Cần Thơ
          </h1>
          <p className="text-gray-800, mb-8 px-10 text-lg ">
          Trung tâm đào tạo bằng lái xe được tạo ra với ý tưởng giúp mọi người dễ dàng lấy bằng lái xe mơ ước và tận hưởng sự độc lập và niềm vui khi tự lái xe. 
          Trước hết, chúng tôi dạy cách lái xe, không chỉ là cách vượt qua kỳ thi. Bạn có thể yên tâm rằng sau khi hoàn thành kỳ thực tập với các giảng viên của chúng tôi, 
          bạn sẽ tham gia kỳ thi với sự an tâm tự nhiên và không căng thẳng, vượt qua nó trong lần thử đầu tiên!
          </p>

          <div className="mb-8 flex items-center justify-center">
            <Image src="/about/team.jpg" alt="" width={900} height={900} />
          </div>
          <div className="mt-10 bg-lightWhite">
            <h2 className="mb-4 py-10 text-center text-2xl font-bold ">
              Giảng viên:
            </h2>
            <div className=" lg:flex xl:p-10">
              {instructors.map((instructor, index) => (
                <InstructorCard
                  key={index}
                  name={instructor.name}
                  image={instructor.image}
                />
              ))}
            </div>
          </div>
          {/* <div className="flex h-36 w-full items-center justify-center bg-zinc-800">
            <p className="text-regular mb-8 text-center text-3xl font-extrabold text-white">
              Xem những gì học viên đánh giá về chúng tôi
            </p>
          </div>
          <div className="flex flex-wrap justify-center bg-darkGray">
            {photos.map((photo, index) => (
              <div key={index} className="min-h-40 m-5 h-auto w-3/4 lg:w-2/5">
                <Image
                  width={500}
                  height={150}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-darkGray py-10 ">
            <a
              href="https://www.superprawojazdy.pl/szkola-jazdy-strazak,21769.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block  w-auto max-w-[500px] rounded-lg bg-red-700 px-6 py-3 text-center text-lg font-semibold text-white hover:bg-indigo-500"
            >
              Xem thêm các đánh giá đáng tin cậy trên superprawojazdy.pl
              &gt;&gt;
            </a>
          </div> */}
        </div>
      </section>
      <Apply />
    </>
  );
}
