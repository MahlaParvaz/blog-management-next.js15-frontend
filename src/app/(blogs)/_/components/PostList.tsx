import Image from 'next/image';
import React from 'react';

async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-4 border border-secondary-150 p-2 rounded-lg "
          key={post._id}
        >
          <div className="relative aspect-video overflow-hidden mb-6">
            <Image
              alt=""
              src={post.coverImageUrl}
              width={400}
              height={400}
              className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
              quality={80}
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>اطلاعاتی موجود نیست</p>
  );
}

export default PostList;
