import { ImgData } from '../types/img.data';
import { Film } from './film';

export type LoginUser = {
  email: string;
  passwd: string;
};

export type User = LoginUser & {
  id: string;
  name: string;
  surname: string;
  age: number;
  films: Film[];
  avatar: ImgData;
  role: 'Admin' | 'User';
};
