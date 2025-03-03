import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/ui/Header';
import CategoryList from './(blogs)/_/components/CategoryList';
import vazirFont from '@/constants/localFont';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'مدیریت بلاگ',
  description: 'اپلیکیشن مدیریت بلاگ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark-mode">
      <body className={`min-h-screen  ${vazirFont.variable} font-sans `}>
        <Header />
        {/* <div className="container xl:max-w-screen-xl">{children}</div> */}

        <div className="container xl:max-w-screen-xl ">
          <h1 className="text-secondary-500 mb-4">لیست بلاگ ها</h1>
          <div className="container grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 xl:col-span-2 text-secondary-500 space-y-4 ">
              <Suspense fallback={<Spinner />}>
                <CategoryList />
              </Suspense>
            </div>
            <div className=" col-span-12 lg:col-span-4 xl:col-span-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
