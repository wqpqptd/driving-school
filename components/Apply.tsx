import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { ApplyForm } from './ui/apply/ApplyForm';

export const Apply = () => {
  return (
    <section className=" flex h-auto w-full items-center justify-center p-10 py-16">
      <div>
        <h2 className="mb-8 text-center text-4xl font-bold  lg:text-5xl">
          Đăng ký sát hạch lái xe ngay hôm nay!
        </h2>
        <p className="mb-2 text-center text-xl lg:mb-8">Bắt đầu hành trình học lái xe của bạn ngay hôm nay bằng cách đặt chỗ. Đội ngũ giáo viên chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ bạn. Điền thông tin vào biểu mẫu dưới đây và chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất.</p>
        <div className="items-center justify-between lg:flex ">
          <div className="mb-1 flex w-full flex-col p-5 lg:mb-8 lg:w-1/2 lg:p-10 ">
            <div className="mb-3 font-bold">Retro Driving School</div>
            <div className="mb-3 flex items-center">
              <FiPhone className="mr-2 text-2xl text-red-600" />
              <span>+84 359 350 38</span>
            </div>
            <div className="mb-3 flex items-center">
              <FiMail className="mr-2 text-2xl text-red-600" />
              <span>ttdtblx@gmail.com</span>
            </div>
            <div className="mb-3 flex items-center">
              <TbBuildingSkyscraper className="mr-2 text-2xl text-red-600" />
              <span>
                <span className="font-bold">Địa chỉ: </span>
                ĐHCT, đường 3/2,
                phường Xuân Khánh, quận Ninh Kiều, thành phố Cần Thơ
              </span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-2 text-2xl text-red-600" />
              <span>
                <span className="font-bold">Nơi sát hạch: </span>
                Bãi đậu xe Văn Phòng Đoàn trường ĐHCT
              </span>
            </div>
            <p className="my-5 text-center text-xl lg:my-20">
              Sau khi chúng tôi nhận được đơn đăng ký của bạn, đội ngũ của chúng tôi sẽ gửi thông báo chi tiết về buổi sát hạch. Chúng tôi cam kết cung cấp một dịch vụ chuyên nghiệp và thân thiện, hỗ trợ bạn đạt được mục tiêu quan trọng của mình - sở hữu bằng lái xe như bạn mong đợi.
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl lg:w-1/2 lg:p-10">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Mẫu hồ sơ:
            </h2>
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
};
