window.onload = function() {
    function confettiExplosion() {
      var end = Date.now() + (5 * 1000);
  
      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
  
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  
    confettiExplosion();
  };
  