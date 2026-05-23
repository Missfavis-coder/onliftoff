export function CurveConnector({
    flip = false,
  }: {
    flip?: boolean;
  }) {
    return (
      <svg
        viewBox="0 0 500 220"
        fill="none"
        className={`h-full w-full ${
          flip ? "scale-x-[-1]" : ""
        }`}
      >
        <path
          d="M20 20 C180 20, 180 200, 480 200"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
  
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="500"
            y2="220"
          >
            <stop stopColor="#C9D8FF" />
            <stop offset="1" stopColor="#F7B8A4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }