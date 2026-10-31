/**
 * Central content source for the Investowl / Avenia landing page.
 * Synchronized with the real quantitative market intelligence & legal research
 * content from the previous DVE site (data/site.json and views/pages/home.dve).
 */

export const site = {
  name: 'Investowl',
  fullName: 'Avenia.id — Riset Data & Visualisasi Realita',
  brandName: 'Investowl.id',
  subName: 'Avenia.id',
  wordmark: 'investowl',
  domain: 'avenia.my.id',
  url: 'https://avenia.my.id',
  title: 'Investowl.id — Quantitative Market Intelligence & Smart Money Telemetry',
  description:
    'Platform analitik kuantitatif, pelacakan smart-money (bandarmologi), dan pemetaan kepemilikan saham bursa Indonesia (BEI) berbasis matematika inferensial & data empiris terbuka.',
  tagline: 'Quantitative Market Intelligence & Smart Money Telemetry',
  brandKicker: 'Independent Data Journalism & Public Quant Analytics',
  year: 2026,
  investowl: 'https://investowl.avenia.my.id/',
  ocrawler: 'https://ocrawler.avenia.my.id/',
  telegram: 'https://t.me/theinvestowl_id',
  telegramHandle: '@theinvestowl_id',
  workers: 'https://t.me/avaworkers_bot',
  workersHandle: '@avaworkers_bot',
  github: 'https://github.com/aryarifki',
  repo: 'https://github.com/aryarifki/aryarifki.github.io',
  smtracker: 'https://github.com/aryarifki/SMtracker',
  owlexia: 'https://github.com/aryarifki/owlexia',
};

export type NavLink = {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
  badge?: string;
};

export type NavItem = {
  label: string;
  href: string;
  items: NavLink[];
};

export const navigation: NavItem[] = [
  {
    label: 'Overview',
    href: '#overview',
    items: [
      {
        label: 'Platform Live',
        description: 'Luncurkan terminal web app Investowl',
        href: site.investowl,
        external: true,
        badge: 'Live',
      },
      {
        label: 'Mandat Data',
        description: 'Pedoman data empiris tanpa kompromi',
        href: '#overview',
      },
      {
        label: 'Status Pipeline',
        description: 'Sinkronisasi T+1 KSEI & HMM Regimes',
        href: '#dashboard',
      },
    ],
  },
  {
    label: 'Nilai & Fondasi',
    href: '#values',
    items: [
      {
        label: 'Quantitative Rigor',
        description: 'Model matematika inferensial & risiko terukur',
        href: '#values',
      },
      {
        label: 'Data Transparency',
        description: 'Visibilitas tanpa filter transaksi broker & KSEI',
        href: '#values',
      },
      {
        label: 'Market Intelligence',
        description: 'Pelacakan Wyckoff & graf kepemilikan UBO',
        href: '#values',
      },
    ],
  },
  {
    label: 'Produk & Proyek',
    href: '#projects',
    items: [
      {
        label: 'The Investowl',
        description: 'Smart-money telemetry untuk BEI',
        href: site.investowl,
        external: true,
        badge: 'Live',
      },
      {
        label: 'O-Crawler',
        description: 'Pipeline ingesti korpus hukum MA & MK',
        href: site.ocrawler,
        external: true,
        badge: 'Live',
      },
      {
        label: 'SM-Tracker',
        description: 'Hidden Markov Model engine & Canary Exodus',
        href: site.smtracker,
        external: true,
        badge: 'GitHub',
      },
      {
        label: 'OWLEXIA',
        description: 'Agen penalaran riset yuridis otonom',
        href: site.owlexia,
        external: true,
        badge: 'GitHub',
      },
      {
        label: 'Avenia Workers',
        description: 'Bot Telegram alert telemetri saham & hukum',
        href: site.workers,
        external: true,
        badge: 'Bot',
      },
    ],
  },
  {
    label: 'Telemetri',
    href: '#dashboard',
    items: [
      {
        label: 'Terminal Pasar',
        description: 'Eksplorasi aksi harga & volume institusi',
        href: '#dashboard',
      },
      {
        label: 'Mobile Desk',
        description: 'Akses telemetri di seluruh perangkat',
        href: '#app',
      },
      {
        label: 'Struktur Kepemilikan',
        description: 'Mutasi KSEI >5% dan kustodian asing',
        href: '#dashboard',
      },
    ],
  },
  {
    label: 'Riset & Risalah',
    href: '#testimonials',
    items: [
      {
        label: 'Featured Insights',
        description: 'Kajian investigasi data jurnalisme publik',
        href: '#testimonials',
      },
      {
        label: 'Data Dispatch',
        description: 'Laporan riset mingguan langsung di inbox',
        href: '#cta',
      },
      {
        label: 'Komunitas Riset',
        description: 'Diskusi analitik kuantitatif di Telegram',
        href: site.telegram,
        external: true,
      },
    ],
  },
];

