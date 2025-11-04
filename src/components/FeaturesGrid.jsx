import { Code2, Layers, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant setup',
    desc: 'Spin up environments in seconds with sensible defaults and zero friction.'
  },
  {
    icon: Code2,
    title: 'Type-safe by default',
    desc: 'Build with confidence using strict typing and auto-generated types.'
  },
  {
    icon: Layers,
    title: 'Modular architecture',
    desc: 'Compose reusable blocks and scale your app without the overhead.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Security, reliability, and performance baked in from day one.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-gray-600">Opinionated defaults, flexible building blocks, and production-ready patterns.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
