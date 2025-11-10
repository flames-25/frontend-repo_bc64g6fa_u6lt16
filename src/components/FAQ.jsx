export default function FAQ() {
  const faqs = [
    {
      q: 'Is this legal and ethical?',
      a: 'We learn stylistic patterns, not content. Outputs are original and never copy text verbatim.',
    },
    {
      q: 'Will my content be unique?',
      a: 'Yes. We generate fresh drafts that reflect the persona without duplication.',
    },
    { q: 'What platforms do you support?', a: 'LinkedIn and X for now; more soon.' },
    {
      q: 'Can I bring my own data?',
      a: 'Upload your top-performing posts to fine-tune your personal voice.',
    },
  ]

  return (
    <section id="faq" className="bg-black text-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Common questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group">
              <summary className="cursor-pointer list-none p-6 flex items-start justify-between">
                <span className="text-base font-medium text-white/90">{q}</span>
                <span className="ml-6 text-zinc-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm text-zinc-300">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
