/**
 * Avenia.id (Investowl) — Quantitative Telemetry Client Controller
 * Ultra-Lightweight Vanilla JS (< 4KB, Zero External Dependencies)
 */
(function () {
  'use strict';

  // Mark JS active on root
  document.documentElement.classList.add('js-enabled');

  // ══════════════════════════════════════════════════════════════════════════
  // 1. MOBILE & TABLET NAVIGATION DRAWER CONTROLLER
  // ══════════════════════════════════════════════════════════════════════════
  var toggleBtn = document.getElementById('mobile-toggle-btn');
  var closeBtn = document.getElementById('mobile-close-btn');
  var drawer = document.getElementById('mobile-nav-drawer');
  var backdrop = document.getElementById('mobile-nav-backdrop');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link, .btn-primary-full, .btn-secondary-full');

  function openMobileMenu() {
    if (!drawer) return;
    drawer.removeAttribute('hidden');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.classList.add('is-active');
    }
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!drawer) return;
    drawer.setAttribute('hidden', '');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('is-active');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = drawer ? drawer.hasAttribute('hidden') : true;
      if (isHidden) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  // ESC key dismisses drawer
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && !drawer.hasAttribute('hidden')) {
      closeMobileMenu();
    }
  });


  // ══════════════════════════════════════════════════════════════════════════
  // 2. INTERACTIVE PRODUCT & ECOSYSTEM FILTERING
  // ══════════════════════════════════════════════════════════════════════════
  var filterButtons = document.querySelectorAll('.filter-tab-btn');
  var productCards = document.querySelectorAll('.product-card, .project-card');

  if (filterButtons.length > 0 && productCards.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetFilter = btn.getAttribute('data-filter');

        // Update active tab UI state
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter cards with smooth opacity and transform transition
        productCards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          if (targetFilter === 'all' || category === targetFilter) {
            card.style.display = 'flex';
            requestAnimationFrame(function () {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(6px)';
            setTimeout(function () {
              if (card.style.opacity === '0') {
                card.style.display = 'none';
              }
            }, 180);
          }
        });
      });
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 3. ACTIVE NAVIGATION SPY (INTERSECTION OBSERVER)
  // ══════════════════════════════════════════════════════════════════════════
  var desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  var trackedSections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && trackedSections.length > 0 && desktopNavLinks.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          desktopNavLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + id) {
              link.setAttribute('aria-current', 'true');
            } else {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });

    trackedSections.forEach(function (sec) {
      observer.observe(sec);
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 4. DATA DISPATCH NEWSLETTER FORM CONTROLLER
  // ══════════════════════════════════════════════════════════════════════════
  var newsletterForm = document.getElementById('newsletter-form');
  var newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        if (newsletterFeedback) {
          newsletterFeedback.textContent = '✓ Terima kasih! Alamat ' + input.value + ' telah terdaftar pada Data Dispatch mingguan.';
          newsletterFeedback.style.display = 'block';
        }
        input.value = '';
      }
    });
  }
})();
