import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm text-zinc-300 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded bg-gradient-to-br from-yellow-400 via-amber-300 to-emerald-300 shadow ring-1 ring-white/20" />
          <span className="text-white font-semibold tracking-tight">EchoPersona</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className={navLink} href="#features">Features</a>
          <a className={navLink} href="#how">How it works</a>
          <a className={navLink} href="#pricing">Pricing</a>
          <a className={navLink} href="#faq">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-zinc-300 hover:text-white">Log in</a>
          <a href="#cta" className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 transition-colors">Get started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-white/10 text-white">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-4 space-y-3">
            <a className={navLink} href="#features" onClick={() => setOpen(false)}>Features</a>
            <a className={navLink} href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a className={navLink} href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a className={navLink} href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="text-sm text-zinc-300 hover:text-white">Log in</a>
              <a href="#cta" className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 transition-colors">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
