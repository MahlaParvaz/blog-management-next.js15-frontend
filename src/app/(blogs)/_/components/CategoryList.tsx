import { ICategory } from '@/types/CategoryListType';
import Link from 'next/link';
import React from 'react';

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const { data } = await res.json();
  const categories: ICategory[] = data.categories;
  
  return (
    <ul className="space-y-4">
      <li>
        <Link href="/">همه</Link>
      </li>
      {categories.length > 0 ? (
        categories.map((category) => (
          <li key={category._id}>
            <Link href={`/category/${category.slug}`}>{category.title}</Link>
          </li>
        ))
      ) : (
        <li className="text-gray-500">هیچ دسته‌بندی‌ای یافت نشد</li>
      )}
    </ul>
  );
}

export default CategoryList;
