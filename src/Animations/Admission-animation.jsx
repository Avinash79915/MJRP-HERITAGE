import React, { useEffect } from 'react';

const AdmissionAnimation = () => {
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
      src="https://lottie.host/9815097d-826c-4b1e-98c1-c84ed7640f11/xNbZEeYilU.json"
      background="transparent"
      speed="1"
      style={{ width: '450opx', height: '450px' }}
      direction="1"
      playMode="normal"
      loop
      autoplay
    />
  );
};

export default AdmissionAnimation;


const MobileAdmissionAnimation = () => {
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
      src="https://lottie.host/9815097d-826c-4b1e-98c1-c84ed7640f11/xNbZEeYilU.json"
      background="transparent"
      speed="1"
      style={{ width: '500px', height: '500px' }}
      direction="1"
      playMode="normal"
      loop
      autoplay
    />
  );
};
