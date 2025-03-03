'use client';
import Button from '@/components/ui/Button';
import useMoveBack from '@/hooks/useMoveBack';
import { homeStr } from '@/string/string';
import Image from 'next/image';
import React from 'react';

function NotFound() {
  const onBack = useMoveBack();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-96 bottom-40">
        <Image
          src={'/images/404.png'}
          alt={'notfound'}
          fill
          quality={80}
          className="object-contain object-center "
        />
        <Button
          onClick={onBack}
          variant={'primary'}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 py-3 px-4 btn btn--primary rounded-xl w-3xs"
        >
          {homeStr.notFound}
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
