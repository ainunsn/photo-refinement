import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { prisma } from '@/app/lib/prisma'

export const { handlers, signIn, signOut, auth } =
  NextAuth({
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],

    session: {
      strategy: 'jwt',
    },

    callbacks: {
      async signIn({ user }) {
        if (!user.email) return false

        const existingUser =
          await prisma.user.findUnique({
            where: {
              email: user.email,
            },
          })

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name || '',
              email: user.email,
              password: '', // No password for OAuth users
            }
          })
        }

        return true
      },
      async jwt({ token }) {
        if (!token.email) return token

        const dbUser =
          await prisma.user.findUnique({
            where: {
              email: token.email,
            },
          })

        if (dbUser) {
          token.id = dbUser.id
        }

        return token
      },

      async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id as string
        }

        return session
      },
    },
  })