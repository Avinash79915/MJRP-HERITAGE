import React, { useEffect } from 'react';

const StudentAnimation = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <dotlottie-player
        src="https://lottie.host/f11520f2-3ea5-4fae-8d2d-97abfadae8a9/xWXrB8Hf5l.json"
        background="transparent"
        speed="1"
        style={{ width: '600px', height: '600px' }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      />
    );
  };
  
  export default StudentAnimation;
  