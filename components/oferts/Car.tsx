import Link from 'next/link';

export const Car = () => {
  return (
    <div className="cartOfert">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          Khóa học bằng B
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
        Có được sự tự do và độc lập của bạn với khóa học lái xe loại B của chúng tôi! Dưới con mắt thận trọng của những người hướng dẫn giàu kinh nghiệm, bạn sẽ học cách lái xe an toàn và tự tin, đạt được các kỹ năng cần thiết sẽ mở ra những cơ hội mới cho bạn. Lịch trình linh hoạt, phương pháp giảng dạy hiện đại và giá cả cạnh tranh của chúng tôi làm cho nó trở thành thời điểm hoàn hảo để đưa ra quyết định. Đăng ký ngay hôm nay và bắt đầu hành trình tự lái của bạn!{' '}
          <Link
            href="typeB"
            className="text-lg font-semibold text-red-500 underline"
          >
            Xem chi tiết...
          </Link>
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="text-black-600 flex-none  text-sm font-bold leading-6">
            Đây là những gì chúng tôi cung cấp:
          </h4>
          <div className="h-px flex-auto bg-gray-400"></div>
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Đào tạo lý thuyết
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Đào tạo thực hành
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Trường học rộng rãi, thoáng mát
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Khả năng đậu sát hạch cao
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-400 ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-md px-1">
            <p className="text-2xl font-black text-gray-600 ">Phí dự thi!</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                100.000 - 630.000
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                VND
              </span>
            </p>
            {/* <span className="text-red-600">
              Giá ưu đãi (10 người đầu tiên)
            </span>
            <br />
            <del>2.600.000 VND</del> */}
            <div className="flex">
              <Link
                href="apply"
                className="mr-2 mt-5 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng ký
              </Link>
              {/* <Link
                href="contact"
                className="hover:opacity-80focus-visible:outline ml-2 mt-5 block w-full rounded-md bg-indigo-500 px-3 py-2 text-center text-base font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đặt câu hỏi
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
