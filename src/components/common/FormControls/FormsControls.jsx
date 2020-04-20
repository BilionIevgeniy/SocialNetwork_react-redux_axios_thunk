import React from "react";
import css from "./FormsControls.module.css";

const FormControl= ({ input, meta, ...props}) => {

   const hasError = meta.touched && meta.error;
   return (
     <div className={`${css.formControl} ${hasError ? css.error : null}`}>
       {hasError ? <span>{meta.error}</span> : null}
       <div>
         {props.children}
       </div>
     </div>
   );
   
 };


export const Textarea = (props) => {
   const { input, meta, ...restprops } = props
  return (
   <FormControl {...props}>
      <textarea {...restprops} {...input}/>
   </FormControl>
  );
};

export const Input = (props) => {
   const { input, meta, ...restprops } = props
  return (
   <FormControl {...props}>
      <input {...restprops} {...input}/>
   </FormControl>
  );
};
