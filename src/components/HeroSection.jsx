import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <Star className="h-3.5 w-3.5" />
            AI-powered dev workspace
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Ship beautiful products ridiculously fast
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Design, code, and deploy in one seamless flow. Built for speed, precision, and delight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Get Started
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Live Demo
            </button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">2k+</span> teams onboarded
            </div>
            <div>
              <span className="font-semibold text-gray-900">4.9/5</span> average rating
            </div>
          </div>
        </div>
        <div className="relative h-[340px] sm:h-[420px] md:h-[520px] rounded-xl border border-gray-200 bg-white shadow">
          <Spline scene="https://prod.spline.design/6nT7I4nU06kq6aQQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 via-white/0 to-white/30" />
        </div>
      </div>
    </section>
  );
}
