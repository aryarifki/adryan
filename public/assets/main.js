// Progressive enhancement: Page is fully functional without JavaScript.
(function () {
  'use strict';
  document.documentElement.classList.add('js');

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
  var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
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
    }, { rootMargin: '-25% 0px -65% 0px' });

    sections.forEach(function (sec) {
      if (sec.id) spy.observe(sec);
    });
  }

  // --- Newsletter Form Submission Simulation ---
  var newsletterForm = document.getElementById('newsletter-form');
  var newsletterFeedback = document.getElementById('newsletter-feedback');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        if (newsletterFeedback) {
          newsletterFeedback.textContent = '✓ Terima kasih! Email ' + input.value + ' telah terdaftar di Data Dispatch.';
          newsletterFeedback.style.display = 'block';
        }
        input.value = '';
      }
    });
  }
})();
