'use client'

import { signIn } from 'next-auth/react'

export default function LoginForm() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100 px-6'>

      {/* Background glow */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute -top-30 left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-black/5 blur-3xl' />
        <div className='absolute -bottom-30 right-1/3 h-75 w-75 rounded-full bg-gray-300/30 blur-3xl' />
      </div>

      {/* Card */}
      <div className='w-full max-w-md rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 shadow-xl'>

        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            Welcome back
          </h1>

          <p className='mt-2 text-sm text-gray-600'>
            Sign in to continue to AI Photo Refinement Tool
          </p>
        </div>

        {/* Google Button */}
        <button
          onClick={() =>
            signIn('google', {
              callbackUrl: '/dashboard',
            })
          }
          className='mt-8 w-full flex items-center justify-center gap-3 rounded-xl bg-linear-to-br from-pink-500 to-violet-500 px-6 py-3 text-white font-medium shadow-lg shadow-black/10 transition hover:translate-y-px hover:shadow-xl active:translate-y-0'
        >
          Continue with Google
        </button>

        {/* Divider */}
        <div className='my-6 flex items-center gap-4'>
          <div className='h-px flex-1 bg-gray-200' />
          <span className='text-xs text-gray-400'>OR</span>
          <div className='h-px flex-1 bg-gray-200' />
        </div>

        {/* Optional secondary actions */}
        <p className='text-center text-sm text-gray-500'>
          By continuing, you agree to our{' '}
          <a href='#' className='text-gray-900 underline'>
            Terms
          </a>{' '}
          and{' '}
          <a href='#' className='text-gray-900 underline'>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}