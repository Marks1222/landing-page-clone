import { useEffect, useRef } from "react";

export const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load VTurb script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/ce3d8af1-45ad-4090-9f63-153d25ddc1e3/players/69224201929a71f0a17168f3/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Add the custom element
    if (containerRef.current) {
      const player = document.createElement('vturb-smartplayer');
      player.setAttribute('id', 'vid-69224201929a71f0a17168f3');
      player.style.cssText = 'display: block; margin: 0 auto; width: 100%; max-width: 400px;';
      containerRef.current.appendChild(player);
    }

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[400px] mx-auto px-4"
    />
  );
};
