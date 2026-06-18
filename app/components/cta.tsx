import Link from 'next/link'

export default function CTA() {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-pink-500 to-violet-500 p-12 text-center text-white shadow-xl'>

        <h2 className='text-3xl font-bold'>
          Ready to enhance your photos?
        </h2>

        <p className='mt-3 text-white/80'>
          Join thousands of creators using AI refinement.
        </p>

        <Link
          href='/login'
          className='mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black'
        >
          Get Started
        </Link>

      </div>
    </section>
  )
}