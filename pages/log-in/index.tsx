import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


type FormValues = {
    userId : string,
    userPw : string
}
  



export default function Login(){
    const router = useRouter();

    const { register,handleSubmit,formState :{errors} } = useForm<FormValues>();

   /*  async function handleSubmit(event:) {
        
    } */    
    
    async function onSubmit(data:FormValues){
        console.log(data);
        const response = await fetch('/api/users/config',{
            method :'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({data})
        });

      /*   const cookieStore  = cookies();
        cookieStore.set('userId',data.userId);    
 */
        if(response.ok) {
           
        }else{
            router.push("/");
        }
    };
    /* /log-in (로그인페이지) */
    return (
            <div className="grid grid-cols-2 divide-x relative w-7/12 divide-solid mt-[20%] mx-auto mb-auto overflow-hidden">
                {/* 로그인 폼 */}
                <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row *:leading-8 justify-start items-end">
                        <label htmlFor="userId" className="w-20 text-xl font-medium leading-6 text-gray-900">ID</label>
                        <div className="relative mt-2 rounded-md shadow-sm w-full">
                            <input {...register("userId",{required : "아이디를 입력하세요."}) } name="userId" type="text" id="userId" 
                                className="block w-full rounded-md border-0 p-1.5
                                    text-gray-900 ring-1 ring-inset ring-gray-300
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>                 
                    <div className="flex flex-row *:leading-8 justify-start items-end mb-5">
                        <label htmlFor="userPw" className="w-20 text-xl font-medium leading-6 text-gray-900">PW</label>
                        <div className="relative mt-2 rounded-md shadow-sm w-full">
                            <input {...register("userPw",{required : "비밀번호를 입력하세요."})} type="password" name="userPw"  id="userPw" 
                                className="block w-full rounded-md border-0 p-1.5
                                    text-gray-900 ring-1 ring-inset ring-gray-300
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-58">
                        <button type="submit" className="flex w-full justify-center rounded-xl
                                                        bg-green-500 px-3 py-3 text-base 
                                                        font-bold leading-6 text-white 
                                                        shadow-sm  focus-visible:outline 
                                                        focus-visible:outline-2 focus-visible:outline-offset-2
                                                        focus-visible:outline-indigo-600">LOGIN</button>
                                                    
                    </div>          
                    </form>    
                </div>
                {/* 로그인 폼 */}    
                {/* 오른쪽 문구 */}
                <div className="p-5">    
                    <div className="w-60 display-inline mb-2">
                        <h1 className="text-2xl">
                            <p className="font-extrabold mb-3">Hot Off The Presses</p>모두들 안녕,<br/>지금 너의 생각을 들려줘
                        </h1>
                        <Link href={"/create-account"}>
                        <h2 className="mt-5 underline">지금 저희 멤버가 아니신가요?</h2>
                        </Link>
                    </div>
                </div>
                {/* 오른쪽 문구 */}    
            </div>    



        )




};