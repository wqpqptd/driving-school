import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Trung tâm đào tạo bằng lái xe </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Trung tâm đào tạo bằng lái xe - Trường dạy lái xe hàng đầu ở Cần Thơ và khu vực lân cận cung cấp giấy phép lái xe loại B, A, C, D, T, bằng cấp (mã số 95)"
        />
        <meta
          property="og:image"
          content="https://www.strazak.edu.pl/_next/image?url=%2Flogo.png&w=3840&q=75"
        />
        <meta
          name="og:title"
          content="Trung tâm đào tạo bằng lái xe -  Trường dạy lái xe hàng đầu ở Cần Thơ và khu vực lân cận cung cấp giấy phép lái xe loại B, A, C, D, T, bằng cấp (mã số 95))"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
