// import { channel } from "diagnostics_channel";
import { ReactNode } from "react";
interface Props{
  children: string;
  color?:'Primary ' | 'secondary' | 'danger';
  onClick: () => void
}
const Button = ( {children, onClick, color}: Props ) => {
  return (
   <button  className={'btn  btn-' + color} onClick={onClick} >{children}</button> 
  )
}

export default  Button;