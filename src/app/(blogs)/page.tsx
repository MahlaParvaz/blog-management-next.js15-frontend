import { Suspense } from 'react';
import BlogList from './_/components/BlogList';
import CategoryList from './_/components/CategoryList';
import { Spinner } from '@/components/ui/Spinner';

export default function Home() {
  return (
    <>
      <h1 className="text-secondary-500 mb-4">لیست بلاگ ها</h1>
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-2 text-secondary-500 space-y-4 ">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className=" col-span-12 lg:col-span-4 xl:col-span-10">
          <BlogList />;
        </div>
      </div>
    </>
  );
}
