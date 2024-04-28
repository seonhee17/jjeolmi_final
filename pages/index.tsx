"use client";

import { redirect } from  "next/navigation";

import useSWR, { useSWRConfig } from "swr";
import SideBar  from "./layout/sideBar";
import Item from "./components/Item";



export default function Home() {
  
  /**
   *    Home  (모든 게시물) : login ?  /  (Home) : /log-in (로그인페이지) ;
   *    Login            : 회원 ?  /  (Home) : /create-acount (회원가입페이지)
   *    Create Account   : 가입완료 
   *       
   *    location.href = '/log-in' 
   */


  const fetcher = (url:string) => fetch(url).then((res)=>res.json());
  //const {data , error, isLoading}  = useSWR('https://dogs-api.nomadcoders.workers.dev/',fetcher);
  const  { mutate } = useSWRConfig();

  return (
    

    <div>
      <SideBar />
      <div className="my-6">
        <div className="my-10 mx-auto p-10" >
            {/* <h1 className="text-center font-extrabold text-white">Woof.tv</h1>
            <div className="mt-4" id="area">
              <iframe className="w-full" id="video" src={data?.url} width="100%"></iframe>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <button className="bg-white text-black rounded-3xl p-2" onClick={async ()=>{
                console.log('click new dog.')
                mutate('');
              }}>New Dog!</button>
              <button className="bg-blue-500 text-white rounded-3xl p-2" >{data?.isLiked ? 'Like' : 'unLike' }</button>  
            </div> */}
        </div>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="grid grid-col-3">
        { [1,2,3,4,5].map((index) => (
            <Item key={"dog_"+index}/>
          ))
         
        } 
        </div>
      </div>
  
      {/* 게시물 */}          
      
      {/* 게시물 */}    
    </div>


  );
}
