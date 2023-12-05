import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { ContactForm } from './ui/ContactForm';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from 'axios'
import { URL_SERVER } from '@/constant';


export const Contact = () => {
  const searchParams = useSearchParams()
  const [packageItems, setPackageItem] = useState([])
  const [resultSearchs, setResultSearchs] = useState();

  const [searchIdcard, setSearchIdcard] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios.get(`${URL_SERVER}/detailprofile`)
      .then(response => {
        setPackageItem(response.data);
        console.log(response.data);

      })
      .catch(err => console.log(err))
  }, [])

  const searchByIdcard = () => {
    axios.get(`${URL_SERVER}/profile/idCard/${searchIdcard}`)
      .then(response => {
        setResultSearchs(response.data);
      })
      .catch(err => console.log(err));
  }
  const searchByName = () => {
    axios.get(`${URL_SERVER}/profile/name/${searchName}`)
      .then(response => {
        setResultSearchs(response.data);
      })
      .catch(err => console.log(err));
  }
  return (
    <section className="container mx-auto h-auto w-full lg:p-10 ">
      <div className="rounded-sm border border-stroke px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          {/* <Link href={"/"}>
                        <button className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Thêm hồ sơ</button>
                        <br />
                    </Link> */}
          <div className="mb-4">
            <label className="block text-black mb-2">Tìm kiếm kết quả theo căn cước công dân:</label>
            <input
              type="text"
              value={searchIdcard}
              onChange={(e) => setSearchIdcard(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <button onClick={searchByIdcard} className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Tìm kiếm</button>
          <br />
          <div className="mb-4">
            <label className="block text-black mb-2">Tìm kiếm kết quả theo tên:</label>
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <button onClick={searchByName} className="flex w-auto justify-center rounded bg-primary p-3 font-medium text-gray">Tìm kiếm</button>
          <br />
          {resultSearchs && <table className="w-full table-auto rounded-lg overflow-hidden">
            <thead className='border-2'>
              <tr className="bg-meta-1 text-left dark:bg-meta-4">
                {/* <th className="min-w-[100px] py-4 px-4 font-medium text-black ">
                  Số thứ tự
                </th> */}
                <th className="min-w-[150px] py-4 px-4 font-medium text-black ">
                  Họ và tên
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                  Căn cước công dân
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                  Tỉnh/Thành Phố
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                  Số điện thoại
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                  Điểm thi lý thuyết
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                  Điểm thi thực hành
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                  Kết quả sát hạch
                </th>
              </tr>
            </thead>
            <tbody className='border-2'>
              {resultSearchs?.map((packageItem: any, index: number) => (
                <tr key={packageItem?.id} className="hover:bg-stone-50">
                  {/* <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black ">
                      {index + 1}
                    </h5>
                  </td> */}
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">{packageItem?.name}
                      {/* <Link className="mb-5.5 pt-3 inline-block hover:text-primary" href={`fileDetail/${packageItem?.id}`}>
                        
                      </Link> */}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.idcard}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.province}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.phone}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.resultTheoretical}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.resultPractice}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black ">
                      {packageItem?.result}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
      {/* <h2 className="mb-1 ml-6 mt-10 hidden text-center text-3xl  font-extrabold  lg:block xl:text-4xl">
        Bạn có vấn đề còn thắc mắc?
        <br /> Hãy liên hệ với chúng tôi!
      </h2>
      <div className="lg:flex">
        <div className="24 relative mx-auto flex h-auto   w-full max-w-5xl items-start bg-white p-2  sm:px-10  lg:w-1/2 lg:px-0 2xl:h-[100vh]">
          <div className="pt-20">
            <h1 className="mb-4 ml-6 block text-4xl  font-bold lg:hidden">
              Hãy liên hệ với chúng tôi!
            </h1>
            <p className="mb-8 ml-6 text-left text-xl">
              Hãy liên hệ với chúng tôi và chúng tôi sẽ trả lời tất cả các câu hỏi của bạn.
              Điền thông tin chi tiết vào biểu mẫu sau, chúng tôi sẽ liên hệ lại với bạn trong 
              thời gian sớm nhất có thể để trình bày chi tiết về đợt sát hạch. Chúng tôi mong nhận được phản hồi từ bạn!
            </p>
            <div className="mb-4 ml-6 flex flex-col items-start ">
              <div className="my-3 flex items-center justify-center font-bold">
                Retro Driving School
              </div>

              <div className="my-3 flex items-center justify-center">
                <FiPhone className="mr-2 text-2xl text-red-600" />
                <span>+84 359 350 383 </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <FiMail className="mr-2 text-2xl text-red-600" />
                <span>ttdtblx@gmail.com </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <TbBuildingSkyscraper className="mr-2 text-2xl text-red-600" />
                <span>
                  <span className="font-bold">Địa chỉ: </span>
                  ĐHCT, đường 3/2,
                phường Xuân Khánh, quận Ninh Kiều, thành phốs Cần Thơ
                </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <FiMapPin className="mr-2 text-2xl text-red-600" />
                <span>
                  <span className="font-bold">Nơi sát hạch: </span>
                  Bãi đậu xe Văn Phòng Đoàn trường ĐHCT
                </span>
              </div>
            </div>
          </div>
        </div>


        <div
          id="form"
          className="relative mx-auto  h-auto w-4/5 max-w-5xl bg-white px-4 py-5 sm:px-10 lg:w-1/2 lg:px-24"
        >
          <div className="8  isolate z-30 bg-white py-4 sm:py-2 lg:px-0">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:hidden">
                Liên hệ với nhà cung cấp
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
