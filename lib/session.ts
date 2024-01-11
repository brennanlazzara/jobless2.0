// import { getServerSession } from "next-auth";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
// import jsonwebtoken from "jsonwebtoken";
// import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  //   jwt: {
  //     encode: ({ secret, token }) => {},
  //     decode: ({ secret, token }) => {},
  //   },
  //   theme: {
  //     colorScheme: "light",
  //     logo: "/logo.png",
  //   },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: User | AdapterUser }) {
      try {
        // Your custom logic here, using only the 'user' parameter
        // Example:
        // return user.emailVerified;

        return true; // Or false to deny the sign-in
      } catch (error: any) {
        console.error(error);
        return false;
      }
    },
  },
};
