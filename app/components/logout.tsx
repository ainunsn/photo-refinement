'use client'

import { signOut } from 'next-auth/react'

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className='rounded-xl border px-4 py-2 hover:bg-gray-50'
    >
      Sign out
    </button>
  )
}