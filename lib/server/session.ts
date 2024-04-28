

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

async function getIronSessionData() {
  const session = await getIronSession(cookies(), {
    cookieName: "sunny-session",
    password:
      "tq5WGdlFITWC29e7K81n40ki/rS/j4IacDd++JoILeE=",
  });
}

export async function Profile() {
  const session = await getIronSessionData();

  return session;
}