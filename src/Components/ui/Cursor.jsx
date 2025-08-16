// "use client";
// import React, { useRef, useEffect } from "react";

// const CursorWaterEffect = () => {
//   const canvasRef = useRef(null);
//   const ripples = [];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);

//     const handleMouseMove = (e) => {
//       ripples.push({ x: e.clientX, y: e.clientY, radius: 0 });
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Background gradient (dark base to blend nicely)
//       const gradient = ctx.createRadialGradient(
//         canvas.width / 2,
//         canvas.height / 2,
//         100,
//         canvas.width / 2,
//         canvas.height / 2,
//         canvas.width
//       );
//       gradient.addColorStop(0, "#0a0f0d"); // very dark greenish black
//       gradient.addColorStop(1, "#000000"); // pure black
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Ripple animation in your theme color
//       for (let i = 0; i < ripples.length; i++) {
//         const ripple = ripples[i];
//         ripple.radius += 2;

//         ctx.beginPath();
//         ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(28, 182, 131, ${1 - ripple.radius / 250})`; // #1cb683
//         ctx.lineWidth = 2;
//         ctx.stroke();

//         if (ripple.radius > 250) ripples.splice(i, 1);
//       }

//       requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
//     />
//   );
// };

// export default CursorWaterEffect;


// 2nd CursorEffect
"use client";
import React, { useRef, useEffect } from "react";

