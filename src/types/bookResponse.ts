type Category =
  | 'Fiction'
  | 'Science'
  | 'SelfDevelopment'
  | 'Poetry'
  | 'Religious';

export interface IBook {
  _id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBookResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: IBook[];
}
