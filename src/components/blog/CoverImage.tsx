import { IPost } from '@/types/blogListTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CoverImage({ title, coverImageUrl, slug }: IPost) {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
      <Link href={`/blog/${slug}`}>
        <Image
          alt={title}
          src={coverImageUrl}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={80}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
