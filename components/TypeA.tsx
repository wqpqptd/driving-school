import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { TypeA3Cart } from './categories/a/TypeA3Cart';
import { TypeA4Cart } from './categories/a/TypeA4Cart';
import { TypeA1Cart } from './categories/a/TypeA1Cart';
import { TypeA2Cart } from './categories/a/TypeA2Cart';

export const TypeA = () => {
  const [activeTab, setActiveTab] = useState('A');
  return (
    <div>
      <div className="mx-auto max-w-4xl p-5 lg:text-center">
        <div className="flex items-center justify-center">
          <Image
            width={120}
            height={100}
            className="h-20 w-28"
            src="/logo.png"
            alt="logo"
          />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
          Trung tâm đào tạo bằng lái xe
        </h2>
        <div className="mt-10 bg-white ">
          <h2 className="mb-5 text-2xl font-bold">Thông tin:</h2>
          <p className="mb-8 text-lg text-gray-800">
          Trong trường của chúng tôi, chúng tôi tập trung vào phương pháp giảng dạy hiện đại, đảm bảo chất lượng giáo dục cao. Các lớp học lý thuyết sử dụng các tài liệu giảng dạy mới nhất và phương pháp sáng tạo thúc đẩy việc tiếp thu kiến thức hiệu quả. Hợp tác với Hiệp hội Ô tô và Xe máy Ba Lan, chúng tôi cũng giới thiệu các giải pháp giáo dục hiện đại, cho phép các bài học lái xe toàn diện. Chúng tôi cung cấp cả lớp học và lớp học trực tuyến, vì vậy sinh viên của chúng tôi có cơ hội học tập vào thời gian và địa điểm thuận tiện. Truy cập vào cơ sở dữ liệu các câu hỏi thi và các bài giảng trực tuyến cho phép lên lịch học linh hoạt, được đặc biệt đánh giá cao bởi những người có thời gian hạn chế hoặc sống xa trường dạy lái xe. Các lớp học thực hành của chúng tôi diễn ra trên những chiếc xe máy mới nhất từ các thương hiệu nổi tiếng như Yamaha và BMW, đảm bảo thiết bị chất lượng cao và cho phép bạn cải thiện kỹ năng của mình một cách hiệu quả. Chúng tôi sử dụng quảng trường hiện đại hóa (Kartodrom) tại 116 Fordońska Street, nơi cung cấp các điều kiện an toàn để học lái xe máy. Nếu bạn đang tìm kiếm một nơi an toàn và hiệu quả để học lái xe máy, trường chúng tôi là sự lựa chọn hoàn hảo cho bạn.
          </p>
        </div>
        <div className="p5x- flex flex-col items-center justify-start py-10">
          <h2 className="mb-5 text-2xl font-bold">
            {' '}
            Bạn phải bao nhiêu tuổi để xin giấy phép lái xe trong mỗi loại?
          </h2>
          <ul className="space-y-4 text-left">
            
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Loại A1</strong> - bằng lái A1 sẽ được áp dụng cho người từ đủ 18 tuổi và chạy những loại xe có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Loại A2</strong> - Hạng A2 cấp cho người lái xe để điều khiển xe mô tô hai bánh có dung tích xy lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Loại A3</strong> - Hạng A3 cấp cho người lái xe để điều khiển xe mô tô ba bánh, các loại xe quy định cho giấy phép lái xe hạng A1 và các xe tương tự.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
                <strong>Loại A4</strong> - Hạng A4 cấp cho người lái xe để điều khiển các loại máy kéo nhỏ có trọng tải đến 1.000 kg.
              </span>
            </li>
          </ul>
        </div>
        <h3 className=" mb-5 mt-10 text-center text-2xl font-bold tracking-tight text-black sm:text-xl">
          Chọn các danh mục:
        </h3>
        <div className="m-4 flex justify-center space-x-4">
          <div
            onClick={() => setActiveTab('A4')}
            className={`border-b-4 ${
              activeTab === 'A4' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A4
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A1')}
            className={`border-b-4 ${
              activeTab === 'A1' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A1
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A2')}
            className={`border-b-4 ${
              activeTab === 'A2' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A2
            </div>
          </div>
          <div
            onClick={() => setActiveTab('A3')}
            className={`border-b-4 ${
              activeTab === 'A' ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <div className="h-10 w-10 cursor-pointer text-2xl font-black text-gray-600 hover:text-indigo-600 ">
              A3
            </div>
          </div>
        </div>
      </div>
      {activeTab === 'A3' && <TypeA3Cart />}
      {activeTab === 'A4' && <TypeA4Cart />}
      {activeTab === 'A1' && <TypeA1Cart />}
      {activeTab === 'A2' && <TypeA2Cart />}
    </div>
  );
};
