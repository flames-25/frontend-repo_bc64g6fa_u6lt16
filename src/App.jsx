import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />

        {/* CTA strip */}
        <section id="cta" className="relative bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(253,230,138,0.12),rgba(0,0,0,0)_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Turn any post into a persona-perfect draft</h2>
                <p className="text-zinc-400 mt-1">No credit card required. Publish only when you love it.</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100 w-full sm:w-auto">View pricing</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 w-full sm:w-auto">Try a quick draft</a>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-yellow-400 via-amber-300 to-emerald-300 ring-1 ring-white/20" />
            <span className="text-zinc-300 text-sm">EchoPersona</span>
          </div>
          <div className="text-xs text-zinc-500">© {new Date().getFullYear()} EchoPersona, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
