const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.exploded = false;
        this.particles = [];
    }

    update() {
        if (!this.exploded) {
            this.y -= this.speed;
            if (this.y < canvas.height / 2) {
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
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }

    draw() {
        if (!this.exploded) {
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color; // Set shadow color to the firework color
            ctx.shadowBlur = 20; // Set the blur for the glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // Reset shadow blur for particles
        } else {
            this.particles.forEach((particle) => {
                particle.draw();
            });
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 3 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.color = color;
        this.alpha = 1;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.01;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color; // Set shadow color to the particle color
        ctx.shadowBlur = 10; // Set the blur for the glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    fireworks.push(new Firework(x, y));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.exploded && firework.particles.length === 0) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

// setInterval(createFirework, 1000);
createFirework();
setTimeout(createFirework, 2000);
setTimeout(createFirework, 4000);
setTimeout(() => { setInterval(createFirework, 3000); }, 5000);
animate();

// sitemap.xml
{/* <url><priority>1.0</priority><loc>https://aakashdinkar.in/</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkar.in/bounce-and-collect-game</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkar.in/projects</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkarh.github.io/music-player-project</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkarh.github.io/the-movie-db</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkar.in/portfolio-v1/</loc></url>
<url><priority>0.7</priority><loc>https://aakashdinkar.in/portfolio-v0/</loc></url>
<url><priority>0.5</priority><loc>https://aakashdinkar.in/case-utils/</loc></url>
<url><priority>0.3</priority><loc>https://aakashdinkar.in/block-game/</loc></url>
<url><priority>0.3</priority><loc>https://aakashdinkarh.github.io/LawyerProject/</loc></url>
<url><priority>0.3</priority><loc>https://aakashdinkarh.github.io/Looklike_Cosmetic_Store/</loc></url>
<url><priority>0.3</priority><loc>https://aakashdinkarh.github.io/Booker---Textbook-Renter/</loc></url>
<url><priority>0.3</priority><loc>https://aakashdinkarh.github.io/wedding-site/</loc></url>
<url><priority>0.2</priority><loc>https://aakashdinkarh.github.io/rail_api_app/</loc></url>
<url><priority>0.2</priority><loc>https://aakashdinkar.in/panda-img/</loc></url>
<url><priority>0.2</priority><loc>https://aakashdinkar.in/calculator/</loc></url>
<url><priority>0.2</priority><loc>https://aakashdinkar.in/MemoryGame/</loc></url>
<url><priority>0.2</priority><loc>https://aakashdinkar.in/Image-modal/</loc></url> */}