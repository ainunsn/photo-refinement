const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Basic enhancement',
  },
  {
    name: 'Pro',
    price: '$19',
    desc: 'Best for creators',
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$49',
    desc: 'For businesses',
  },
]

export default function Pricing() {
  return (
    <section id='pricing' className='py-24'>
      <div className='mx-auto max-w-6xl px-6 text-center'>

        <h2 className='text-4xl font-bold'>
          Simple Pricing
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glow-card p-8 ${p.highlight
                ? 'ring-2 ring-pink-400 scale-105'
                : ''
                }`}
            >
              <h3 className='text-xl font-semibold'>
                {p.name}
              </h3>

              <p className='mt-2 text-3xl font-bold bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
                {p.price}
              </p>

              <p className='mt-2 text-gray-600'>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}