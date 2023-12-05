import { TypeCart } from '@/components/ui/TypeCart';
import Image from 'next/image';

export const TypeA4Cart = () => {
  return (
    <section className="cartKat container mx-auto">
      <h1 className="pb-10 pt-6 text-center text-4xl font-bold">
        Bằng A4
      </h1>
      <div className="h-full w-full lg:flex">
        <div className=" flex w-full flex-col lg:w-1/2 ">
          <Image
            width={500}
            height={300}
            className=" mx-auto h-80 w-full rounded-md object-cover  sm:w-3/4"
            src="/a2.png"
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
          Bằng lái xe A4:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5  text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Hạng A4 cấp cho người lái xe để điều khiển các loại máy kéo nhỏ có trọng tải đến 1.000 kg.
                </span>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="container mx-auto  w-full p-0 lg:w-1/2">
          <TypeCart title="Tài xế sở hữu bằng A4 có thể lái những xe sau:" imgSrc="/logo1.png">
            <ul className="mb-4 list-disc pl-5">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Các loại máy kéo nhỏ có trọng tải đến 1.000 kg.

                </span>
              </li>
             
            </ul>
          </TypeCart>

          <TypeCart title="Điều kiện học bằng A4" imgSrc="/badania-lekarskie.jpg">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về độ tuổi: Từ đủ 18 tuổi trở lên (theo điểm b khoản 1 Điều 60 Luật Giao thông đường bộ 2008).
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về điều kiện sức khỏe: Đáp ứng tiêu chuẩn sức khỏe tại Phụ lục 01 ban hành kèm theo Thông tư liên tịch số 24/2015/TTLT-BYT-BGTVT.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về trình độ học vấn: Không có yêu cầu về trình độ.
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Nếu muốn lái được xe máy thì người lái xe phải có bằng A1, A2 hoặc là A3.
              </span>
            </li>
           
          </TypeCart>
        </div>
      </div>
    </section>
  );
};
