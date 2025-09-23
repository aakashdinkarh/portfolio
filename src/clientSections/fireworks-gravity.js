class Firework {
  constructor(x, y, canvas, ctx) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.size = Math.random() * 3 + 2;
    this.speed = Math.random() * 3 + 2;
    this.explosionHeight = this.calculateExplosionHeight(); // Calculate explosion height
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.exploded = false;
    this.particles = [];
  }

  calculateExplosionHeight() {
    // Randomly decide if the firework will explode below height / 2
    if (Math.random() < 0.05) {
      // 5% chance
      return Math.random() * (this.canvas.height / 2); // Explode below height / 2
    } else {
      return Math.random() * (this.canvas.height * 0.75) + this.canvas.height * 0.1; // Explode above height / 2
    }
  }

  update() {
    if (!this.exploded) {
      this.y -= this.speed;
      if (this.y < this.explosionHeight) {
        // Use the random explosion height
        this.explode();
      }
    } else {
      this.particles.forEach((particle) => {
        particle.update();
      });
    }
  }

  explode() {
    this.exploded = true;
    const particleCount = Math.random() * 100 + 50;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.x, this.y, this.color, this.ctx));
    }
  }

  draw() {
    if (!this.exploded) {
      this.ctx.fillStyle = this.color;
      this.ctx.shadowColor = this.color; // Set shadow color to the firework color
      this.ctx.shadowBlur = 20; // Set the blur for the glow effect
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset shadow blur for particles
    } else {
      this.particles.forEach((particle) => {
        particle.draw();
      });
    }
  }
}
class Particle {
  constructor(x, y, color, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.size = Math.random() * 3 + 1;
    this.speed = Math.random() * 3 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.color = color;
    this.alpha = 1;
    this.gravity = 0.1; // Gravity effect
    this.velocityY = Math.random() * -3 - 1; // Initial upward velocity
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += this.velocityY; // Apply vertical velocity
    this.velocityY += this.gravity; // Apply gravity
    this.alpha -= 0.01;

    // Remove the particle if it is fully transparent
    if (this.alpha <= 0) {
      this.alpha = 0; // Ensure alpha doesn't go negative
    }
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.alpha;
    this.ctx.fillStyle = this.color;
    this.ctx.shadowColor = this.color; // Set shadow color to the particle color
    this.ctx.shadowBlur = 10; // Set the blur for the glow effect
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }
}

export const getFirework = (canvas) => {
  const ctx = canvas.getContext('2d');

  const canvasClientRect = canvas.getBoundingClientRect();

  canvas.width = canvasClientRect.width;
  canvas.height = canvasClientRect.height;

  const fireworks = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    fireworks.push(new Firework(x, y, canvas, ctx));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
      firework.update();
      firework.draw();
      // Remove particles that are fully transparent
      firework.particles = firework.particles.filter((particle) => particle.alpha > 0);
      if (firework.exploded && firework.particles.length === 0) {
        fireworks.splice(index, 1);
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
  return createFirework;
};

export const hydrateHomeFireworks = () => {
  const homeCanvas = document.querySelector('canvas#fireworksHome');
  const createHomeFirework = getFirework(homeCanvas);

  const homeClickEventListener = (() => {
    let shouldTrigger = true;
    return () => {
      if (shouldTrigger) {
        setTimeout(createHomeFirework, 0);
        setTimeout(createHomeFirework, 100);
        setTimeout(createHomeFirework, 200);
        shouldTrigger = false;

        setTimeout(() => {
          shouldTrigger = true;
        }, 1000);
      }
    };
  })();

  document.querySelector('section#home').addEventListener('click', homeClickEventListener);
};
