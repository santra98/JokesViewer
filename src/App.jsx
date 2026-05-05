import { useState, useEffect } from "react";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";
import SkeletonCard from "./components/SkeletonCard";

const API_URL =
  "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1";

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = () => {
    setError(null);
    setLoading(true);
    setJokes([]);

    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const items = json?.data?.data;
        if (!Array.isArray(items) || !items.length)
          throw new Error("No jokes found");
        setJokes(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Couldn't load jokes. Check your connection.");
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EFF8FF" }}>
      <Header count={jokes.length} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Loading ── */}
        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <SkeletonCard key={i} />
              ))}
          </div>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="text-7xl">😅</div>
            <div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "Syne, sans-serif", color: "#172033" }}
              >
                No jokes today…
              </h3>
              <p className="text-sm" style={{ color: "#5a7a9a" }}>
                {error}
              </p>
            </div>
            <button
              onClick={load}
              className="px-6 py-2.5 text-sm font-bold rounded-full text-white transition-all hover:scale-105"
              style={{
                backgroundColor: "#38BDF8",
                boxShadow: "0 4px 14px rgba(56,189,248,0.35)",
              }}
            >
              Try again
            </button>
          </div>
        )}

        {/* ── Jokes grid ── */}
        {!loading && !error && jokes.length > 0 && (
          <>
            {/* Heading */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Syne, sans-serif", color: "#172033" }}
                >
                  Today's Jokes 😄
                </h2>
                <p className="text-sm mt-0.5" style={{ color: "#5a7a9a" }}>
                  {jokes.length} jokes loaded
                </p>
              </div>
              <div
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{
                  backgroundColor: "#FACC15",
                  boxShadow: "0 4px 14px rgba(250,204,21,0.3)",
                }}
              >
                🎭 Joke Gallery
              </div>
            </div>

            {/* 2-col grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {jokes.map((joke, i) => (
                <JokeCard key={joke.id} joke={joke} index={i} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="text-center py-8 text-sm" style={{ color: "#5a7a9a" }}>
        <p>
          Powered by{" "}
          <span className="font-bold" style={{ color: "#FACC15" }}>
            FreeAPI
          </span>{" "}
          · JokeWorld © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
