import { IAvatarProps } from '@/types/blogListTypes';
import Image from 'next/image';

function Avatar({ src, width = 24, height = 24 }: IAvatarProps) {
  return (
    <Image
      src={src || '/images/avatar.png'}
      width={width}
      height={height}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
      alt={src || 'Avatar'}
    />
  );
}

export default Avatar;
