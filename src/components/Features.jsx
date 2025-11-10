import { Sparkles, Target, Share2, Gauge, Quote, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Persona cloning',
    desc: 'Train on any public profile or post thread to mirror tone, pacing, and structure.',
    icon: Sparkles,
  },
  {
    title: 'Engagement heuristics',
    desc: 'Auto-insert scroll-stopping hooks and CTAs that fit the persona style.',
    icon: Target,
  },
  {
    title: 'Multiplatform ready',
    desc: 'Outputs for LinkedIn and X with proper length, line breaks, and hashtags.',
    icon: Share2,
  },
  {
    title: 'Performance insights',
    desc: 'Track what tones and hooks drive comments, saves, and shares.',
    icon: BarChart3,
  },
  {
    title: 'Fast draft → publish',
    desc: 'Go from raw idea to polished post in under a minute with smart prompts.',
    icon: Gauge,
  },
  {
    title: 'Quote rewriter',
    desc: 'Paste a quote or paragraph and get persona-matched versions instantly.',
    icon: Quote,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(255,255,255,0.06),rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for creators and teams</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Swap generic AI voice for persona-perfect words that spark real conversation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <Icon className="text-yellow-300" size={20} />
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
