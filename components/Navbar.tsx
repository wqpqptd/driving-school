import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import Link from 'next/link';

export const Navbar = () => {
  const {
    isOpen,
    setIsOpen,
    openMobile,
    activePage,
    handleNavigation,
    toggleMenu,
    toggleMenuMobile,
  } = useNavigation();
  return (
    <header className=" relative left-0 right-0 top-0 z-50 border-b border-gray-400 ">
      <nav
        className="container mx-auto flex  h-auto w-full max-w-7xl items-center justify-between  bg-white p-1 shadow-sm backdrop-blur-md lg:px-8"
        aria-label="Global"
      >
        {/* <div className="container mx-auto  "> */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Trung tâm đào tạo bằng lái xe</span>
            <Image
              height={100}
              width={100}
              className="h-28 w-36"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 
              ${activePage.toLowerCase() === 'nasze kursy'
                ? ' border-b-4 border-red-600'
                : ' link-with-border '
              }`}
            aria-expanded="false"
            onClick={toggleMenuMobile}
          >
            MENU
            <span className="sr-only">Mở menu</span>
            <svg
              className="h-5 w-5 flex-none text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className={` font-regular flex items-center  gap-x-1 text-sm font-semibold leading-6 text-gray-900
              ${activePage.toLowerCase() === 'nasze kursy'
                  ? ' border-b-4 border-red-600'
                  : ' link-with-border '
                }`}
              aria-expanded="false"
              onClick={toggleMenu}
            >
              Các khóa học của chúng tôi
              <svg
                className="link-with-border h-5 w-5 flex-none text-gray-400 "
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <Link
                    href="/typeB"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaCar className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/typeB"
                        className="block font-semibold text-gray-900"
                      >
                        Bằng B1, B2<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Ô tô 9 chỗ, ô tô chuyên dùng có trọng tải dưới 3.500kg</p>
                    </div>
                  </Link>
                  <Link
                    href="/typeA"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaMotorcycle className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/typeA"
                        className="block font-semibold text-gray-900"
                      >
                        Bằng hạng A, A1, A2, A4
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">
                        Xe mô tô 2 bánh, 3 bánh, các loại máy kéo nhỏ
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/typeC"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaTruckMoving className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/typeC"
                        className="block font-semibold text-gray-900"
                      >
                        Bằng C<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Ô tô tải, ô tô chuyên dụng</p>
                    </div>
                  </Link>

                  <Link
                    href="/typeD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaBusAlt className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/typeD"
                        className="block font-semibold text-gray-900"
                      >
                        Bằng D<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Ô tô chở người từ 10-30 chỗ</p>
                    </div>
                  </Link>
                  <Link
                    href="/typeD"
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Image
                        width={50}
                        height={50}
                        src="/95.png"
                        alt="95"
                        className="h-8 w-8 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/typeE"
                        className="block font-semibold text-gray-900"
                      >
                        Bằng E<span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-600">Ô tô chở người trên 30 chỗ </p>
                    </div>
                  </Link>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <Link
                    href="/galeria"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                  >
                    <GrGallery />
                    Thư viện ảnh
                  </Link>
                  <button
                    onClick={() => handleNavigation('w-5-krokach', '/')}
                    className="flex  items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                  >
                    Lấy bằng lái xe chỉ với 5 bước
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link
            href={'/about'}
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${activePage.toLowerCase() === 'about'
                ? ' border-b-4 border-red-600'
                : ' link-with-border '
              }`}
          >
            Giới thiệu
          </Link>
          <Link
            href="/contact"
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${activePage.toLowerCase() === 'contact'
                ? ' border-b-4 border-red-600'
                : ' link-with-border '
              }`}
          >
            Tra cứu kết quả
          </Link>

          <Link
            href="galeria"
            className={`ext-gray-900 text-sm  font-semibold leading-6 ${activePage.toLowerCase() === 'galeria'
                ? 'border-b-4 border-red-600'
                : ' link-with-border '
              }`}
          >
            Thư viện ảnh
          </Link>

          {/* <div
            onClick={() => handleNavigation('impression', '/')}
            className={`ext-gray-900 cursor-pointer   text-sm font-semibold leading-6 ${activePage.toLowerCase() === 'section=impression'
                ? 'border-b-4 border-red-600 text-red-600'
                : ' link-with-border '
              }`}
          >
            Điều gì tạo nên sự khác biệt của chúng tôi?
          </div> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/apply"
            className="rounded bg-red-600 px-1  py-2 text-lg font-semibold leading-6 text-white  hover:bg-indigo-500 lg:px-3 lg:py-2 lg:text-base xl:px-8 xl:text-lg"
          >
            Nộp hồ sơ
          </Link>
        </div>
        {/* </div> */}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        {openMobile && (
          <div className="fixed inset-0 z-10">
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div
                className="flex items-center justify-between"
                onClick={toggleMenuMobile}
              >
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Trung tâm đào tạo bằng lái xe</span>
                  <Image
                    width={62}
                    height={62}
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="logo"
                  />
                </Link>
                <button
                  onClick={toggleMenuMobile}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Đóng menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex items-center gap-x-1 pl-2 text-lg font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                        onClick={toggleMenu}
                      >
                        Các khóa học của chúng tôi
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="mt-2 space-y-2" id="disclosure-1">
                          <Link
                            href="/typeB"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            Bằng B1, B2
                          </Link>
                          <Link
                            href="/typeA"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            Bằng A1, A2, A3, A4
                          </Link>
                          <Link
                            href="typeC"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            Bằng C
                          </Link>
                          <Link
                            href="/typeD"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            Bằng D
                          </Link>
                          <Link
                            href="/typeE"
                            onClick={toggleMenuMobile}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                          >
                            Bằng E
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/about"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      href="/contact"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Liên hệ
                    </Link>
                    <Link
                      href="/galeria"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Thư viện ảnh
                    </Link>
                    {/* <div
                      onClick={() => handleNavigation('impression', '/')}
                      className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      Điều gì tạo nên sự khác biệt của chúng tôi?
                    </div> */}
                  </div>

                  <div className="py-6">
                    <Link
                      href="apply"
                      onClick={toggleMenuMobile}
                      className="-mx-3 block rounded-lg bg-red-700 px-3 py-2.5 text-center text-base font-semibold leading-7 text-white  hover:bg-indigo-500"
                    >
                      Nộp hồ sơ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
