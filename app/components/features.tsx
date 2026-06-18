const features = [
  {
    title: 'AI Upscaling',
    desc: 'Increase resolution up to 4x without blur.',
  },
  {
    title: 'Noise Removal',
    desc: 'Remove grain from low-light photos instantly.',
  },
  {
    title: 'Face Enhancement',
    desc: 'Recover natural skin texture and detail.',
  },
  {
    title: 'Instant Processing',
    desc: 'Get results in seconds, not minutes.',
  },
]

export default function Features() {
  return (
    <section id='features' className='py-24'>
      <div className='mx-auto max-w-6xl px-6'>

        <h2 className='text-center text-4xl font-bold'>
          Powerful AI Features
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-4'>
          {features.map((f) => (
            <div key={f.title} className='glow-card p-6'>
              <div className='mb-3 h-2 w-10 rounded-full bg-linear-to-r from-pink-500 to-violet-500' />
              <h3 className='font-semibold'>{f.title}</h3>
              <p className='mt-2 text-sm text-gray-600'>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}