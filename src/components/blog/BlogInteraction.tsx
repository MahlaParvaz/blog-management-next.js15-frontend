'use client';

import {
  ChatBubbleOvalLeftEllipsisIcon,
  BookmarkIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from '@heroicons/react/24/solid';
import ButtonIcon from '../ui/ButtonIcon';
import { toPersianDigits } from '@/utils/numberFormatter';
import { IPost } from '@/types/blogListTypes';

const BlogInteraction = ({
  isLiked,
  isBookmarked,
  likesCount,
  commentsCount,
}: IPost) => {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        {isLiked ? <SolidHearIcon /> : <HeartIcon />}
        <span>{toPersianDigits(likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary">
        {isBookmarked ? <SolideBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
};

export default BlogInteraction;
