/**
 * Avenia.id — Hero Section 3D Network Particle Canvas
 * Responsive topological data graph with spring-physics mouse interactions.
 */
(function () {
  'use strict';

  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Check prefers-reduced-motion
  var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) return;

  var width = (canvas.width = canvas.offsetWidth);
  var height = (canvas.height = canvas.offsetHeight);

  var particles = [];
  var particleCount = Math.min(65, Math.floor((width * height) / 18000));
  var maxDistance = Math.min(130, width / 7);

  var mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    radius: 140,
    active: false,
  };

  // Node class with spring physics and depth simulation
  function Particle(x, y, z) {
    this.x = x || Math.random() * width;
    this.y = y || Math.random() * height;
    this.z = z || Math.random() * 0.8 + 0.2; // depth factor (0.2 to 1.0)
    this.baseRadius = this.z * 2.2 + 1.2;
    this.vx = (Math.random() - 0.5) * 0.45 * this.z;
    this.vy = (Math.random() - 0.5) * 0.45 * this.z;

    // Aksen warna: 15% Amber (pencerahan data), 20% Teal (indikator), sisanya Blue/White
    var rand = Math.random();
    if (rand < 0.16) {
      this.color = '#FFB300'; // Amber
      this.isHub = true;
    } else if (rand < 0.35) {
      this.color = '#03DAC6'; // Teal
      this.isHub = false;
    } else {
      this.color = '#8A99AD'; // Muted ice blue
      this.isHub = false;
    }
  }

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off borders with damping
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    } else if (this.x > width) {
      this.x = width;
      this.vx *= -1;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    } else if (this.y > height) {
      this.y = height;
      this.vy *= -1;
    }

    // Spring attraction / push on mouse proximity
    if (mouse.active) {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius && dist > 0) {
        var force = (1 - dist / mouse.radius) * 0.8 * this.z;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
      }
    }
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.baseRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.isHub ? 8 : 0;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  function init() {
    particles = [];
    particleCount = Math.max(30, Math.min(75, Math.floor((width * height) / 16000)));
    maxDistance = Math.min(130, width / 7);

    for (var i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    init();
  }

  window.addEventListener('resize', resize);

  // Mouse / Pointer Interaction with gentle smoothing (spring easing)
  var heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    });

    heroSection.addEventListener('mouseleave', function () {
      mouse.active = false;
    });

    heroSection.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) {
        var rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    }, { passive: true });

    heroSection.addEventListener('touchend', function () {
      mouse.active = false;
    });
  }

  var isVisible = true;
  if ('IntersectionObserver' in window && heroSection) {
    var observer = new IntersectionObserver(function (entries) {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(heroSection);
  }

  function animate() {
    if (!isVisible) {
      requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Smooth mouse interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // Draw connecting edges
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var p1 = particles[i];
        var p2 = particles[j];
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          var alpha = (1 - dist / maxDistance) * 0.22 * ((p1.z + p2.z) / 2);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // If either is an Amber hub, edge has warm gradient
          if (p1.isHub || p2.isHub) {
            ctx.strokeStyle = 'rgba(255, 179, 0, ' + (alpha * 1.3) + ')';
          } else {
            ctx.strokeStyle = 'rgba(138, 153, 173, ' + alpha + ')';
          }

          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    for (var k = 0; k < particles.length; k++) {
      particles[k].update();
      particles[k].draw();
    }

    requestAnimationFrame(animate);
  }

  init();
  animate();
})();
