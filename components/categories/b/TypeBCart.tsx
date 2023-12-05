import { TypeCart } from '@/components/ui/TypeCart';
import Image from 'next/image';

export const TypeBCart = () => {
  return (
    <div className="cartKat">
      <h1 className="pb-10 pt-6 text-center text-4xl font-bold">Loại B</h1>
      <div className="h-full w-full lg:flex">
        <div className=" flex w-full flex-col lg:w-1/2 ">
          <Image
            width={500}
            height={300}
            className=" mx-auto h-72 w-full rounded-md object-cover  sm:w-3/4"
            src="/car2.png"
            alt="car-2"
          />
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-red-600 sm:ml-20 ">
            {/* <del className="text-black">2.600.000 VND</del> */}
            {'  '}Phí dự thi 100.000 VND - 630.000 VND
            {/* <br />
            (10 người đầu tiên) */}
          </div>
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-black sm:ml-20 ">
          Mức phí sát hạch lái xe ô tô hạng xe B1, B2 gồm:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5 text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Sát hạch lý thuyết là 100.000 đồng/lần.</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Sát hạch thực hành trong hình là 350.000 đồng/lần.</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Sát hạch thực hành trên đường giao thông là 80.000 đồng/lần.</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  {' '}
                  Sát hạch lái xe ô tô bằng phần mềm mô phỏng các tình huống giao thông là 100.000 đồng/lần.{' '}
                </span>
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
            Giấy phép lái xe ô tô hạng B2:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5  text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Đây được đánh giá là loại bằng lái xe ô tô phổ biến nhất, được rất nhiều tài xế lựa chọn để thi sát hạch.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Người có bằng B2 có thể điều khiển các loại phương tiện giao thông theo quy định tại khoản 7 <a className='hover:bg-gray-200' href="https://vanban.chinhphu.vn/?pageid=27160&docid=189707">Điều 16 Thông tư 12/2017/TT-BGTVT</a> như sau:
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Ô tô chuyên dùng có trọng tải thiết kế dưới 3.500 kg.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Các loại xe quy định cho giấy phép lái xe hạng B1.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto  w-full p-0 lg:w-1/2">
          <TypeCart title="Tài xế sở hữu bằng B2 có thể lái những xe sau:" imgSrc="/logo1.png">
            <ul className="mb-4 list-disc pl-5">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Ô tô chở người đến 09 chỗ ngồi, kể cả chỗ ngồi cho người lái xe.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Ô tô chuyên dùng có trọng tải thiết kế dưới 3,5 tấn.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3,5 tấn.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3,5 tấn.
                </span>
              </li>
            </ul>
          </TypeCart>

          <TypeCart title="Điều kiện học bằng lái xe B2:" imgSrc="/badania-lekarskie.jpg">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về đối tượng: Là công dân Việt Nam, người nước ngoài được phép cư trú hoặc đang làm việc, học tập tại Việt Nam.              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về độ tuổi: Đủ tuổi 18 tuổi (tính đến ngày dự sát hạch lái xe).
              </span>{' '}
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về trình độ văn hóa: Không yêu cầu.
              </span>{' '}
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Về sức khỏe: Không mắc các bệnh thuộc nhóm 3 được quy định tại Phụ lục số 1 ban hành kèm theo <a className='hover:bg-gray-200' href="https://vanban.chinhphu.vn/default.aspx?pageid=27160&docid=181518">Thông tư liên tịch số 24/2015/TTLT-BYT-BGTVT</a>.
              </span>{' '}
            </li>
          </TypeCart>
        </div>
      </div>
    </div>
  );
};
