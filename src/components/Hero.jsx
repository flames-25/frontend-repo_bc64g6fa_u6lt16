import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
            New: Persona-matching engine v2.1
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Write like your heroes. Engage like a pro.
          </h1>
          <p className="mt-5 text-zinc-300 text-base sm:text-lg">
            Paste any post from LinkedIn or X and our AI mirrors their style, cadence, and hooks — tuned for engagement while sounding authentically you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
              Try it free
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
              See how it works
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-90">
            {[
              ['10k+', 'personas learned'],
              ['3.2x', 'avg engagement lift'],
              ['<60s', 'from idea to post'],
              ['A/B', 'hook suggestions'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">{k}</div>
                <div className="text-xs text-zinc-400">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
