export default function Noise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[150] h-full w-full opacity-[0.03] mix-blend-overlay">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
        ></rect>
      </svg>
    </div>
  );
}
