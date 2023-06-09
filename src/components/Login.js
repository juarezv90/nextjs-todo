import { useAuth } from "@/context/AuthContext";
import React, {useState} from "react";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const [isLoggingIn, setIsLoggingIn] = useState(true)

const { login, signUp, currentUser } = useAuth();


async function submitHandler() {
    if (!email || !password) {
        setError('Please enter email and password')
        return
    }

    if(isLoggingIn){
      try {
        await login(email,password);
      } catch (err) {
        setError("User Email or Password incorrect")
      }
      return 
    }

   await signUp(email,password)

}

  return (
    <div className="flex-1 flex flex-col text-sm justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold text-2xl sm:text-4xl select-none">{isLoggingIn ? 'LOGIN' : 'REGISTER'}</h1>
      {error && <div className="w-full max-w-[40ch] text-center border border-rose-400 text-rose-400 py-2">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] border-b-[4px] border-white border-solid focus:border-cyan-600 duration-300 rounded"
        placeholder="Email Address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] border-b-[4px] border-white border-solid focus:border-cyan-600 duration-300 rounded"
        placeholder="Password"
      />
      <button className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 rounded duration-700 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-700 hover:text-slate-900" onClick={submitHandler}>
        <h2 className="z-20 relative">Submit</h2>
      </button>
      <h2 onClick={() => setIsLoggingIn(!isLoggingIn)} className='duration-300 hover:scale-110 cursor-pointer'>{!isLoggingIn ? 'Login' : 'Register'}</h2>
    </div>
  );
};

export default Login;
