import { CiFaceSmile } from 'react-icons/ci';
import { StepCard } from './ui/StepCard';

const steps = [
  {
    icon: 1,
    title: 'Khám sức khỏe',
    description:
      'Bước đầu tiên trên con đường lấy bằng lái xe là trải qua kiểm tra y tế. Bạn có thể làm bài kiểm tra tại trung tâm đào tạo bằng lái xe. Chi phí của bài kiểm tra là 200.000 VND. Bạn có thể đặt chỗ trên trang web của chúng tôi bằng cách nhấp vào nút đăng ký trực tuyến.',
  },
  {
    icon: 2,
    title: 'Đơn xin cấp bằng lái xe và số PKK',
    description:
      'Với các bài kiểm tra, bạn nên đến Sở Giao thông Vận tải ở Cần Thơ và đăng ký số PKK (Hồ sơ sinh viên lái xe). Đơn phải kèm theo một bức ảnh phù hợp với bằng lái xe.',
  },
  {
    icon: 3,
    title: 'Khóa học và kỳ thi của trung tâm đào tạo bằng lái xe',
    description:
      'Đã đến lúc bắt đầu các lớp học lý thuyết và 30 giờ lái xe thực hành (mỗi lớp 60 phút). Các kỳ thi nội bộ về lý thuyết và thực hành là MIỄN PHÍ cho sinh viên của chúng tôi.',
  },
  {
    icon: 4,
    title: 'Thi sát hạch lái xe',
    description:
      'Bạn đăng ký thi lái xe tại Trung tâm Giao thông đường bộ tỉnh (WORD) ở Cần Thơ. Sau 30 giờ lái xe thực tế dưới sự giám sát của những người hướng dẫn giỏi nhất, bạn có thể yên tâm về kết quả :)',
  },
  {
    icon: 5,
    title: 'Nhận bằng lái xe của bạn',
    description:
      'Chúc mừng! Đạt được kết quả dương tính từ kỳ thi thực hành trong WORD bắt đầu giai đoạn chính thức, cuối cùng của thủ tục lấy giấy phép lái xe loại B. WORD gửi thông tin về kết quả thi đến văn phòng nơi chúng tôi nộp đơn xin giấy phép lái xe. Kể từ thời điểm bạn trả phí tại văn phòng, giấy phép lái xe của bạn sẽ sẵn sàng trong vòng 9 ngày làm việc.',
  },
];
export const FiveSteps = () => {
  return (
    <section className=" bg-zinc-800 ">
      <div id="w-5-krokach" className="container mx-auto min-w-[420px] py-16">
        <h1 className="z-9 relative p-10 text-center  text-3xl font-extrabold text-red-600 xl:text-4xl">
          Có được bằng lái xe chỉ trong 5 bước
        </h1>
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
        <h2 className="p-10 pt-32 text-start text-5xl font-bold text-white lg:text-center">
        Chọn một cách khôn ngoan và vượt qua! Chọn một trường dạy lái xe được giới thiệu bởi học sinh của chúng tôi! {' '}
          <span className="relative top-2 inline-block ">
            <CiFaceSmile className="ml-2 text-red-600 " />
          </span>
        </h2>
      </div>
      <div className="relative mt-20">
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <div className="border-l-15 border-r-15 border-b-30 h-0 w-0 border-solid border-red-500 border-transparent bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};
