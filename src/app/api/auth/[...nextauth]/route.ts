import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API}/auth`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const user = await res.json();

                if (user.error) throw user;

                return user;
            },
        }),
    ],

    pages: {
        signIn: '/login'
    },

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
