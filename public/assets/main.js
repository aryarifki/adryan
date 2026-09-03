// Progressive enhancement only: the page is fully usable without this script.
(function () {
  document.documentElement.classList.add('js');
  var sections = document.querySelectorAll('.section');
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if (!('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('is-visible'); });
    return;
  }

  // Reveal sections as they enter the viewport.
  var reveal = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  sections.forEach(function (s) { reveal.observe(s); });

  // Highlight the nav link for the section currently in view.
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.id;
      navLinks.forEach(function (a) {
        var active = a.getAttribute('href') === '#' + id;
        if (active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (s) { if (s.id) spy.observe(s); });
})();
