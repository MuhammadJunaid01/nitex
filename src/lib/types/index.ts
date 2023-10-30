export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export type Menu = {
  pathName: string;
  url: string;
};
export type HeroSlider = {
  id: number;
  title: string;
  subTitle: string;
  image: string; // Assuming the image paths are strings
};
