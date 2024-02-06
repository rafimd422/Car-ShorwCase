import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType?: "button" | "submit" | "reset";
  title: string;
  containerStyle: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number; 
}
