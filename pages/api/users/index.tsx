
import { NextApiRequest, NextApiResponse } from "next";
import withSesssionHandler, { ResponseType } from "../../../lib/server/withSessionHandler";
import { getIronSession, sealData } from "iron-session";


interface loginData {
  userId : string;
  userPw : string;
}


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>, data : loginData 
) {
  const session = await getIronSession(req, res, { cookieName: "sunny-session", password: "tq5WGdlFITWC29e7K81n40ki/rS/j4IacDd++JoILeE=" });
  sealData(data.userId, { password : data.userPw, ttl : 123456 })
  
  await session.save();
} 
//openssl rand -base64 32


export default withSesssionHandler("POST",handler);