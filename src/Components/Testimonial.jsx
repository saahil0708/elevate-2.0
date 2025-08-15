import { useState, useEffect, useCallback, useRef } from 'react';

const GlowingCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "SJ",
      text: "This product has completely transformed our workflow. The team productivity increased by 40% within the first month.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager", 
      company: "InnovateLab",
      avatar: "MC",
      text: "Outstanding customer service and incredible attention to detail. I couldn't be happier with the results we've achieved.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "CEO",
      company: "StartupHub", 
      avatar: "ED",
      text: "The best investment we've made for our business. The ROI has exceeded all our expectations by far.",
      rating: 5
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Operations Lead",
      company: "GrowthCo",
      avatar: "DR", 
      text: "Seamless integration and powerful features. This solution has streamlined our entire process beautifully.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Design Director",
      company: "CreativeStudio",
      avatar: "LT",
      text: "Intuitive interface and robust functionality. Our team adopted it immediately without any learning curve.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start with first card
  const [isAnimating, setIsAnimating] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const lastMouseY = useRef(0);
  const scrollAccumulator = useRef(0);
  const animationFrame = useRef(null);
  const totalCards = testimonials.length;

  // Smooth mouse movement handler
  const handleMouseMove = useCallback((e) => {
    const currentMouseY = e.clientY;
    const deltaY = currentMouseY - lastMouseY.current;
    
    // Update mouse position
    setMouseY(currentMouseY);
    
    // Accumulate scroll delta with sensitivity adjustment
    scrollAccumulator.current += deltaY * 0.5;
    
    // Threshold for changing cards (adjust for sensitivity)
    const threshold = 80;
    
    if (Math.abs(scrollAccumulator.current) >= threshold && !isAnimating) {
      const direction = scrollAccumulator.current > 0 ? 1 : -1;
      let newIndex = currentIndex + direction;
      
      // Clamp to boundaries
      newIndex = Math.max(0, Math.min(totalCards - 1, newIndex));
      
      if (newIndex !== currentIndex) {
        setIsAnimating(true);
        setCurrentIndex(newIndex);
        scrollAccumulator.current = 0; // Reset accumulator
        
        // Reset animation state after transition
        setTimeout(() => setIsAnimating(false), 800);
      } else {
        // Reset accumulator if we hit boundary
        scrollAccumulator.current = 0;
      }
    }
    
    lastMouseY.current = currentMouseY;
  }, [currentIndex, isAnimating, totalCards]);

  // Wheel event handler for additional scroll support
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    if (isAnimating) return;
    
    const direction = e.deltaY > 0 ? 1 : -1;
    let newIndex = currentIndex + direction;
    
    // Clamp to boundaries
    newIndex = Math.max(0, Math.min(totalCards - 1, newIndex));
    
    if (newIndex !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [currentIndex, isAnimating, totalCards]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleMouseMove, handleWheel]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#1cb683]' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getCardStyle = (index) => {
    const isActive = index === currentIndex;
    
    // Calculate position based on distance from current active card
    const distance = (index - currentIndex + totalCards) % totalCards;
    let positionIndex;
    
    // Map distance to visual position (0 = far left, 4 = far right)
    if (distance === 0) positionIndex = 2; // center
    else if (distance === 1) positionIndex = 3; // right
    else if (distance === 2) positionIndex = 4; // far right
    else if (distance === 3) positionIndex = 0; // far left
    else if (distance === 4) positionIndex = 1; // left
    
    // Card positions from left to right
    const positions = [
      { left: '8%', scale: 0.6, opacity: 0.3, blur: 2 },    // Far left
      { left: '25%', scale: 0.75, opacity: 0.5, blur: 1 },  // Left
      { left: '50%', scale: 1, opacity: 1, blur: 0 },       // Center (active)
      { left: '75%', scale: 0.75, opacity: 0.5, blur: 1 },  // Right  
      { left: '92%', scale: 0.6, opacity: 0.3, blur: 2 }    // Far right
    ];

    const pos = positions[positionIndex];
    
    // Add subtle mouse-based movement for active card
    const mouseOffset = isActive && typeof window !== 'undefined'
  ? (mouseY - window.innerHeight / 2) * 0.02
  : 0;

    
    return {
      position: 'absolute',
      left: pos.left,
      top: '50%',
      transform: `translate(-50%, -50%) scale(${pos.scale}) translateY(${mouseOffset}px)`,
      width: '280px',
      height: '380px',
      backgroundColor: '#0f1419',
      border: isActive ? '1px solid #1cb683' : '1px solid #2a3441',
      borderRadius: '20px',
      opacity: pos.opacity,
      transition: isAnimating 
        ? 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
        : 'all 0.3s ease-out',
      cursor: 'pointer',
      zIndex: isActive ? 10 : 5,
      filter: `blur(${pos.blur}px) ${isAnimating && isActive ? 'brightness(1.3) saturate(1.2)' : 'brightness(1)'}`,
      boxShadow: isActive 
        ? `
          0 0 8px #1cb683,
          0 0 25px rgba(28, 182, 131, 0.4),
          0 0 35px rgba(28, 182, 131, 0.25),
          0 0 60px rgba(28, 182, 131, 0.15),
          inset 0 0 40px rgba(28, 182, 131, 0.1)
        `
        : `
          0 0 15px rgba(28, 182, 131, 0.15),
          0 0 25px rgba(28, 182, 131, 0.08)
        `
    };
  };

  return (
    <div 
      className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative"
      style={{
        background: 'radial-gradient(ellipse at center, #0a1520 0%, #000000 70%)'
      }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
      

      {/* Card counter */}
      <div className="absolute top-8 right-8 text-[#1cb683] text-sm">
        {currentIndex + 1} / {totalCards}
      </div>

      <div className="relative w-full h-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            style={getCardStyle(index)}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between transition-opacity duration-500" style={{
              opacity: index === currentIndex ? 1 : 0.7
            }}>
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className={`text-center leading-relaxed mb-6 transition-all duration-300 ${
                index === currentIndex 
                  ? 'text-white text-base font-light' 
                  : 'text-gray-400 text-sm opacity-70'
              }`}>
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#1cb683] shadow-lg shadow-[#1cb683]/40' 
                    : 'bg-gray-700'
                }`}>
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className={`font-medium transition-all duration-300 ${
                    index === currentIndex ? 'text-white text-sm' : 'text-gray-300 text-xs'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-gray-400 transition-all duration-300 ${index === currentIndex ? 'text-xs' : 'text-xs'}`}>
                    {testimonial.role}
                  </div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boundary feedback */}
      {(currentIndex === 0 || currentIndex === totalCards - 1) && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          
        </div>
      )}
    </div>
  );
};

export default GlowingCarousel;