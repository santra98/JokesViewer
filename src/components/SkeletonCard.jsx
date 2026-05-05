export default function SkeletonCard() {
  return (
    <div
      className="flex rounded-2xl overflow-hidden border-2"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#bae0fd" }}
    >
      {/* Left stripe */}
      <div
        className="w-1.5 flex-shrink-0"
        style={{ backgroundColor: "#dbeeff" }}
      />

      <div className="flex-1 p-5">
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="h-6 w-10 rounded-lg"
            style={{
              backgroundColor: "#EFF8FF",
              animation: "pulse 1.5s ease infinite",
            }}
          />
          <div
            className="h-6 w-20 rounded-full"
            style={{
              backgroundColor: "#EFF8FF",
              animation: "pulse 1.5s ease infinite 0.1s",
            }}
          />
        </div>
        {/* Content */}
        <div className="space-y-2 mb-4">
          {["100%", "90%", "80%", "55%"].map((w, i) => (
            <div
              key={i}
              className="h-3.5 rounded-full"
              style={{
                backgroundColor: "#EFF8FF",
                width: w,
                animation: `pulse 1.5s ease infinite ${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "#dbeeff" }}
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg"
                style={{
                  backgroundColor: "#EFF8FF",
                  animation: `pulse 1.5s ease infinite ${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <div
            className="h-8 w-16 rounded-lg"
            style={{
              backgroundColor: "#EFF8FF",
              animation: "pulse 1.5s ease infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
