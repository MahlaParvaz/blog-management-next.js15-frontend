export interface ICategory {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IApiResponse {
  data: {
    categories: ICategory[];
  };
}
