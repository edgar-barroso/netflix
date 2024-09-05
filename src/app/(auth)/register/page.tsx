"use client"
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { Help } from "../../components/Help";
import { StyledInput } from "../../components/StyledInput";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) =>{
    setConfirmPassword(e.target.value)
    if(e.target.value === password){
      setConfirmPasswordValid(true)
    } else{
      setConfirmPasswordValid(false)
    }
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    setEmailValid(isEmailValid);

    const isPasswordValid = password.length >= 4; 
    setPasswordValid(isPasswordValid);

    if(confirmPassword === password){
      setConfirmPasswordValid(true)
    } else{
      setConfirmPasswordValid(false)
    }
    if (isEmailValid && isPasswordValid && confirmPasswordValid) {
      console.log("Formulário válido. Processar login...");
    }    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className=" bg-black bg-opacity-65  mx-6 rounded-md md:min-w-[450px] max-md:w-full">
          <div className="flex flex-col p-6 md:p-10 gap-4">
          <label htmlFor="email" className="text-4xl font-bold font-sans py-2">Registrar</label>
          <StyledInput type="text" id="email" handleChangeValue={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} inputValid={emailValid} value={email} placeHolder="Email"/>
          {!emailValid && <span className="flex items-center gap-1 -mt-3 text-red-600 font-light text-sm"><ImCancelCircle/>Informe um email válido.</span>}
          <StyledInput type="password" id="password" handleChangeValue={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} inputValid={passwordValid} value={password} placeHolder="Senha"/>
          {!passwordValid && <span className="flex items-center gap-1 -mt-3 text-red-600 font-light text-sm"><ImCancelCircle/>A senha deve ter entre 4 e 60 caracteres.</span>}
          <StyledInput type="password" id="confirmPassword" handleChangeValue={handleChangeConfirmPassword} inputValid={confirmPasswordValid} value={confirmPassword} placeHolder="Confirme sua senha"/>
          {!confirmPasswordValid && <span className="flex items-center gap-1 -mt-3 text-red-600 font-light text-sm"><ImCancelCircle/>As senhas devem ser iguais.</span>}
          <button type="submit" className="btn-primary mt-5 p-4">Registrar</button>
          <div className="flex gap-2 sm:gap-0 sm:flex-row flex-col justify-between items-center font-light">
          <Help/>
          </div>
          <span className="text-[#8C8C8C] font-light">Possui uma conta?<Link className="text-white" href={"/login"}>{" "}Conecte-se aqui.</Link></span>
          </div>
        </form>
      </div>
  );
}
