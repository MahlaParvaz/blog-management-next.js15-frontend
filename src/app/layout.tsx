import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/ui/Header';
import CategoryList from './(blogs)/_/components/CategoryList';

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
    <html lang="fa" dir="rtl">
      <body className={'min-h-screen font-display'}>
        <Header />
        {/* <div className="container xl:max-w-screen-xl">{children}</div> */}

        <div>
          <h1>لیست بلاگ ها</h1>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-850 space-y-4 ">
              <CategoryList />
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-9">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
