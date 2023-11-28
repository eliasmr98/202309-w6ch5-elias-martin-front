import { ImgData } from '../types/img.data';
import { User } from './user';

export type Film = {
  id: string;
  name: string;
  producer: string;
  era: string;
  year: string;
  filmFrontImg: ImgData;
  filmBackImg: ImgData;
  director: string;
  author: User;
};
