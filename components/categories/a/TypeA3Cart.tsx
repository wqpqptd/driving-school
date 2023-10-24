import { TypeCart } from '@/components/ui/TypeCart';
import Image from 'next/image';

export const TypeA3Cart = () => {
  return (
    <section className="cartKat container mx-auto">
      <h1 className="pb-10 pt-6 text-center text-4xl font-bold">Bằng A</h1>
      <div className="h-full w-full lg:flex">
        <div className=" flex w-full flex-col lg:w-1/2 ">
          <Image
            width={500}
            height={300}
            className=" mx-auto h-72 w-full rounded-md object-cover  sm:w-3/4"
            src="/wavet.png"
            alt="wave Thai"
          />
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-red-600 sm:ml-20 ">
            <del className="text-black">2.600.000 VND</del>
            {'  '} Giá ưu đãi 2.200.000
            <br />
            (10 người đầu tiên)
          </div>
          <div className="mt-10 text-xl font-semibold  uppercase tracking-wide  text-black sm:ml-20 ">
          Khóa học bao gồm:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5 text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Tài liệu đào tạo </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Lý thuyết 30h </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Thực hành 30h</span>{' '}
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Thi lý thuyết và thực hành nội bộ
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Đào tạo các kỹ năng sơ cứu, cấp cứu
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Tư vấn với giảng viên
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Bảo hiểm tai nạn</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">Các chuyến đi bổ sung 1h/80.000 VND</span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Gói đi bổ sung 10h/700.000 VND{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-start text-xl  font-semibold uppercase tracking-wide  text-black sm:ml-20 ">
          Trả góp:
          </div>
          <div className="mt-2 sm:ml-20   ">
            <ul className="mb-4 list-disc pl-5  text-gray-500 ">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Trả góp 0% - trong suốt thời gian của khóa học, phần đầu tiên - PLN 600 trước khi bắt đầu
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                các lớp lý thuyết, phần thứ hai - 600 PLN trước khi bắt đầu lớp học
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                thực hành phần thứ ba - 500 PLN sau 10 giờ học
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                trả góp IV thực hành - 500 PLN sau 20 giờ học thực hành
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto  w-full p-0 lg:w-1/2">
          <TypeCart title="Những gì chúng tôi cung cấp:" imgSrc="/logo1.png">
            <ul className="mb-4 list-disc pl-5">
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                  <span className="font-semibold">Yamaha MT07</span> là một chiếc xe máy có khả năng vận hành cực kỳ năng động, cho phép bạn di chuyển mượt mà và an toàn trên đường. Ngoài ra, đặc điểm thiết kế và xử lý của nó làm cho nó trở thành một chiếc xe máy dễ lái và có thể tùy chỉnh.
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Đường nhựa, khu vực điều động được chiếu sáng, lớn nhất ở Cần Thơ! </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Phương pháp đào tạo hiệu quả được phát triển bởi các giảng viên và nhà sư phạm được xác nhận bởi tỷ lệ vượt qua kỳ thi cao
                </span>
              </li>
              <li className="list-disc font-medium text-red-500  ">
                <span className="text-gray-800">
                Khả năng chọn giờ đào tạo thuận tiện (cưỡi ngựa cũng được tiến hành vào thứ bảy, chủ nhật và buổi tối)
                </span>
              </li>
            </ul>
          </TypeCart>

          <TypeCart title="Khám sức khỏe:" imgSrc="/badania-lekarskie.jpg">
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Giá của khóa học không bao gồm kiểm tra y tế. Có thể thực hiện một thử nghiệm như vậy trong OSK của chúng tôi. Để đặt lịch hẹn khám và đặt lịch hẹn tại trung tâm của chúng tôi, vui lòng liên hệ với văn phòng của chúng tôi qua điện thoại. Chi phí khám sức khỏe cho những người đăng ký
              </span>
            </li>
            <li className="list-disc font-medium text-red-500  ">
              <span className="text-gray-800">
              Lệ phí kiểm tra được bác sĩ chấp nhận dưới dạng tiền mặt hoặc thẻ thanh toán.
              </span>
            </li>
          </TypeCart>
        </div>
      </div>
    </section>
  );
};
