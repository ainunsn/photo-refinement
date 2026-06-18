import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'
import UploadSection from '../components/dashboard/upload-section'

export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className='mx-auto max-w-7xl px-20 py-10'>
      <div>
        <h1 className='text-4xl font-bold'>
          Welcome, {session.user?.name}
        </h1>

        <p className='mt-2 text-muted-foreground'>
          Upload a photo and let AI enhance it.
        </p>
      </div>

      <UploadSection />
    </main>
  )
}