export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-900 to-black flex items-center justify-center p-6">

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl 
                      rounded-3xl p-10 w-full max-w-md text-center animate-fadeInUp">

        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-8 tracking-tight">
          TrackME Pro
        </h1>

        <a
          href="https://github.com/RahulHans31/track-me-apk/releases/download/Release/app-release.apk"
          className="block bg-white/90 text-blue-700 font-bold py-3 rounded-2xl 
                     shadow-xl hover:bg-white transition text-xl hover:scale-[1.03] active:scale-[0.98]"
          download
        >
          Download Now
        </a>
      </div>
    </div>
  );
}
