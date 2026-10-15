/**
 * Avenia.id — Progressive Engagement Client Controller
 * Lightweight Vanilla JS (< 5KB uncompressed, zero dependencies)
 */
(function () {
  'use strict';

  // Mark JS enabled
  document.documentElement.classList.add('js-enabled');

  // ══════════════════════════════════════════════════════════════════════════
  // 1. MOBILE NAVIGATION DRAWER CONTROLLER
  // ══════════════════════════════════════════════════════════════════════════
  var toggleBtn = document.getElementById('mobile-toggle-btn');
  var closeBtn = document.getElementById('mobile-close-btn');
  var drawer = document.getElementById('mobile-nav-drawer');
  var backdrop = document.getElementById('mobile-nav-backdrop');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!drawer) return;
    drawer.removeAttribute('hidden');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!drawer) return;
    drawer.setAttribute('hidden', '');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // ESC key listener to close drawer
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && !drawer.hasAttribute('hidden')) {
      closeMobileMenu();
    }
  });


  // ══════════════════════════════════════════════════════════════════════════
  // 2. INTERACTIVE TECH STACK & CATEGORY FILTERING
  // ══════════════════════════════════════════════════════════════════════════
  var filterButtons = document.querySelectorAll('.filter-tab-btn');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetFilter = btn.getAttribute('data-filter');

        // Update Active Tab State
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Filter Project Cards with smooth visibility transition
        projectCards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          if (targetFilter === 'all' || category === targetFilter) {
            card.style.display = 'flex';
            requestAnimationFrame(function () {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
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
  // 3. COPY EMAIL TO CLIPBOARD WITH REALTIME FEEDBACK
  // ══════════════════════════════════════════════════════════════════════════
  var copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      var email = copyEmailBtn.getAttribute('data-email');
      var labelEl = copyEmailBtn.querySelector('.copy-label');
      var successEl = copyEmailBtn.querySelector('.copy-success');

      if (!email) return;

      var triggerSuccess = function () {
        if (labelEl && successEl) {
          labelEl.style.display = 'none';
          successEl.style.display = 'inline';
          setTimeout(function () {
            labelEl.style.display = 'inline';
            successEl.style.display = 'none';
          }, 2400);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(triggerSuccess).catch(function () {
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 4. ACTIVE NAVIGATION SPYING (INTERSECTION OBSERVER)
  // ══════════════════════════════════════════════════════════════════════════
  var desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-item');
  var targetSections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && targetSections.length > 0 && desktopNavLinks.length > 0) {
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
    }, { rootMargin: '-20% 0px -70% 0px' });

    targetSections.forEach(function (sec) {
      observer.observe(sec);
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 5. NEWSLETTER SUBMISSION SIMULATION
  // ══════════════════════════════════════════════════════════════════════════
  var newsletterForm = document.getElementById('newsletter-form');
  var newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        if (newsletterFeedback) {
          newsletterFeedback.textContent = '✓ Terima kasih! Alamat ' + input.value + ' telah ditambahkan ke Data Dispatch.';
          newsletterFeedback.style.display = 'block';
        }
        input.value = '';
      }
    });
  }
})();
