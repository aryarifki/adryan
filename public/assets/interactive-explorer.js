/**
 * Avenia.id — Interactive Cloudflare Edge Explorer Widget
 * Allows visitors to toggle edge regions, test simulated ping latency, and inspect protocol & bot telemetry.
 */
(function () {
  'use strict';

  var nodeData = {
    SIN: {
      id: 'SIN',
      name: 'Singapore (SIN-01)',
      region: 'Asia-East (Anycast)',
      basePing: 14,
      minSlider: 5,
      maxSlider: 100,
      protocol: 'VLESS WS + TLS',
      gateway: 'Cloudflare Anycast',
      bot: 'Active (@avaworkers_bot)',
      status: 'ONLINE (0ms Cold)',
      statusClass: 'underwater-positive',
      throughput: 99.9,
      note: '⚡ Edge Node SIN-01 Aktif — Optimal untuk routing ultra-cepat Asia Tenggara & Telegram Bot'
    },
    CGK: {
      id: 'CGK',
      name: 'Jakarta (CGK-01)',
      region: 'Indonesia Local Edge',
      basePing: 8,
      minSlider: 3,
      maxSlider: 80,
      protocol: 'Trojan WS + TLS',
      gateway: 'Telkom & IIX Peering',
      bot: 'Active (@avaworkers_bot)',
      status: 'ONLINE (Direct Local)',
      statusClass: 'underwater-positive',
      throughput: 99.8,
      note: '🇮🇩 Edge Node CGK-01 Aktif — Latensi domestik terendah (< 10ms) dengan konektivitas IIX langsung'
    },
    NRT: {
      id: 'NRT',
      name: 'Tokyo (NRT-01)',
      region: 'East Asia Hub',
      basePing: 48,
      minSlider: 25,
      maxSlider: 200,
      protocol: 'VLESS WS + TLS',
      gateway: 'Cloudflare Anycast',
      bot: 'Active (@avaworkers_bot)',
      status: 'ONLINE (Failover Node)',
      statusClass: 'underwater-positive',
      throughput: 99.7,
      note: '🇯🇵 Edge Node NRT-01 Aktif — Jalur cadangan otomatis berkecepatan tinggi ke backbone Pasifik'
    }
  };

  var currentNode = 'SIN';

  function updateWidget() {
    var data = nodeData[currentNode];
    if (!data) return;

    var slider = document.getElementById('explorer-ping-slider');
    var pingDisplay = document.getElementById('explorer-ping-display');
    var protoDisplay = document.getElementById('explorer-proto-display');
    var nodeStatus = document.getElementById('explorer-node-status');
    var gwDisplay = document.getElementById('explorer-gw-display');
    var botDisplay = document.getElementById('explorer-bot-display');
    var nodeBar = document.getElementById('explorer-node-bar');
    var nodePct = document.getElementById('explorer-node-pct');
    var statusTitle = document.getElementById('explorer-status-title');

    var currentPing = slider ? parseInt(slider.value, 10) : data.basePing;

    if (pingDisplay) pingDisplay.textContent = currentPing + ' ms';
    if (protoDisplay) protoDisplay.textContent = data.protocol;
    if (gwDisplay) gwDisplay.textContent = data.gateway;
    if (botDisplay) botDisplay.textContent = data.bot;
    if (nodeStatus) {
      nodeStatus.textContent = data.status;
      nodeStatus.className = 'explorer-badge ' + data.statusClass;
    }

    if (nodeBar) {
      var pct = Math.max(80, Math.min(100, 100 - (currentPing / 150) * 15));
      nodeBar.style.width = pct.toFixed(1) + '%';
    }
    if (nodePct) nodePct.textContent = data.throughput + '%';

    if (statusTitle) {
      statusTitle.textContent = data.note;
    }
  }

  function initExplorer() {
    var tabs = document.querySelectorAll('.explorer-tab-btn');
    var slider = document.getElementById('explorer-ping-slider');

    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var n = btn.getAttribute('data-node');
        if (!n || !nodeData[n]) return;

        currentNode = n;
        tabs.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        var data = nodeData[n];
        if (slider) {
          slider.min = data.minSlider;
          slider.max = data.maxSlider;
          slider.value = data.basePing;
        }

        updateWidget();
      });
    });

    if (slider) {
      slider.addEventListener('input', function () {
        updateWidget();
      });
    }

    var initialData = nodeData[currentNode];
    if (slider && initialData) {
      slider.min = initialData.minSlider;
      slider.max = initialData.maxSlider;
      slider.value = initialData.basePing;
    }
    updateWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExplorer);
  } else {
    initExplorer();
  }
})();
