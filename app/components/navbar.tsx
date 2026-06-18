import Link from 'next/link'
import { auth } from '../auth'
import { LogoutButton } from './logout'

export async function Navbar() {
  const session = await auth()

  return (
    <header className='sticky top-0 z-50 bg-white/60 backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
        <Link
          href='/'
          className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent'
        >
          RefineAI
        </Link>

        <nav className='flex items-center gap-6 text-sm'>


          {session ? (
            <div className='flex items-center gap-4'>
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? 'User'}
                  className='h-8 w-8 rounded-full border'
                />
              )}

              <LogoutButton />
            </div>
          ) : (
            <>

              <Link href='#features'>Features</Link>
              {/* <Link href="#pricing">Pricing</Link> */}
              <Link
                href='/login'
                className='rounded-xl bg-linear-to-r from-pink-500 to-violet-500 px-4 py-2 text-white shadow-md hover:opacity-90'
              >
                Sign in
              </Link>
            </>

          )}
        </nav>
      </div>
    </header>
  )
}