const CursorWaterEffect = () => {
  const canvasRef = useRef(null);
  const ripples = [];
  const bubbles = [];
  const floatingElements = [];
  const trails = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let mouseSpeed = 0;
    let lastX = mouseX;
    let lastY = mouseY;

    // Create initial floating elements
    for (let i = 0; i < 15; i++) {
      floatingElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: Math.random() > 0.5 ? 'leaf' : 'particle',
        opacity: Math.random() * 0.6 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseSpeed = Math.sqrt((newX - lastX) ** 2 + (newY - lastY) ** 2);
      lastX = newX;
      lastY = newY;

      mouseX = newX;
      mouseY = newY;

      // Create water disturbance ripples
      if (mouseSpeed > 2) {
        ripples.push({
          x: newX,
          y: newY,
          radius: 0,
          maxRadius: Math.min(100 + mouseSpeed * 1.5, 200),
          opacity: Math.min(mouseSpeed / 60, 0.8),
          speed: Math.max(1.5, mouseSpeed / 15),
          thickness: mouseSpeed > 15 ? 2 : 1
        });

        // Create bubbles for faster movement
        if (mouseSpeed > 10) {
          for (let i = 0; i < Math.floor(mouseSpeed / 15); i++) {
            bubbles.push({
              x: newX + (Math.random() - 0.5) * 30,
              y: newY + (Math.random() - 0.5) * 30,
              size: Math.random() * 8 + 3,
              vy: -(Math.random() * 2 + 1),
              vx: (Math.random() - 0.5) * 1,
              life: 1,
              maxLife: Math.random() * 3 + 2
            });
          }
        }
      }

      // Attract nearby floating elements
      floatingElements.forEach(element => {
        const dx = newX - element.x;
        const dy = newY - element.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          element.vx += (dx / distance) * force * 0.02;
          element.vy += (dy / distance) * force * 0.02;
        }
      });

      // Mouse trail
      trails.push({ x: newX, y: newY, life: 1 });
      if (trails.length > 15) trails.shift();
    };

    const handleMouseLeave = () => {
      trails.length = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Click creates splash effect
    const handleClick = (e) => {
      // Multiple ripple waves
      for (let i = 0; i < 4; i++) {
        ripples.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          radius: i * 15,
          maxRadius: 150 + i * 30,
          opacity: 0.9 - i * 0.15,
          speed: 2.5,
          thickness: 2 - i * 0.3
        });
      }

      // Burst of bubbles
      for (let i = 0; i < 12; i++) {
        bubbles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 12 + 4,
          vy: -(Math.random() * 3 + 2),
          vx: (Math.random() - 0.5) * 3,
          life: 1,
          maxLife: Math.random() * 4 + 3
        });
      }

      // No new floating elements on click - keep only the initial ones
    };

    window.addEventListener("click", handleClick);

    const drawLeaf = (ctx, x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(28, 182, 131, 0.6)`;
      ctx.fill();

      // Leaf vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 2);
      ctx.lineTo(0, size * 2);
      ctx.strokeStyle = `rgba(156, 182, 131, 0.8)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const drawParticle = (ctx, x, y, size, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Diamond/crystal shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.7, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.7, 0);
      ctx.closePath();

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(28, 182, 131, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const draw = () => {
      const time = Date.now() * 0.001;

      // Clear with subtle fade
      ctx.fillStyle = "rgba(10, 15, 13, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clean transparent background - no large circle
      // Just the fade effect for trails

      // Floating elements (like underwater debris/plankton)
      for (let i = floatingElements.length - 1; i >= 0; i--) {
        const element = floatingElements[i];

        element.x += element.vx;
        element.y += element.vy;
        element.rotation += element.rotationSpeed;

        // Gentle floating motion
        element.vx *= 0.98;
        element.vy *= 0.98;
        element.x += Math.sin(time + element.pulsePhase) * 0.2;
        element.y += Math.cos(time * 0.7 + element.pulsePhase) * 0.15;

        // Wrap around screen
        if (element.x < -20) element.x = canvas.width + 20;
        if (element.x > canvas.width + 20) element.x = -20;
        if (element.y < -20) element.y = canvas.height + 20;
        if (element.y > canvas.height + 20) element.y = -20;

        // Pulsing opacity
        const pulseOpacity = element.opacity + Math.sin(time * 2 + element.pulsePhase) * 0.1;

        if (element.type === 'leaf') {
          drawLeaf(ctx, element.x, element.y, element.size, element.rotation);
        } else {
          drawParticle(ctx, element.x, element.y, element.size, element.rotation, pulseOpacity);
        }
      }

      // Water ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += ripple.speed;

        if (ripple.radius > ripple.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, ripple.opacity * (1 - ripple.radius / ripple.maxRadius));

        if (alpha > 0 && ripple.radius > 0) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(28, 182, 131, ${alpha})`;
          ctx.lineWidth = Math.max(0.5, ripple.thickness);
          ctx.stroke();

          // Subtle inner glow
          if (ripple.radius < ripple.maxRadius * 0.3) {
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(28, 182, 131, ${alpha * 0.1})`;
            ctx.fill();
          }
        }
      }

      // Rising bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];

        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.vx *= 0.99;
        bubble.vy *= 0.98;
        bubble.life -= 1 / (bubble.maxLife * 60); // 60 FPS

        if (bubble.life <= 0) {
          bubbles.splice(i, 1);
          continue;
        }

        const size = Math.max(0, bubble.size * bubble.life);
        const alpha = Math.max(0, bubble.life * 0.6);

        if (size > 0 && alpha > 0) {
          // Bubble body
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.1})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bubble highlight
          ctx.beginPath();
          ctx.arc(bubble.x - size * 0.3, bubble.y - size * 0.3, size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
          ctx.fill();
        }
      }

      // Gentle mouse trail
      for (let i = 0; i < trails.length; i++) {
        const trail = trails[i];
        const size = Math.max(0, (trail.life * 6) * (i / trails.length));

        if (size > 0) {
          ctx.beginPath();
          ctx.arc(trail.x, trail.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(28, 182, 131, ${Math.max(0, trail.life * 0.2)})`;
          ctx.fill();
        }

        trail.life *= 0.93;
        if (trail.life < 0.01) {
          trails.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50"> {/* Changed z-index */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'transparent',
          position: 'fixed', // Ensure fixed positioning
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default CursorWaterEffect;