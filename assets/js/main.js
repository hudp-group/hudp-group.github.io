/* ============================================================
   Hu Group – Main JavaScript
   ============================================================ */

(function () {
  // ---- Active nav link highlight ----
  let path = location.pathname.split('/').pop() || 'index.html';
  if (path === 'publications.html') path = 'publication.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) { a.classList.add('active'); }
  });

  // ---- Navbar scroll shadow ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Scroll-triggered reveal ----
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    revealElements.forEach(el => el.classList.add('visible'));
  }
})();
