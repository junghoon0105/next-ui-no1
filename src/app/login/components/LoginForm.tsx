"use client"

import {useEffect} from "react";

function LoginForm(props:any){
  const prop = props

  useEffect(() => {
    console.log("login page")
  }, []);

  return (
    <div>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        로그인 페이지 입니다
      </p>
    </div>
  );
}

export default LoginForm;