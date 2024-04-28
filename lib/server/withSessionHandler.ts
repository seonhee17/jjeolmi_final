import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default function withSessionHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse,data:any) => void
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
    data : any
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
        //req.cookies.unsealData()  
      await fn(req, res,data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}