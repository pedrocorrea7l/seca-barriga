import { useEffect, useRef } from 'react';

export function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load the script if the smartplayer tag is present and script isn't loaded
    if (containerRef.current && !document.getElementById('vturb-script')) {
      const script = document.createElement('script');
      script.id = 'vturb-script';
      script.src = 'https://scripts.converteai.net/0114863a-f677-4a60-abb5-6137aa3e0321/players/6a367fc8d40a21ed976d0faf/v4/player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full relative rounded-lg overflow-hidden shadow-2xl shadow-purple-900/20">
      {/* @ts-expect-error - Custom element not in intrinsic types */}
      <vturb-smartplayer id="vid-6a367fc8d40a21ed976d0faf" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
    </div>
  );
}
