import { ClipboardPaste, Fingerprint, Shuffle, Send } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Paste a post',
      desc: 'Drop a link or text from LinkedIn or X. We parse structure, tone, and rhythm.',
      icon: ClipboardPaste,
    },
    {
      title: 'Pick persona signals',
      desc: 'Choose traits like casual, analytical, contrarian, coach, storyteller, and more.',
      icon: Fingerprint,
    },
    {
      title: 'Generate & iterate',
      desc: 'Get 3+ drafts with hook variants and rephrase on-click until it clicks.',
      icon: Shuffle,
    },
    {
      title: 'Publish everywhere',
      desc: 'One click to export with perfect spacing for LinkedIn or X.',
      icon: Send,
    },
  ]

  return (
    <section id="how" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From idea to viral post in minutes</h2>
            <p className="mt-4 text-zinc-400">Our persona-matching engine studies syntax, cadence, and framing — then re-creates it without copying. You stay original; your delivery gets elite.</p>

            <div className="mt-8 space-y-5">
              {steps.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="text-yellow-300" size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-sm text-zinc-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-zinc-300">Quick try</div>
            <textarea placeholder="Paste a LinkedIn or X post here..." className="mt-3 w-full h-40 rounded-md bg-black/60 border border-white/10 p-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" />
            <button className="mt-3 inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100">Generate style-matched draft</button>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-black/60 p-4 text-sm text-zinc-300">
                  <div className="text-xs text-zinc-500 mb-2">Draft {i + 1}</div>
                  “Turn threads into frameworks. Frameworks into growth. Your audience doesn’t want more noise — they want clarity.”
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
