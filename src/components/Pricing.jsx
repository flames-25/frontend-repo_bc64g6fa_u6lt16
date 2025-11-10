export default function Pricing() {
  const tiers = [
    {
      name: 'Creator',
      price: '$0',
      tagline: 'Get started',
      features: ['10 drafts/mo', '2 personas', 'LinkedIn + X output', 'Basic hooks'],
      cta: 'Start free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      tagline: 'Best for most',
      features: ['Unlimited drafts', '10 personas', 'Hook A/B testing', 'Export scheduler'],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Team',
      price: '$49',
      tagline: 'For teams',
      features: ['Seats + workspaces', 'Brand guardrails', 'Performance insights', 'API access'],
      cta: 'Contact sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, fair pricing</h2>
          <p className="mt-3 text-zinc-400">Only pay when you publish. Free to experiment.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-yellow-300/40 bg-white/10' : 'border-white/10 bg-white/5'} p-6`}> 
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm text-zinc-400">{t.tagline}</div>
                  <h3 className="text-xl font-medium">{t.name}</h3>
                </div>
                {t.popular && (
                  <span className="text-xs rounded-full bg-yellow-300/20 text-yellow-300 px-2 py-1">Popular</span>
                )}
              </div>
              <div className="mt-4 text-4xl font-semibold">{t.price}<span className="text-base text-zinc-400">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-zinc-100">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
