import { PrismaAdapter } from "@auth/prisma-adapter";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import Google from "next-auth/providers/google";
import prisma from "./connect";
import Google from "next-auth/providers/google";
// import { getServerSession } from "next-auth";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
  })
],
};

// export const getAuthSession = () => getServerSession(authOptions);