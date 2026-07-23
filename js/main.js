document.addEventListener('DOMContentLoaded', () => {
  // ── Menú móvil ──
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Fondo de particulas conectadas (color segun el tema de cada pagina) ──
  if (window.tsParticles && document.getElementById('tsparticles')) {
    const styles = getComputedStyle(document.body);
    const accent = (styles.getPropertyValue('--accent') || '#00bcf2').trim();
    const accent2 = (styles.getPropertyValue('--accent-2') || '#6c5ce7').trim();
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      detectRetina: true,
      background: { color: 'transparent' },
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: [accent, accent2, '#ffffff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3 } },
        links: { enable: true, distance: 130, color: accent, opacity: 0.22, width: 1 },
        move: { enable: true, speed: 0.5, outModes: { default: 'out' } }
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'grab' }, resize: true },
        modes: { grab: { distance: 140, links: { opacity: 0.45 } } }
      }
    });
  }

  // ── Animacion de aparicion al hacer scroll ──
  const revealEls = document.querySelectorAll('.card, .provider-card, .cta-banner, .highlight, .exam-card, .resource-card');
  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  // ── Sombra de navbar y boton "volver arriba" al hacer scroll ──
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 20;
    if (navbar) navbar.classList.toggle('scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
