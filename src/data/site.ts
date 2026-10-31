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
        label: 'Radar Telemetri',
        description: 'Status pipeline T+1 KSEI & BEI live',
        href: '#overview',
      },
      {
        label: 'Metrik Kuantitatif',
        description: 'Akurasi data 99.8% & Wyckoff Phase Engine',
        href: '#overview',
      },
    ],
  },
  {
    label: 'Fondasi Nilai',
    href: '#values',
    items: [
      {
        label: 'Quantitative Rigor',
        description: 'Model matematika inferensial & risiko terukur',
        href: '#values',
      },
      {
        label: 'Data Transparency',
        description: 'Visibilitas tanpa sensor transaksi broker & KSEI',
        href: '#values',
      },
      {
        label: 'Market Intelligence',
        description: 'Pelacakan Wyckoff & graf kepemilikan UBO',
        href: '#values',
      },
      {
        label: 'The Avenia Way',
        description: '3 pilar metodologi objektif bebas sensasi',
        href: '#values',
      },
    ],
  },
  {
    label: 'Katalog Proyek',
    href: '#projects',
    items: [
      {
        label: 'The Invest Owl',
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
        label: 'SMtracker (BandarAI)',
        description: 'Hidden Markov Model engine & Wyckoff scanner',
        href: site.smtracker,
        external: true,
        badge: 'GitHub',
      },
      {
        label: 'OWLEXIA Legal AI',
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
    label: 'Metodologi',
    href: '#methodology',
    items: [
      {
        label: 'Bandarmologi Matrix',
        description: 'Volume-weighted flow & deteksi crossing',
        href: '#methodology',
      },
      {
        label: 'Wyckoff Recognition',
        description: 'Pemetaan siklus akumulasi & markup otomatis',
        href: '#methodology',
      },
      {
        label: 'Foreign Flow Shock',
        description: 'Pemisahan lonjakan asing dari transaksi ritel',
        href: '#methodology',
      },
    ],
  },
  {
    label: 'Kepemilikan KSEI',
    href: '#ownership',
    items: [
      {
        label: 'Simulasi Radar Mutasi',
        description: 'Laporan kepemilikan saham bulanan >5%',
        href: '#ownership',
      },
      {
        label: 'Jejaring UBO BEI',
        description: 'Struktur pemilik manfaat akhir emiten',
        href: '#ownership',
      },
    ],
  },
  {
    label: 'Riset & Risalah',
    href: '#insights',
    items: [
      {
        label: 'Featured Insights',
        description: 'Kajian investigasi data jurnalisme publik',
        href: '#insights',
      },
      {
        label: 'Data Dispatch',
        description: 'Laporan riset mingguan langsung di inbox',
        href: '#dispatch',
      },
      {
        label: 'Komunitas Telegram',
        description: 'Diskusi analitik kuantitatif bersama praktisi',
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

export const values = [
  {
    num: '// VALUE_01',
    title: 'Quantitative Rigor',
    desc: 'Kalkulasi algoritmik, model regresi Gaussian HMM, dan batasan risiko deterministik mengeliminasi bias emosional subyektif dalam analisis pergerakan saham likuid.',
    icon: 'shield',
  },
  {
    num: '// VALUE_02',
    title: 'Data Transparency',
    desc: 'Visibilitas tanpa sensor terhadap transaksi broker, laporan kepemilikan KSEI bulanan >5%, serta parameter akumulasi foreign flow tanpa heuristik tertutup.',
    icon: 'database',
  },
  {
    num: '// VALUE_03',
    title: 'Market Intelligence',
    desc: 'Pelacakan sindikasi bandarmologi, pengenalan siklus struktural Wyckoff otomatis, dan pengungkapan jejaring graf kepemilikan penerima manfaat akhir (UBO).',
    icon: 'sparkles',
  },
];

export const bento = [
  {
    id: 'methodology',
    size: 'large',
    badge: 'Fondasi Empiris',
    title: 'Pedoman Data Tanpa Kompromi',
    desc: 'Setiap investigasi, grafik, dan artikel bertolak dari dataset resmi (KSEI, IDX, BPS, Mahkamah Agung) yang teraudit, dapat diverifikasi, dan terbuka untuk diunduh publik.',
    stat: '100%',
    statLabel: 'Open Verifiable Data',
    icon: 'database',
  },
  {
    id: 'viz',
    size: 'medium',
    badge: 'M3 Expressive Viz',
    title: 'Visualisasi Realita Tajam',
    desc: 'Bukan sekadar chart statis. Visualisasi dinamis mengungkap dinamika konsentrasi modal, zona perangkap ritel, dan anomali regulasi secara intuitif.',
    stat: 'T+10',
    statLabel: 'Real Microstructure Sync',
    icon: 'chart',
  },
  {
    id: 'ethics',
    size: 'small',
    badge: 'Objektivitas Murni',
    title: 'Tanpa Sensasi, Tanpa Afiliasi',
    desc: 'Bebas dari clickbait finansial dan spekulasi emosional. Riset kami murni berpijak pada matematika, kalkulasi inferensial, dan fakta hukum.',
    stat: '0%',
    statLabel: 'Sponsored Noise',
    icon: 'shield',
  },
];

export const categories = [
  {
    key: 'all',
    label: 'Semua Proyek',
    count: 5,
  },
  {
    key: 'quant',
    label: 'Pasar Modal & Quant',
    count: 2,
  },
  {
    key: 'legal',
    label: 'Legal AI & Ingestion',
    count: 2,
  },
  {
    key: 'platform',
    label: 'Bot & Automation',
    count: 1,
  },
];

export type Project = {
  name: string;
  slug: string;
  category: 'quant' | 'legal' | 'platform';
  isDeployed: boolean;
  liveUrl?: string | null;
  communityUrl?: string | null;
  repoUrl?: string | null;
  targetUrl: string;
  actionText: string;
  stack: string[];
  year: string;
  badge: string;
  featured: boolean;
  tag: string;
  summary: string;
};

export const projects: Project[] = [
  {
    name: 'The Invest Owl',
    slug: 'investowl',
    category: 'quant',
    isDeployed: true,
    liveUrl: 'https://investowl.avenia.my.id/',
    communityUrl: 'https://t.me/theinvestowl_id',
    repoUrl: 'https://github.com/aryarifki/investowl',
    targetUrl: 'https://investowl.avenia.my.id/',
    actionText: 'Luncurkan Web App',
    stack: [
      'Next.js 16',
      'FastAPI',
      'Python 3.10+',
      'PostgreSQL',
      'Redis L1/L2',
      'Tailwind CSS v4',
    ],
    year: '2026',
    badge: 'Flagship Platform',
    featured: true,
    tag: 'Pasar Modal & BEI',
    summary:
      'Platform riset institusional kuantitatif menganalisis Bandarmologi (Smart Money Flow) dan Foreign Flow saham BEI dengan model Gaussian HMM dan Impulse Response Functions.',
  },
  {
    name: 'O-Crawler',
    slug: 'ocrawler',
    category: 'legal',
    isDeployed: true,
    liveUrl: 'https://ocrawler.avenia.my.id/',
    repoUrl: 'https://github.com/aryarifki/O-Crawler',
    targetUrl: 'https://ocrawler.avenia.my.id/',
    actionText: 'Buka Portal O-Crawler',
    stack: [
      'FastAPI',
      'PostgreSQL',
      'Cloudflare R2',
      'Anti-WAF curl_cffi',
      'WebSocket GUI',
    ],
    year: '2026',
    badge: 'High-Speed Ingestion',
    featured: true,
    tag: 'Big Data & Legal',
    summary:
      'Engine ingestion regulasi hukum berkekuatan tinggi melahap peraturan.go.id, putusan Mahkamah Agung, dan Mahkamah Konstitusi RI dengan TLS impersonation dan GUI modern.',
  },
  {
    name: 'SMtracker (BandarAI)',
    slug: 'smtracker',
    category: 'quant',
    isDeployed: false,
    liveUrl: null,
    repoUrl: 'https://github.com/aryarifki/SMtracker',
    targetUrl: 'https://github.com/aryarifki/SMtracker',
    actionText: 'Periksa Source Code',
    stack: [
      'Python 3.10+',
      'Playwright',
      'scikit-learn',
      'PostgreSQL',
      'Telegram Bot API',
    ],
    year: '2025',
    badge: 'Quantitative Engine',
    featured: false,
    tag: 'Bandarmology & AI',
    summary:
      'Pipeline data kuantitatif mengaudit akumulasi smart-money, menjalankan Wyckoff scanner otomatis, dan self-healing database 5 pilar dengan asisten bot Telegram.',
  },
  {
    name: 'OWLEXIA Legal AI',
    slug: 'owlexia',
    category: 'legal',
    isDeployed: false,
    liveUrl: 'https://owlexia.avenia.my.id/',
    repoUrl: 'https://github.com/aryarifki/owlexia',
    targetUrl: 'https://github.com/aryarifki/owlexia',
    actionText: 'Spesifikasi & Kode Sumber',
    stack: [
      'Python',
      'LLM Reasoner',
      'Agentic AI',
      'Vector Search',
      'Legal Informatics',
    ],
    year: '2026',
    badge: 'Agentic Intelligence',
    featured: false,
    tag: 'Informatika Hukum',
    summary:
      'Agen kecerdasan hukum otonom untuk penalaran hierarki perundang-undangan Indonesia, penelusuran yurisprudensi MA/MK, dan audit kepatuhan regulasi.',
  },
  {
    name: 'Avenia Workers',
    slug: 'avenia-workers',
    category: 'platform',
    isDeployed: true,
    liveUrl: 'https://t.me/avaworkers_bot',
    repoUrl: 'https://github.com/aryarifki/OSX',
    targetUrl: 'https://t.me/avaworkers_bot',
    actionText: 'Buka Bot Telegram (@avaworkers_bot)',
    stack: [
      'Telegram Bot API',
      'Cloudflare Workers',
      'Python',
      'OSX Automation',
      'Telemetry',
    ],
    year: '2026',
    badge: 'Active Telegram Bot',
    featured: false,
    tag: 'Bot & Otomasi',
    summary:
      'Bot Telegram asinkronus dan edge worker terdistribusi untuk alert telemetri saham IDX, notifikasi putusan hukum baru, dan ringkasan riset pasar otomatis.',
  },
];

export const kseiMutations = [
  {
    entity: 'INSTITUTIONAL_ALPHA',
    type: 'DOMESTIC',
    mutation: '+4.85M SHARES',
    status: 'ACCUM',
    statusClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    entity: 'FOREIGN_CUSTODY_A',
    type: 'FOREIGN',
    mutation: '+12.10M SHARES',
    status: 'ACCUM',
    statusClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    entity: 'SYNDICATE_NET_B',
    type: 'MIXED',
    mutation: 'MUTATION SHIFT',
    status: 'MAPPED',
    statusClass: 'text-peach-400 bg-peach-500/10 border-peach-500/20',
  },
  {
    entity: 'CONGLOMERATE_HOLDING',
    type: 'UBO NODE',
    mutation: 'PARENT RESTRUCTURE',
    status: 'TRACKED',
    statusClass: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
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
      { label: 'Fondasi Nilai', href: '#values' },
      { label: 'Katalog Proyek', href: '#projects' },
      { label: 'Metodologi Algoritmik', href: '#methodology' },
      { label: 'Kepemilikan KSEI', href: '#ownership' },
      { label: 'Kajian Riset Data', href: '#insights' },
    ],
  },
  {
    title: 'Ekosistem Rekayasa',
    links: [
      { label: 'The Invest Owl', href: site.investowl, external: true },
      { label: 'O-Crawler', href: site.ocrawler, external: true },
      { label: 'SMtracker (BandarAI)', href: site.smtracker, external: true },
      { label: 'OWLEXIA Legal AI', href: site.owlexia, external: true },
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
      { label: 'Dataset Terbuka KSEI', href: '#ownership' },
      { label: 'Korpus Regulasi MA & MK', href: site.ocrawler, external: true },
      { label: 'Metodologi Empiris', href: '#values' },
      { label: 'Data Dispatch Mingguan', href: '#dispatch' },
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
