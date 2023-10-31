import { HeroSlider, Menu, Photo, Testimonial } from "../types";

export interface IGenericResponse<T> {
  statusCode?: number;
  success?: boolean;

  data: T;
  message?: string;
}
export interface IPotos {
  data: Photo[];
}

export interface IMenu {
  data: Menu[];
}
export interface IHero {
  slideData: HeroSlider[];
}
export interface IMenuBarSmallDevice {
  data: Menu[];
  isOpen: boolean;
  toggleModal: () => void;
}
export interface ISectionHeader {
  title: string;
  subTitle: string;
  className: string;
}

export interface ITestimonial {
  data: Testimonial[];
}
