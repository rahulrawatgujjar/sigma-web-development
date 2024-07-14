import { NextAuthOptions, User } from "next-auth";
import GithubProvider from "next-auth/providers/github"; "next-auth/providers/github";
import UserModel from "@/models/User";
import dbConnect from "@/lib/dbConnect";


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      console.log("printing user\n", user)

      await dbConnect();

      const userInDatabase = await UserModel.findOne({ email: user.email });
      if (!userInDatabase) {
        const newUser = new UserModel({
          email: user.email,
          username: user.email?.split("@")[0],
          name: user.name
        });
        await newUser.save();
      }
      return true
    },
    async session({ session }) {
      // console.log("printing session 1", session);

      await dbConnect();

      const userInDatabase = await UserModel.findOne({ email: session.user.email });

      session.user.username = userInDatabase?.username;

      // console.log("printing session 2", session);

      return session
    }
  }
}