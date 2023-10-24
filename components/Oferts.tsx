import { useState } from 'react';
import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from 'react-icons/fa';
import { Car } from './oferts/Car';
import { MotorCycle } from './oferts/MotorCycle';
import { Track } from './oferts/Track';
import { Bus } from './oferts/Bus';
import Image from 'next/image';

export const Oferts = () => {
  const [activeTab, setActiveTab] = useState('car');
  return (
    <section className="container mx-auto bg-white py-16 ">
      <div className="mx-auto max-w-7xl bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
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
          <p className="text-bold mt-6 text-lg leading-8 text-gray-600">
          Tham gia nhóm những người lái xe hài lòng và bắt đầu cuộc phiêu lưu của bạn với việc lái xe tại trường dạy lái xe hàng đầu ở Cần Thơ. Chúng tôi cung cấp các khóa học toàn diện về ô tô, xe máy, xe tải và xe buýt sẽ giúp bạn lái xe an toàn và tự tin trên bất kỳ loại đường nào. Tận dụng ưu đãi phong phú của chúng tôi và đăng ký ngay hôm nay để tham gia một khóa học sẽ mở ra những cơ hội mới cho bạn và cho phép bạn tự do di chuyển theo cách riêng của mình!
          </p>
          <h3 className=" mb-5 mt-10 text-center text-2xl font-bold tracking-tight text-black sm:text-xl">
            Chọn các danh mục:
          </h3>
          <div className="m-4 flex justify-center space-x-4">
            <div
              onClick={() => setActiveTab('car')}
              className={`border-b-4 ${
                activeTab === 'car' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaCar className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('motorcycle')}
              className={`border-b-4 ${
                activeTab === 'motorcycle'
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <FaMotorcycle className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('truck')}
              className={`border-b-4 ${
                activeTab === 'truck' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaTruckMoving className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('bus')}
              className={`border-b-4 ${
                activeTab === 'bus' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaBusAlt className="h-9 w-9 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
          </div>
        </div>
        {activeTab === 'car' && <Car />}
        {activeTab === 'motorcycle' && <MotorCycle />}
        {activeTab === 'truck' && <Track />}
        {activeTab === 'bus' && <Bus />}
      </div>
    </section>
  );
};
