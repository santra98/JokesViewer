import { useState } from "react";

const CATEGORY_EMOJI = {
  explicit: "🔞",
  nerdy: "🤓",
  political: "🗳️",
  racist: "🚫",
  religious: "🙏",
  sexist: "🚫",
  dirty: "🫣",
  dark: "🖤",
  pun: "🎭",
  christmas: "🎄",
  animal: "🐾",
  sport: "⚽",
};

function getCategoryEmoji(cat) {
  return CATEGORY_EMOJI[(cat || "").toLowerCase()] || "😄";
}

// Left-stripe colours — alternate mint / tangerine
const STRIPES = [
  "#38BDF8",
  "#FACC15",
  "#38BDF8",
  "#FACC15",
  "#38BDF8",
  "#FACC15",
];

export default function JokeCard({ joke, index = 0 }) {
  const [copied, setCopied] = useState(false);
  const delay = Math.min(index, 11) * 55;
  const stripe = STRIPES[index % STRIPES.length];

  const handleCopy = () => {
    navigator.clipboard?.writeText(joke.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="opacity-0 animate-fade-up flex rounded-2xl overflow-hidden border-2
                 transition-all duration-250 group"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        backgroundColor: "#FFFFFF",
        borderColor: "#bae0fd",
        boxShadow: "0 2px 12px rgba(56,189,248,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(56,189,248,0.18)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = stripe;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(56,189,248,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#bae0fd";
      }}
    >
      {/* Left colour stripe */}
      <div
        className="w-1.5 flex-shrink-0"
        style={{ backgroundColor: stripe }}
      />

      {/* Card body */}
      <div className="flex-1 p-5">
        {/* Top row: id + categories */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="text-xs font-black px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: "#EFF8FF", color: "#38BDF8" }}
          >
            #{joke.id}
          </span>

          <div className="flex flex-wrap gap-1.5 justify-end">
            {joke.categories && joke.categories.length > 0 ? (
              joke.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize"
                  style={{ backgroundColor: "#fefce8", color: "#FACC15" }}
                >
                  {getCategoryEmoji(cat)} {cat}
                </span>
              ))
            ) : (
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: "#EFF8FF", color: "#38BDF8" }}
              >
                😄 General
              </span>
            )}
          </div>
        </div>

        {/* Joke content */}
        <p
          className="text-sm leading-relaxed font-medium mb-4"
          style={{ color: "#172033", lineHeight: "1.75" }}
        >
          {joke.content}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "#dbeeff" }}
        >
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg
                       transition-all duration-150 hover:scale-105 border"
            style={{
              backgroundColor: copied ? "#38BDF8" : "#EFF8FF",
              borderColor: copied ? "#38BDF8" : "#bae0fd",
              color: copied ? "#fff" : "#172033",
            }}
          >
            {copied ? (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
