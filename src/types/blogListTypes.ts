export interface IAuthor {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
}

export interface ICategory {
  _id: string;
  title: string;
  slug: string;
}

export interface IRelatedItem {
  _id: string;
  title: string;
  slug: string;
}

export interface IPost {
  _id: string;
  title: string;
  slug: string;
  category: ICategory;
  type: 'free' | 'paid';
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: string[];
  author: IAuthor;
  related: IRelatedItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coverImageUrl: string;
  id: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: string[];
  commentsCount: number;
}

export interface IAvatarProps {
    src?: string;
    width?: number;
    height?: number;
  }