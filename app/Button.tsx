// import { channel } from "diagnostics_channel";
import { ReactNode } from "react";
interface Props{
  children: string;
  color?:'Primary ' | 'secondary' | 'danger';
  onclick: () => void
}
const button = ( {children, onClick , color ='Primary'}: Props ) => {
  return (
   <button  className={"btn  btn-" + color }  onClick={onClick}>{children}</button> 
  )
}

export default  button