import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/ui/Header';
import vazirFont from '@/constants/localFont';

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
        <div className="container xl:max-w-screen-xl ">{children}</div>
      </body>
    </html>
  );
}
