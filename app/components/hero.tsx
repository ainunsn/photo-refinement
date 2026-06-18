import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative overflow-hidden py-28'>

      {/* background glow */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#f472b6,transparent_60%),radial-gradient(circle_at_bottom,#8b5cf6,transparent_60%)] opacity-30' />

      <div className='mx-auto max-w-4xl text-center px-6'>

        <h1 className='text-6xl font-bold leading-tight'>
          AI Photo Refinement
          <span className='block bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
            That Actually Looks Real
          </span>
        </h1>

        <p className='mt-6 text-lg text-gray-600'>
          Enhance, restore, and upscale images using AI — sharp faces,
          clean lighting, zero artifacts.
        </p>

        <div className='mt-10 flex justify-center gap-4'>
          <Link href='/login' className='btn-primary'>
            Start Free
          </Link>

          <a href='#features' className='btn-outline'>
            See Features
          </a>
        </div>

        {/* floating badge */}
        <div className='mt-10 inline-block rounded-full border bg-white/60 px-4 py-2 text-sm shadow-sm'>
          ✨ No Photoshop needed — AI does it all
        </div>

      </div>
    </section>
  )
}