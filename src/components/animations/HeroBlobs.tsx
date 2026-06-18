"use client";

export default function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Blob A — magenta, top-left area */}
      <div
        className="blob-animate absolute -top-32 -left-32 w-[600px] h-[600px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #F7087F 0%, transparent 70%)",
          animation: "blobFloat1 22s ease-in-out infinite",
          willChange: "transform",
          borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
        }}
      />

      {/* Blob B — orange, bottom-right area */}
      <div
        className="blob-animate absolute -bottom-40 -right-20 w-[500px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at center, #FF6B2B 0%, transparent 70%)",
          animation: "blobFloat2 28s ease-in-out infinite 4s",
          willChange: "transform",
          borderRadius: "45% 55% 40% 60% / 60% 40% 55% 45%",
        }}
      />

      {/* Blob C — soft pink, center-right */}
      <div
        className="blob-animate absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, #FFB3D1 0%, transparent 65%)",
          animation: "blobFloat3 18s ease-in-out infinite 8s",
          willChange: "transform",
          borderRadius: "55% 45% 45% 55% / 50% 55% 45% 50%",
        }}
      />
    </div>
  );
}
