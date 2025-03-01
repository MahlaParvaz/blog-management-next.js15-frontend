import CoverImage from '@/components/blog/CoverImage';
import Link from 'next/link';
import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import Author from '@/components/blog/Author';
import { IPost } from '@/types/blogListTypes';

async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post: IPost) => (
        <div
          className="col-span-12 sm:col-span-4 border border-secondary-150 p-2 rounded-lg "
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="bg-secondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>

            <div className="flex items-center  justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>اطلاعاتی موجود نیست</p>
  );
}

export default PostList;
