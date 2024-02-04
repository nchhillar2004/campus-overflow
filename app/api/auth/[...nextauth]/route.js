import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/UserSchema";
import connect from "@/db/conn";
import bcrypt from "bcryptjs";

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
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id;
                token.name = user.name;
                token.username = user.username;
                token.email = user.email;
                token.image = user.image;
                token.isVerified = user.isVerified;
                token.stars = user.stars;
                token.banner = user.banner;
                token.posts = user.posts;
                token.plan = user.plan;
                token.questions = user.questions;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token._id;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.image = token.image;
                session.user.isVerified = token.isVerified;
                session.user.stars = token.stars;
                session.user.plan = token.plan;
                session.user.posts = token.posts;
                session.user.banner = token.banner;
                session.user.questions = token.questions;
            }
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
