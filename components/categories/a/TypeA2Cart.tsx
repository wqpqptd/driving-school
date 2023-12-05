import { TypeCart } from '@/components/ui/TypeCart';
import Image from 'next/image';

export const TypeA2Cart = () => {
  return (
    <section className="cartKat container mx-auto">
      <h1 className="pb-10 pt-6 text-center text-4xl font-bold">
        Bằng A2
      </h1>
      <div className="h-full w-full lg:flex">
        <div className=" flex w-full flex-col lg:w-1/2 ">
          <Image
            width={500}
            height={300}
            className=" mx-auto h-72 w-full rounded-md object-cover  sm:w-3/4"
            src="/a2.1.png"
            alt="A2"
          />

          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-red-600 sm:ml-20 ">
            {/* <del className="text-black">2.600.000 VND</del> */}
            {'  '} Phí dự thi 60.000 VND - 270.000 VND
            <br />
            {/* (10 người đầu tiên) */}
          </div>
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-black sm:ml-20 ">
          Mức phí sát hạch lái xe ô tô hạng xe A1, A2, A3, A4 gồm:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5 text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Sát hạch lý thuyết: 60.000 đồng/lần. </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Sát hạch thực hành: 70.000 đồng/lần. </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                <a className='hover:bg-gray-200' href="https://vanban.chinhphu.vn/?pageid=27160&docid=208104&classid=1&orggroupid=4">
                (Theo thông tư số 37/2023/TT-BTC có hiệu lực từ ngày 1/8/2023)</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-start text-xl  font-semibold uppercase tracking-wide  text-black sm:ml-20 ">
          Bằng lái xe A2:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5  text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Hạng A2 cấp cho người lái xe để điều khiển xe mô tô hai bánh có dung tích xy lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1.
                </span>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="container mx-auto  w-full p-0 lg:w-1/2">
          <TypeCart title="Tài xế sở hữu bằng A3 có thể lái những xe sau:" imgSrc="/logo1.png">
            <ul className="mb-4 list-disc pl-5">
            Theo khoản 2 Điều 16 Thông tư 12/2017/TT-BGTVT, bằng lái A2 được điều khiển cái loại xe:
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Xe mô tô 02 bánh có dung tích xy lanh từ 50 cm3 - dưới 175 cm3.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Xe mô tô 03 bánh dùng cho người khuyết tật.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Xe mô tô 02 bánh có dung tích xy lanh từ 175 cm3 trở lên.
                </span>
              </li>
            </ul>
          </TypeCart>

          <TypeCart title="Điều kiện học bằng A2:" imgSrc="/badania-lekarskie.jpg">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về độ tuổi: Phải từ đủ 18 tuổi trở lên (theo điểm b khoản 1 Điều 60 Luật Giao thông đường bộ năm 2008).
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về điều kiện sức khỏe: Đáp ứng tiêu chuẩn sức khỏe tại Phụ lục 01 ban hành kèm theo Thông tư liên tịch số 24/2015/TTLT-BYT-BGTVT.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về trình độ học vấn: Không yêu cầu trình độ.
              </span>
            </li>
          </TypeCart>
        </div>
      </div>
    </section>
  );
};
