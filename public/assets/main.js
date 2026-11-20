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
            if (href && (href === '#' + id || href === '/#' + id || href.endsWith('#' + id))) {
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


  // ══════════════════════════════════════════════════════════════════════════
  // 5. HERO STATS COUNT-UP (ANIMASI ANGKA SAAT MASUK VIEWPORT)
  // ══════════════════════════════════════════════════════════════════════════
  var counters = document.querySelectorAll('[data-count]');

  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target.toLocaleString('id-ID');
      return;
    }
    var duration = 1400;
    var startTime = null;
    function step(now) {
      if (!startTime) startTime = now;
      var progress = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString('id-ID');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (counters.length > 0) {
    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(runCounter);
    }
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 6. REVEAL ON SCROLL (ANIMASI MASUK SEKSI)
  // ══════════════════════════════════════════════════════════════════════════
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0) {
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 7. RADAR KSEI: PENCARIAN / SARING TABEL LANGSUNG
  // ══════════════════════════════════════════════════════════════════════════
  var radarSearch = document.getElementById('radar-search');
  var radarTable = document.getElementById('radar-table');
  var radarCount = document.getElementById('radar-count');
  var radarEmpty = document.getElementById('radar-empty');

  if (radarSearch && radarTable) {
    var radarRows = radarTable.querySelectorAll('tbody tr');

    function updateRadarCount(visible) {
      if (radarCount) {
        radarCount.textContent = visible + '/' + radarRows.length + ' entitas';
      }
      if (radarEmpty) {
        radarEmpty.hidden = visible !== 0;
      }
    }

    updateRadarCount(radarRows.length);

    radarSearch.addEventListener('input', function () {
      var query = radarSearch.value.trim().toLowerCase();
      var visible = 0;
      radarRows.forEach(function (row) {
        var match = query === '' || row.textContent.toLowerCase().indexOf(query) !== -1;
        row.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      updateRadarCount(visible);
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  // 8. DYNAMIC GRADIENT THEME ENGINE
  //    --scroll: progres scroll halaman (bilah gradien atas)
  //    --mx/--my: posisi pointer untuk parallax gradien hero
  // ══════════════════════════════════════════════════════════════════════════
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    var ticking = false;

    function updateScrollVar() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      document.documentElement.style.setProperty('--scroll', ratio.toFixed(4));
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScrollVar);
      }
    }, { passive: true });
    updateScrollVar();

    var heroSection = document.querySelector('.hero-section');
    var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

    if (heroSection && finePointer) {
      var heroTicking = false;
      var lastX = 0;
      var lastY = 0;

      heroSection.addEventListener('pointermove', function (e) {
        var rect = heroSection.getBoundingClientRect();
        lastX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        lastY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        if (!heroTicking) {
          heroTicking = true;
          requestAnimationFrame(function () {
            document.documentElement.style.setProperty('--mx', lastX.toFixed(3));
            document.documentElement.style.setProperty('--my', lastY.toFixed(3));
            heroTicking = false;
          });
        }
      });

      heroSection.addEventListener('pointerleave', function () {
        document.documentElement.style.setProperty('--mx', '0');
        document.documentElement.style.setProperty('--my', '0');
      });
    }
  }
})();
