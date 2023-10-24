import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};


const center = {
  lat: 10.032281180999437,   
  lng: 105.77096300044904,
};

const GoogleMapComponent : React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} />
        <Marker position={center} />
    </LoadScript>
  );
};

export const Footer: React.FC = () => {
  return (
    <>
      <div className="container mx-auto block  w-full  justify-between bg-zinc-800 text-white lg:flex lg:min-h-[70%] lg:w-[95%]  ">
        <div className="flex w-full flex-col items-center  lg:w-1/2">
          <div className="flex w-full flex-col items-center   justify-center p-2  lg:flex-row lg:items-start  xl:p-20 xl:pb-2    ">
            <Image
              width={200}
              height={200}
              src="/logo1.png"
              alt="logo"
              className="h-32 w-1/3 text-white"
            />
            <div className="w-2/3">
              <h2 className="my-5 text-2xl font-extrabold">
                Retro Driving School
              </h2>
              <h3 className="mb-10 text-xl font-bold">Trung tâm đào tạo bằng lái xe </h3>
              <p className="my-3 text-gray-400">
                Trung tâm đào tạo bằng lái xe được thành lập bởi Di, 
                với mục đích giúp mọi người lái xe an toàn và vui vẻ.
                {' '}
              </p>
              <p className="my-3 text-gray-400">
                <span className="font-bold text-white">E-mail: </span>{' '}
                ttdtblx@gmail.com
                <br />
                <span className="font-bold text-white">Liên hệ: </span>
                0359 350 383
                <br />
                <span className="font-bold text-white">Địa chỉ: </span> ĐHCT, đường 3/2,
                phường Xuân Khánh, quận Ninh Kiều, thành phốs Cần Thơ
                <br />
                <span className="font-bold text-white">Nơi sát hạch: </span> 
                Bãi đậu xe Văn Phòng Đoàn trường ĐHCT 
              </p>
            </div>
          </div>
          <div className="h-[1px] w-3/5 bg-white"></div>
          <h2 className=" text-2xl font-extrabold text-red-500">
            Liên hệ{' '}
          </h2>
          <h2 className="mb-5 text-2xl font-extrabold">0359 350 383 </h2>
        </div>
        <div className=" w-3/2 lg:w-1/2 ">
          <GoogleMapComponent />
        </div>
      </div>
      <div className="mb-0 flex  h-[130px] w-full items-center justify-center bg-stone-900 lg:mb-10 ">
        <h2 className="text-center text-white">
          © 2023 Trung tâm đào tào bằng lái xe
        </h2>
      </div>
    </>
  );
};
