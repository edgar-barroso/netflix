import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useEffect, useRef, useState } from "react";

interface StyledInputProps{
    type?:HTMLInputTypeAttribute;
    inputValid:boolean;
    id:string;
    value:string;
    placeHolder:string;
    handleChangeValue:(e: ChangeEvent<HTMLInputElement>) => void
}
export function StyledInput({type,handleChangeValue,placeHolder,inputValid,id,value}:StyledInputProps){
    return(
        <div
      className={`flex flex-col p-4 bg-zinc-600 rounded font-medium bg-opacity-65 ${
        !inputValid && "outline-none outline-red-600"
      }`}
    > <div className={`${
      value && "translate-y-2"
    }`}>

      <label
        htmlFor={id}
        className={`text-[#8C8C8C] absolute transition-all duration-300 transform ${
          value ? "-translate-y-4 text-xs" : "translate-y-0"
        }`}
        >
        {placeHolder}
      </label>
      <input
        onChange={handleChangeValue}
        value={value}
        required
        autoComplete="off"
        className="outline-none bg-transparent w-full autofill:text-gray-600" 
        type={type}
        id={id}
        />
        </div>
    </div>
    )
}