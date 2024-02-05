import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/UserSchema";
import connect from "@/db/conn";
import bcrypt from "bcryptjs";
export const dynamic = "force-dynamic";
const authOptions = {
    pages: {
        signIn: "/auth/login",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "test",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connect();

                const user = await Users.findOne({
                    username: credentials.username,
                });

                if (user) {
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (!isPasswordCorrect) {
                        throw new Error("Password incorrect");
                    }
                    return user;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") {
                return { ...token, ...session.user }
            }
            return {...token, ...user};
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