export const partners = [
  { name: 'Next.js 16', icon: 'code' },
  { name: 'FastAPI / Python', icon: 'zap' },
  { name: 'Redis L1/L2', icon: 'layers' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Rust & HMM', icon: 'shield' },
  { name: 'Tailwind CSS', icon: 'sparkles' },
];

export const stats = [
  {
    value: '890+',
    label: 'Emiten BEI Terindeks',
    sub: 'Sinkronisasi T+1 & HMM Regimes',
  },
  {
    value: '2.400+',
    label: 'Putusan Hukum',
    sub: 'MA, MK, & Peraturan Resmi',
  },
  {
    value: '< 0.5ms',
    label: 'Latensi L1/L2 Cache',
    sub: 'In-Memory RAM + Redis Cluster',
  },
  {
    value: '100%',
    label: 'Data Empiris Terbuka',
    sub: 'Dataset KSEI, IDX, & MA Teraudit',
  },
];

export const features = [
  {
    icon: 'shield',
    title: 'Quantitative Rigor',
    description:
      'Kalkulasi algoritmik, model statistik matematika, dan batasan risiko deterministik mengeliminasi bias emosional subyektif dalam analisis pasar modal.',
    number: '01',
    active: false,
  },
  {
    icon: 'database',
    title: 'Data Transparency',
    description:
      'Visibilitas tanpa filter terhadap transaksi broker, mutasi kepemilikan KSEI, dan parameter volume foreign flow tanpa heuristik tersembunyi.',
    number: '02',
    active: true,
  },
  {
    icon: 'sparkles',
    title: 'Market Intelligence',
    description:
      'Pelacakan institusi tingkat lanjut, pemetaan fase struktural Wyckoff, dan pengungkapan jejaring graf kepemilikan penerima manfaat akhir (UBO).',
    number: '03',
    active: false,
  },
];

export const dashboardAssets = [
  {
    name: 'Bank Rakyat Indonesia',
    ticker: 'BBRI',
    icon: 'chart',
    price: 'Rp 4.880',
    change: '+2.14%',
    up: true,
    spark: [28, 36, 32, 48, 44, 61, 57, 72, 68, 84],
  },
  {
    name: 'Bank Central Asia',
    ticker: 'BBCA',
    icon: 'chart',
    price: 'Rp 10.450',
    change: '+1.45%',
    up: true,
    spark: [42, 38, 46, 44, 52, 49, 58, 55, 64, 61],
  },
  {
    name: 'Bank Mandiri',
    ticker: 'BMRI',
    icon: 'chart',
    price: 'Rp 6.750',
    change: '+3.20%',
    up: true,
    spark: [30, 35, 40, 48, 52, 59, 65, 70, 78, 85],
  },
];

export const dashboardHistory = [
  {
    icon: 'arrow-up',
    title: 'Akumulasi Asing BBRI',
    meta: 'Kustodian Asing · 2 mnt lalu',
    amount: '+Rp 48,5 M',
    positive: true,
  },
  {
    icon: 'arrow-down',
    title: 'Distribusi Domestik BBCA',
    meta: 'Broker Ritel · 45 mnt lalu',
    amount: '-Rp 12,2 M',
    positive: false,
  },
  {
    icon: 'plus',
    title: 'Net Crossing BMRI',
    meta: 'Institusi Asing · Kemarin',
    amount: '+Rp 85,0 M',
    positive: true,
  },
];

export const projects = [
  {
    id: 'investowl',
    category: 'Pasar Modal & Quant',
    title: 'The Investowl: Smart Money Telemetry',
    description:
      'Platform terminal pasar modal kuantitatif pelacak smart-money bandarmologi, integrasi data KSEI harian, dan deteksi fase akumulasi/distribusi Wyckoff.',
    tech: ['Next.js 16', 'Python', 'Redis L1/L2', 'Tailwind'],
    url: site.investowl,
    badge: 'Live Web App',
  },
  {
    id: 'ocrawler',
    category: 'Legal AI & Ingestion',
    title: 'O-Crawler: Legal Intelligence Engine',
    description:
      'Pipeline ingestion & crawler putusan pengadilan Mahkamah Agung & MK berbasis OCR tesseract, ekstraksi metadata, dan vector database untuk riset regulasi.',
    tech: ['Python FastAPI', 'Crawl4AI', 'PostgreSQL', 'Meilisearch'],
    url: site.ocrawler,
    badge: 'Live Portal',
  },
  {
    id: 'smtracker',
    category: 'Pasar Modal & Quant',
    title: 'SM-Tracker: Hidden Markov Model Engine',
    description:
      'Core backend quant untuk estimasi rezim pasar saham Indonesia, scoring volume anomali broker, dan kalkulasi dynamic threshold berbasis Rust/Python.',
    tech: ['Python 3.12', 'Rust', 'Redis', 'Statistical Models'],
    url: site.smtracker,
    badge: 'GitHub Repo',
  },
  {
    id: 'owlexia',
    category: 'Legal AI & Ingestion',
    title: 'OWLEXIA: Autonomous Legal Research Agent',
    description:
      'Agen otonom untuk sintesis perbandingan pasal hukum, analisis ratio decidendi putusan pengadilan, dan ringkasan yuridis berbasis LLM lokal & Claude.',
    tech: ['TypeScript', 'Claude 3.5 Sonnet', 'LangGraph', 'Qdrant'],
    url: site.owlexia,
    badge: 'GitHub Repo',
  },
  {
    id: 'workers',
    category: 'Bot & Automation',
    title: 'Avenia Workers: Edge Telegram Bot',
    description:
      'Bot Telegram asinkronus dan edge worker terdistribusi untuk alert telemetri saham IDX, notifikasi putusan hukum baru, dan ringkasan riset pasar otomatis.',
    tech: ['Cloudflare Workers', 'TypeScript', 'Telegram Bot API', 'Hono'],
    url: site.workers,
    badge: 'Telegram Bot',
  },
];

export const insights = [
  {
    title: 'Anatomi Aliran Smart Money Pasca Dividen Jumbo BBRI & BMRI',
    slug: 'anatomi-smart-money-dividen-bbri-bmri',
    category: 'Perbankan & Dividen',
    date: 'September 2026',
    readTime: '6 menit baca',
    badge: 'Analisis Kuantitatif',
    summary:
      'Mengupas pergeseran kepemilikan investor institusi domestik vs asing pasca tanggal cum-dividend dan implikasinya terhadap volatilitas likuiditas perbankan.',
  },
  {
    title: 'Peta Regulasi: Mengapa UU Cipta Kerja Masih Menghadapi 47 Uji Materi di MK',
    slug: 'peta-regulasi-uu-cipta-kerja-mk',
    category: 'Hukum & Regulasi',
    date: 'Agustus 2026',
    readTime: '8 menit baca',
    badge: 'Legal AI Ingestion',
    summary:
      'Visualisasi jejaring pertimbangan hukum, pergeseran ratio decidendi, dan klasterisasi norma ketenagakerjaan yang paling sering diuji dalam peraturan daerah dan sektoral pusat.',
  },
  {
    title: 'Smart Money Flow: Mengapa Saham Defensif BUMN Menjadi Shelter Kuartal III',
    slug: 'smart-money-shelter-bumn',
    category: 'Makroekonomi',
    date: 'Agustus 2026',
    readTime: '5 menit baca',
    badge: 'Data Flow KSEI',
    summary:
      'Membedah likuiditas perbankan dan rotasi institusional asing saat volatilitas pasar regional memuncak menjelang akhir tahun fiskal.',
  },
];

export const testimonials = [
  {
    quote:
      'Investowl adalah platform pertama di mana saya bisa melacak sebuah sinyal sampai ke laporan mutasi resminya. Itu mengubah cara kami mengukur ukuran posisi.',
    name: 'Raka Pradana',
    role: 'Portfolio Manager · Jakarta',
    initials: 'RP',
    tone: 'peach',
  },
  {
    quote:
      'Tampilan arus data KSEI berhasil mendeteksi pola distribusi yang terlewatkan oleh ringkasan broker biasa selama dua minggu. Sangat bernilai untuk timing entri.',
    name: 'Sinta Maharani',
    role: 'Equity Research Lead',
    initials: 'SM',
    tone: 'violet',
  },
  {
    quote:
      'Integrasi korpus hukum dan data pasar dalam satu grafik. Analisis kepatuhan regulasi kami yang tadinya memakan hari kini selesai dalam hitungan jam.',
    name: 'Bagas Nugroho',
    role: 'Legal Tech Engineer',
    initials: 'BN',
    tone: 'teal',
  },
  {
    quote:
      'Bukan sekadar sinyal hitam di balik kotak tertutup. Semuanya terdokumentasi, dapat direproduksi, dan transparan terhadap ketidakpastian pasar.',
    name: 'Nadia Kusuma',
    role: 'Quantitative Analyst',
    initials: 'NK',
    tone: 'blue',
  },
];

export const newsletter = {
  heading: 'Dapatkan Laporan Riset Mingguan Langsung di Inbox Anda',
  sub: 'Bukan spam. Tanpa sensasi spekulatif. Hanya visualisasi data tajam, kajian inferensial pasar modal, dan ringkasan hukum yang siap diuji.',
  cta: 'Langganan Data Dispatch',
  microcopy: 'Gratis setiap Senin pagi. Berhenti langganan kapan saja.',
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'Direktori Platform',
    links: [
      { label: 'Portal Investowl Live', href: site.investowl, external: true },
      { label: 'Platform Overview', href: '#overview' },
      { label: 'Nilai & Fondasi', href: '#values' },
      { label: 'Ekosistem Produk', href: '#projects' },
      { label: 'Telemetri Pasar', href: '#dashboard' },
      { label: 'Kajian Riset Data', href: '#testimonials' },
    ],
  },
  {
    title: 'Ekosistem Rekayasa',
    links: [
      { label: 'The Investowl', href: site.investowl, external: true },
      { label: 'O-Crawler', href: site.ocrawler, external: true },
      { label: 'SM-Tracker', href: site.smtracker, external: true },
      { label: 'OWLEXIA', href: site.owlexia, external: true },
      { label: 'Avenia Workers', href: site.workers, external: true },
    ],
  },
  {
    title: 'Koneksi & Komunitas',
    links: [
      { label: 'Komunitas Telegram', href: site.telegram, external: true },
      { label: 'Bot Telegram Alert', href: site.workers, external: true },
      { label: 'GitHub Profil', href: site.github, external: true },
      { label: 'Kode Sumber Website', href: site.repo, external: true },
    ],
  },
  {
    title: 'Akses Publik',
    links: [
      { label: 'Dataset Terbuka KSEI', href: '#dashboard' },
      { label: 'Korpus Regulasi MA & MK', href: site.ocrawler, external: true },
      { label: 'Metodologi Empiris', href: '#values' },
      { label: 'Data Dispatch Mingguan', href: '#cta' },
    ],
  },
];

export const socials = [
  { label: 'GitHub', href: site.github, icon: 'github' },
  { label: 'The Investowl', href: site.investowl, icon: 'globe' },
  { label: 'Komunitas Telegram', href: site.telegram, icon: 'telegram' },
  { label: 'O-Crawler Portal', href: site.ocrawler, icon: 'database' },
  { label: 'Avenia Workers', href: site.workers, icon: 'send' },
];
