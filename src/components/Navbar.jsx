import { Home, Rocket, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold tracking-tight">Vibe Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#home" className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"><Home className="h-4 w-4" /> Home</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-gray-900 transition-colors inline-flex items-center gap-1"><User className="h-4 w-4" /> About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
