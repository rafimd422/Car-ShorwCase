import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    btnType?: "button" | "submit" | "reset"
    title:string;
    containerStyle:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}