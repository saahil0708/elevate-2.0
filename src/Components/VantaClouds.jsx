"use client";
import { useEffect, useRef } from "react";

const VantaClouds2 = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    threeScript.async = true;

    const vantaScript = document.createElement("script");
    vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds2.min.js";
    vantaScript.async = true;

    let vantaEffect;

    const loadEffect = () => {
      if ((window).VANTA && vantaRef.current) {
        vantaEffect = (window).VANTA.CLOUDS2({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          skyColor: 0x305,
          cloudColor: 0x62e00,
          lightColor: 0x0,
          speed: 0.5,
          texturePath: "/noise.png",
        });
      }
    };

    document.body.appendChild(threeScript);
    document.body.appendChild(vantaScript);

    threeScript.onload = () => {
      vantaScript.onload = loadEffect;
    };

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      document.body.removeChild(threeScript);
      document.body.removeChild(vantaScript);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <div ref={vantaRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default VantaClouds2;