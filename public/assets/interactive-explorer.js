/**
 * Avenia.id — Interactive Data Explorer (Mini Nyangkut Tracker Widget)
 * Allows visitors to toggle IDX tickers and simulate retail underwater inferential metrics live.
 */
(function () {
  'use strict';

  var stockData = {
    GOTO: {
      ticker: 'GOTO',
      name: 'GoTo Gojek Tokopedia Tbk',
      basePrice: 52,
      avgAccumulation: 68,
      totalSid: '464.710 SID',
      rarScore: '142.5%',
      pbiScore: 92.4,
      heroBadge: true,
      minSlider: 30,
      maxSlider: 100,
    },
    BBRI: {
      ticker: 'BBRI',
      name: 'Bank Rakyat Indonesia (Persero) Tbk',
      basePrice: 4890,
      avgAccumulation: 5210,
      totalSid: '512.940 SID',
      rarScore: '118.2%',
      pbiScore: 84.1,
      heroBadge: true,
      minSlider: 4000,
      maxSlider: 6000,
    },
    BUMI: {
      ticker: 'BUMI',
      name: 'Bumi Resources Tbk',
      basePrice: 94,
      avgAccumulation: 128,
      totalSid: '389.200 SID',
      rarScore: '165.0%',
      pbiScore: 95.8,
      heroBadge: true,
      minSlider: 60,
      maxSlider: 180,
    },
  };

  var currentTicker = 'GOTO';

  function calculateNyangkut(currentPrice, avgPrice) {
    var diff = currentPrice - avgPrice;
    var underwaterPct = ((diff / avgPrice) * 100).toFixed(1);
    var estimatedNyangkut = Math.max(5, Math.min(98, Math.round(50 - (diff / avgPrice) * 80)));
    var isUnderwater = diff < 0;
    return {
      underwaterPct: (diff > 0 ? '+' : '') + underwaterPct + '%',
      estimatedNyangkut: estimatedNyangkut,
      isUnderwater: isUnderwater,
    };
  }

  function updateWidget() {
    var data = stockData[currentTicker];
    if (!data) return;

    var slider = document.getElementById('explorer-price-slider');
    var priceDisplay = document.getElementById('explorer-price-display');
    var avgDisplay = document.getElementById('explorer-avg-display');
    var nyangkutBar = document.getElementById('explorer-nyangkut-bar');
    var nyangkutPctText = document.getElementById('explorer-nyangkut-pct');
    var underwaterBadge = document.getElementById('explorer-underwater-badge');
    var rarDisplay = document.getElementById('explorer-rar-display');
    var sidDisplay = document.getElementById('explorer-sid-display');
    var statusTitle = document.getElementById('explorer-status-title');

    var currentPrice = slider ? parseFloat(slider.value) : data.basePrice;
    var metrics = calculateNyangkut(currentPrice, data.avgAccumulation);

    if (priceDisplay) priceDisplay.textContent = 'Rp ' + currentPrice.toLocaleString('id-ID');
    if (avgDisplay) avgDisplay.textContent = 'Rp ' + data.avgAccumulation.toLocaleString('id-ID');
    if (nyangkutBar) nyangkutBar.style.width = metrics.estimatedNyangkut + '%';
    if (nyangkutPctText) nyangkutPctText.textContent = metrics.estimatedNyangkut + '%';
    if (rarDisplay) rarDisplay.textContent = data.rarScore;
    if (sidDisplay) sidDisplay.textContent = data.totalSid;

    if (underwaterBadge) {
      underwaterBadge.textContent = metrics.underwaterPct;
      if (metrics.isUnderwater) {
        underwaterBadge.className = 'explorer-badge underwater-negative';
      } else {
        underwaterBadge.className = 'explorer-badge underwater-positive';
      }
    }

    if (statusTitle) {
      if (metrics.isUnderwater) {
        statusTitle.textContent = '🛡️ Pahlawan Bursa Menahan Tangguh (Zona Underwater)';
        statusTitle.className = 'status-text text-amber';
      } else {
        statusTitle.textContent = '🚀 Posisi Profit Publik (Di Atas Modal Rata-Rata)';
        statusTitle.className = 'status-text text-teal';
      }
    }
  }

  function initExplorer() {
    var tabs = document.querySelectorAll('.explorer-tab-btn');
    var slider = document.getElementById('explorer-price-slider');

    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var t = btn.getAttribute('data-ticker');
        if (!t || !stockData[t]) return;

        currentTicker = t;
        tabs.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        // Reset slider to emiten base
        var data = stockData[t];
        if (slider) {
          slider.min = data.minSlider;
          slider.max = data.maxSlider;
          slider.value = data.basePrice;
        }

        updateWidget();
      });
    });

    if (slider) {
      slider.addEventListener('input', function () {
        updateWidget();
      });
    }

    // Set initial values
    var initialData = stockData[currentTicker];
    if (slider && initialData) {
      slider.min = initialData.minSlider;
      slider.max = initialData.maxSlider;
      slider.value = initialData.basePrice;
    }
    updateWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExplorer);
  } else {
    initExplorer();
  }
})();
