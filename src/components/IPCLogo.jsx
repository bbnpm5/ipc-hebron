const IPCLogo = ({ className = "w-16 h-16" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 150" 
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="redGradHeader" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="greenGradHeader" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#15803d', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Map of India silhouette */}
      <path 
        d="M 95 35 
           L 105 32 L 115 35 L 120 42 L 123 52 L 125 62 L 127 72 
           L 128 82 L 127 92 L 125 100 L 123 108 L 120 115 
           L 115 120 L 110 123 L 105 125 L 100 125 L 95 123 
           L 90 120 L 85 115 L 82 108 L 80 100 L 78 92 
           L 77 82 L 78 72 L 80 62 L 82 52 L 85 42 
           Z" 
        fill="url(#redGradHeader)" 
        stroke="#b91c1c" 
        strokeWidth="2"
      />
      
      {/* Northern region detail (Kashmir area) */}
      <path 
        d="M 100 32 L 108 28 L 112 32 L 108 36 Z" 
        fill="url(#redGradHeader)"
      />
      
      {/* Green stylized elements (open pages/book) below the map */}
      <path 
        d="M 82 108 Q 75 125 68 135 Q 75 130 82 118 Z" 
        fill="url(#greenGradHeader)"
      />
      <path 
        d="M 118 108 Q 125 125 132 135 Q 125 130 118 118 Z" 
        fill="url(#greenGradHeader)"
      />
      
      {/* White flame/teardrop shape in center where green elements meet */}
      <ellipse 
        cx="100" 
        cy="120" 
        rx="5" 
        ry="8" 
        fill="#ffffff" 
        opacity="0.95"
      />
      <path 
        d="M 100 112 Q 97 116 100 120 Q 103 116 100 112 Z" 
        fill="#ffffff" 
        opacity="0.9"
      />
    </svg>
  )
}

export default IPCLogo
