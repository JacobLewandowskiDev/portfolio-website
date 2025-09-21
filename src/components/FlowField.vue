<script>
export default {
  data() {
    return {
      animationFrameId: null,
      animationCount: 0,
      maxAnimationCount: 4000,
    };
  },

  mounted() {
    if (this.$route.path === "/Home" || this.$route.path === "/") {
      this.startAnimation();
    }
  },

  methods: {
    startAnimation() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Particle {
        constructor(effect) {
          this.effect = effect;
          this.x = Math.floor(Math.random() * this.effect.width);
          this.y = Math.floor(Math.random() * this.effect.height);
          this.speedX;
          this.speedY;
          this.speedModifier = Math.floor(Math.random() * 3 + 1);
          this.history = [{ x: this.x, y: this.y }];
          this.maxLength = Math.floor(Math.random() * 200 + 50);
          this.angle = 0;
          this.timer = this.maxLength * 2;
        }
        draw() {
          ctx.fillStyle = "#ffffff38";
          ctx.strokeStyle = "#ffffff38";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.history[0].x, this.history[0].y);
          for (let i = 0; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
          }
          ctx.stroke();
        }

        update() {
          this.timer--;
          if (this.timer >= 1) {
            let x = Math.floor(this.x / this.effect.cellSize);
            let y = Math.floor(this.y / this.effect.cellSize);
            let index = y * this.effect.cols + x;
            this.angle = this.effect.flowField[index];

            this.speedX = Math.cos(this.angle);
            this.speedY = Math.sin(this.angle);
            this.x += this.speedX * this.speedModifier;
            this.y += this.speedY * this.speedModifier;

            this.history.push({ x: this.x, y: this.y });
            if (this.history.length > this.maxLength) {
              this.history.shift();
            }
          } else if (this.history.length > 1) {
            this.history.shift();
          } else {
            this.reset();
          }
        }

        reset() {
          this.x = Math.floor(Math.random() * this.effect.width);
          this.y = Math.floor(Math.random() * this.effect.height);
          this.history = [{ x: this.x, y: this.y }];
          this.timer = this.maxLength * 2;
        }
      }

      class Effect {
        constructor(canvas) {
          this.canvas = canvas;
          this.width = this.canvas.width;
          this.height = this.canvas.height;
          this.particles = [];
          this.numberOfParticles = 700;
          this.cellSize = 20;
          this.rows;
          this.cols;
          this.flowField = [];
          this.curve = 0.4;
          this.zoom = 0.13;
          this.init();

          window.addEventListener("resize", (e) => {
            this.resize(e.target.innerWidth, e.target.innerHeight);
          });
        }

        init() {
          this.rows = Math.floor(this.height / this.cellSize);
          this.cols = Math.floor(this.width / this.cellSize);
          this.flowField = [];
          for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
              let angle =
                (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) *
                this.curve;
              this.flowField.push(angle);
            }
          }

          this.particles = [];
          for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
          }
        }

        resize(width, height) {
          this.canvas.width = width;
          this.canvas.height = height;
          this.width = this.canvas.width;
          this.height = this.canvas.height;
          this.init();
        }

        render() {
          this.particles.forEach((particle) => {
            particle.draw();
            particle.update();
          });
        }
      }

      const effect = new Effect(canvas);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        this.animationFrameId = requestAnimationFrame(animate);
        if (this.$route.path !== "/Home" && this.$route.path !== "/") {
          cancelAnimationFrame(this.animationFrameId);
        }
        this.animationCount++;
        if (this.animationCount >= this.maxAnimationCount) {
          // Reset particles
          effect.render();
          this.animationCount = 0; // Reset animation count
        }
      };
      animate();
    },
  },
};
</script>

<template>
  <canvas ref="canvas" id="flow-field"></canvas>
</template>

<style scoped>
#flow-field {
  position: absolute;
  width: 110vw;
  height: 100vh;
  overflow: hidden;
}
</style>
