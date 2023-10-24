import { FaAward, FaBuilding, FaCar, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaCar className="h-20 w-20 " />,
    title: 'Những chiếc xe mới và sạch sẽ',
    description:
      'Bạn sẽ dành ít nhất 30 giờ trong xe của chúng tôi. Ngoài một người hướng dẫn giỏi, bạn có thể sử dụng một nội thất đẹp và sạch sẽ, phải không? Chúng tôi không muốn bất cứ điều gì làm bạn mất tập trung, đó là lý do tại sao những chiếc xe của chúng tôi trông như mới.',
  },
  {
    icon: <FaHandshake className="h-20 w-20 " />,
    title: 'Lái xe trong khu vực thi',
    description:
      'Trong khóa học, chúng tôi sẽ chỉ cho bạn các tuyến đường thi phổ biến nhất và dạy bạn cách điều hướng chúng một cách chính xác. Bạn sẽ quen với những nơi khó khăn và bạn sẽ bớt căng thẳng hơn. Nhờ đó, bạn sẽ coi kỳ thi chỉ là một giờ lái xe nữa tại trung tâm đào tạo bằng lái xe.',
  },
  {
    icon: <FaBuilding className="h-20 w-20 " />,
    title: 'Người hướng dẫn không quan tâm đến các vấn đề riêng tư',
    description:
      'Chúng tôi chỉ đi xe ở nơi bạn cần, tức là một tuyến đường cho phép bạn có được các kỹ năng cần thiết một cách nhanh chóng và hiệu quả. An L không phải là taxi. Thời gian lái xe là thời gian chúng tôi dành cho việc đi xe với bạn.',
  },
  {
    icon: <FaAward className="h-20 w-20 " />,
    title: 'Chúng tôi có những người hướng dẫn tốt nhất!',
    description:
      'Tại sao chúng ta có thể nghĩ như vậy? Chúng tôi có một số lượng ấn tượng của sinh viên lần đầu tiên và hàng trăm phản hồi tích cực. Chúng tôi cũng rất vui vì những người hướng dẫn của chúng tôi không chỉ là những chuyên gia giao thông xuất sắc, mà chỉ đơn giản là những người tuyệt vời.',
  },
];
export const Impression = () => {
  return (
    <section id="impression" className="container mx-auto px-4 py-16">
      <h1 className="z-9 relative p-10 text-center  text-3xl font-extrabold  xl:text-4xl">
        Điều gì tạo nên sự khác biệt của chúng tôi?
      </h1>
      <p className="mb-10 text-center text-xl">
      Chọn trường dạy lái xe phù hợp là một quyết định quan trọng! 
      Tìm hiểu về những lợi thế của chúng tôi, nhờ đó bạn sẽ có được 
      những thói quen đúng đắn nhanh hơn và tự tin hơn trong kỳ thi.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="rounded bg-white p-6 shadow">
            <div className="t rounded-ful mb-5 flex items-center justify-center text-red-500">
              {feature.icon}
            </div>
            <h3 className="mb-2 h-14 text-center text-xl font-bold sm:h-20">
              {feature.title}
            </h3>
            <p className="text-center text-base text-stone-600 ">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
