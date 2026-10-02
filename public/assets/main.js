// Progressive enhancement: Page is fully functional without JavaScript.
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // --- Mobile Drawer Toggle ---
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var drawer = document.getElementById('mobile-drawer');
  var drawerClose = document.getElementById('mobile-drawer-close');
  var drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (!drawer || !menuToggle) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !menuToggle) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // --- Copy Email to Clipboard ---
  var copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var copyText = copyBtn.querySelector('.copy-text');
      var copySuccess = copyBtn.querySelector('.copy-success');

      if (!email) return;

      var doSuccess = function () {
        if (copyText && copySuccess) {
          copyText.style.display = 'none';
          copySuccess.style.display = 'inline';
          setTimeout(function () {
            copyText.style.display = 'inline';
            copySuccess.style.display = 'none';
          }, 2500);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(doSuccess).catch(function () {
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }

  // --- Active Nav Indicator Spying ---
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  var sections = document.querySelectorAll('.section, .hero-section');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href');
          if (href === '#' + id) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(function (sec) {
      if (sec.id) spy.observe(sec);
    });
  }
})();
