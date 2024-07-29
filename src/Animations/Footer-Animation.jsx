import React, { useEffect } from 'react';

const FooterAnimation = () => {
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
        src="https://lottie.host/c70ec8c4-819d-4094-b228-821149b0dda2/n5grT5Mq0s.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      />
    );
  };
  
  export default FooterAnimation;
  