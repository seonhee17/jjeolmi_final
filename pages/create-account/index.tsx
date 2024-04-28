"use client";

import { useForm } from "react-hook-form";
import Avartar from "../components/Avatar"

type JoinForm = {
    userId : string,
    userPw1 : string, 
    userPw2 : string, 
    userName : string, 
    userPhone : string, 
    userEmail : string, 
}

export default function Create(){
    const { register,handleSubmit,getValues, formState: { errors } } = useForm<JoinForm>();
    const onSubmit = ()=>{};
 
    async function doubleCheck(){

       const userId =  document.getElementById('userId');    
        (await fetch("")).json()
    }

    return (
       
        <div className="m-auto mt-40 flex flex-col justify-center items-center max-w-[20rem]">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-center">
                    {/* 프로필이미지 */}
                    <Avartar />
                </div>
                <h1 className="mt-5 text-center ">저희와 함께 새로운 소식을 공유해요.</h1>
                {/*  ID  */}
                <div className="w-full mt-5 divide-y-2">
                    <div className="relative">
                        <input {...register("userId",{
                                                 required : '아이디를 입력해주세요.'
                                               })} id="userId" name="userId" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700
                                                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                    placeholder="아이디 입력 (6~20자)"/>
                        <button onClick={doubleCheck} 
                                className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400
                                                hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600
                                                dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex 
                                                items-center justify-center bg-white border-gray-200 border">
                            중복확인
                        </button>
                    </div>
                </div>
                {/* PW */}
                <div className="w-full  mt-5">
                    <input {...register("userPw1")} id="userPw1" name="userPw1" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                    text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                    focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700
                                                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                        placeholder="비밀번호 (6~20자)"/>
                </div>
                {/* PW 확인 */}
                <div className="w-full  mt-5">
                    <input {...register("userPw2",{required : "비밀번호 확인을 입력해주세요."
                                                 ,validate : value => value === getValues('userPw1') ? "" : "비밀번호를 확인해주세요."}
                                                 )} id="userPw2" name="userPw2" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                    text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                    focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700
                                                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                        placeholder="비밀번호 확인(6~20자)"/>
                </div>
                <p className="text-red-500">{errors.userPw2?.message}</p>
                
                {/* 이름 */}
                <div className="w-full mt-5">
                    
                    <input {...register("userName",{required : "이름을 입력해주세요."})} id="userName" name="userName" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                    text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                    focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700
                                                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                        placeholder="이름을 입력해주세요."/>
                </div>

                {/* 휴대폰 */}
                <div className="w-full mt-5 relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <input {...register("userPhone",{required : "휴대폰을 입력해주세요."})} id="userPhone" name="userPhone" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                    text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                    focus:border-blue-500 block w-full px-2.5 py-4 ps-10 dark:bg-gray-700
                                                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                        placeholder="000-0000-0000"/>
                </div>
                {/* email */}
                <div className="w-full  mt-5 relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input {...register("userEmail",{required : "이메일을 입력해주세요."})} id="userEmail" name="userEmail" type="text" className="col-span-6 bg-gray-50 border border-gray-300
                                                                    text-gray-500 text-sm rounded-lg focus:ring-blue-500
                                                                    focus:border-blue-500 block w-full px-2.5 py-4 ps-10 dark:bg-gray-700
                                                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
                                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                                        placeholder="example@example.com"/>
                </div>
                <button className="mt-5 bg-green-500 text-white font-bold w-full p-3 rounded-xl" type="submit">Join</button>
            </form>
        </div>
    );

}