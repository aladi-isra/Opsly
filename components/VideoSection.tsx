import { PlayIcon } from '@heroicons/react/24/solid'

export default function VideoSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See Opsly in Action
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Watch how Opsly transforms customer interactions and boosts business productivity 
            with natural, intelligent conversations.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Video container with aspect ratio */}
            <div className="aspect-video bg-brandLight rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Opsly AI Demo Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Play button overlay (optional - can be removed if iframe autoplay is preferred) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                <PlayIcon className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/50 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400/30 rounded-full blur-lg"></div>
          </div>

          {/* Video stats or highlights */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.8%</div>
              <div className="text-sm text-gray-400 mt-1">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">&lt;2s</div>
              <div className="text-sm text-gray-400 mt-1">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 