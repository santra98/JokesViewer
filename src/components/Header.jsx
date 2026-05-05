export default function Header({ count }) {
  return (
    <header
      className="sticky top-0 z-50 border-b-2"
      style={{
        backgroundColor: "rgba(247,247,247,0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "#38BDF8",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xl font-black border-2"
              style={{
                backgroundColor: "#38BDF8",
                borderColor: "#172033",
                color: "#fff",
              }}
            >
              😂
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{ fontFamily: "Syne, sans-serif", color: "#172033" }}
            >
              JokeWorld
            </span>
          </div>

          {/* Tagline */}
          <p
            className="hidden md:block text-sm font-medium"
            style={{ color: "#5a7a9a" }}
          >
            A joke a day keeps the frowns away 😄
          </p>

          {/* Count badge */}
          {count > 0 && (
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full border-2"
              style={{
                backgroundColor: "#FACC15",
                borderColor: "#172033",
                color: "#fff",
              }}
            >
              {count} jokes
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
