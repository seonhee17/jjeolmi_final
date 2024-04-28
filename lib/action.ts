/* "use server";

import { SessionData } from "./session";
import { defaultSession , sessionOptions } from "./session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect  } from "next/navigation";

export async function login(
    formData : FormData
){
    const session = await getIronSession(cookies: CookieStore, sessionOptions: SessionOptions);

}


const formUsername = formData.get("username") as string;
const formPassword = formData.get("password") as string;


  const user = {
    id:1,
    username:formUsername,
    img:"avatar.png"
  } */