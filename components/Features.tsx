import { FaCar, FaSmile, FaHeartbeat, FaMoneyCheckAlt } from 'react-icons/fa';

export const Features = () => {
  const features = [
    {
      icon: <FaCar className="h-20 w-20 text-red-600" />,
      title: 'Các mẫu xe mới',
      description:
        'Trong khu sát hạch của chúng tôi bạn chỉ sẽ nhìn thấy các mẫu xe mới và hiện đại.',
    },
    {
      icon: <FaSmile className="h-20 w-20 text-red-600" />,
      title: '99% khách hàng hài lòng',
      description:
        'Chúng tôi sẽ dạy bạn các quy tắc, kỹ thuật lái xe và cách phản ứng với các tình huống. Tất cả dưới sự hướng dẫn của những người hướng dẫn với sự kiên nhẫn của thiên thần.',
    },
    {
      icon: <FaHeartbeat className="h-20 w-20 text-red-600" />,
      title: 'Không căng thẳng',
      description:
        'Tại Trung tâm của chúng tôi, dưới sự giám sát của các giảng viên giàu kinh nghiệm, bạn không phải căng thẳng! Kiên nhẫn và nhẫn nại - đây là những đặc điểm chính của họ. Một cách tiếp cận tích cực cho sinh viên là lĩnh vực của chúng tôi!',
    },
    {
      icon: <FaMoneyCheckAlt className="h-20 w-20 text-red-600" />,
      title: 'Nhiều ưu đãi hấp dẫn ',
      description: 'Nhiều ưu đãi cho học viên khi đăng ký sát hạch tại trung tâm.',
    },
  ];

  return (
    <section className="bg-zinc-800 px-4 py-32 text-white ">
      <div className="-cols-1  container  mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className=" rounded bg-transparent p-6 shadow">
            <div className="r mb-5 flex  items-center  justify-center">
              {feature.icon}
            </div>
            <h3 className="mb-2 h-14 text-center text-xl font-bold sm:h-14">
              {feature.title}
            </h3>
            <p className=" text-center text-base text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
