import "next-auth"


declare module "next-auth" {
  interface User {
    username: string;
    email: string;
    name?: string;
    profilePic?: string;
    coverPic?: string;
    razorpayId?: string;
    razorpaySecret?: string;
  }

  interface Session {
    user: {
      username: string;
      email: string;
      name?: string;
      profilePic?: string;
      coverPic?: string;
      razorpayId?: string;
      razorpaySecret?: string;
    } & DefaultSession["user"]
  }
}
