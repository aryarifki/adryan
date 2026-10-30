/**
 * Central content source for the Avenia landing page.
 * Copy and links are migrated from the previous DVE site (data/site.json)
 * so the redesign keeps the real product identity.
 */

export const site = {
  name: 'Avenia',
  wordmark: 'avenia',
  domain: 'avenia.my.id',
  url: 'https://avenia.my.id',
  title: 'Avenia — Quantitative Market Intelligence',
  description:
    'Independent quantitative research for crypto and Indonesian equities. Auditable market flow, ownership telemetry, and regulatory intelligence in one desk.',
  tagline: 'Quantitative market intelligence, built on evidence.',
  year: 2026,
  investowl: 'https://investowl.avenia.my.id/',
  ocrawler: 'https://ocrawler.avenia.my.id/',
  telegram: 'https://t.me/theinvestowl_id',
  telegramHandle: '@theinvestowl_id',
  github: 'https://github.com/aryarifki',
  repo: 'https://github.com/aryarifki/adryan',
  workers: 'https://t.me/avaworkers_bot',
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
    label: 'Products',
    href: '#dashboard',
    items: [
      {
        label: 'InvestOwl',
        description: 'Smart-money telemetry for BEI',
        href: site.investowl,
        external: true,
        badge: 'Live',
      },
      {
        label: 'O-Crawler',
        description: 'Legal corpus ingestion engine',
        href: site.ocrawler,
        external: true,
        badge: 'Live',
      },
      {
        label: 'SM-Tracker',
        description: 'Wyckoff and flow research pipeline',
        href: site.smtracker,
        external: true,
      },
      {
        label: 'OWLEXIA',
        description: 'Agentic legal reasoning',
        href: site.owlexia,
        external: true,
      },
    ],
  },
  {
    label: 'Company',
    href: '#overview',
    items: [
      {
        label: 'About the desk',
        description: 'Method, mandate, and ownership',
        href: '#overview',
      },
      {
        label: 'The ecosystem',
        description: 'How the products connect',
        href: '#features',
      },
      {
        label: 'Contact',
        description: 'Talk to the research team',
        href: site.telegram,
        external: true,
      },
    ],
  },
  {
    label: 'Learn',
    href: '#features',
    items: [
      {
        label: 'Methodology',
        description: 'Evidence before narrative',
        href: '#features',
      },
      {
        label: 'Platform preview',
        description: 'A look inside the terminal',
        href: '#dashboard',
      },
      {
        label: 'Mobile desk',
        description: 'The market in your pocket',
        href: '#app',
      },
      {
        label: 'Reader notes',
        description: 'What the community says',
        href: '#testimonials',
      },
    ],
  },
  {
    label: 'Prices',
    href: '#cta',
    items: [
      {
        label: 'Open access',
        description: 'Public dashboards and research',
        href: '#cta',
      },
      {
        label: 'Pro desk',
        description: 'For funds and research teams',
        href: site.telegram,
        external: true,
      },
    ],
  },
];

export const partners = [
  { name: 'GitHub', icon: 'github' },
  { name: 'Next.js', icon: 'code' },
  { name: 'FastAPI', icon: 'zap' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Redis', icon: 'layers' },
  { name: 'Tailwind CSS', icon: 'sparkles' },
];

export const stats = [
  {
    value: '890+',
    label: 'Indexed securities',
    sub: 'IDX universe, synced T+1',
  },
  {
    value: '2,400+',
    label: 'Legal rulings',
    sub: 'MA & MK corpus, audited',
  },
  {
    value: '< 0.5ms',
    label: 'Cache latency',
    sub: 'Redis L1/L2 in-memory',
  },
];

export const features = [
  {
    icon: 'database',
    title: 'Auditable by design',
    description:
      'Every figure traces back to an official source — KSEI, IDX, MA, MK — with timestamps and lineage attached. No black-box signals.',
    number: '01',
    active: false,
  },
  {
    icon: 'lock',
    title: 'Secure by default',
    description:
      'Encrypted storage, tiered access, and zero-retention analytics. Your research stays yours, from ingestion to export.',
    number: '02',
    active: true,
  },
  {
    icon: 'sparkles',
    title: 'Institutional practice',
    description:
      'HMM regime models, impulse-response analysis, and Wyckoff structure — the same tools desks use, documented in the open.',
    number: '03',
    active: false,
  },
];

export const dashboardAssets = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    icon: 'bitcoin',
    price: '$67,412.80',
    change: '+4.82%',
    up: true,
    spark: [28, 36, 32, 48, 44, 61, 57, 72, 68, 84],
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
    icon: 'ether',
    price: '$3,284.10',
    change: '+2.14%',
    up: true,
    spark: [42, 38, 46, 44, 52, 49, 58, 55, 64, 61],
  },
  {
    name: 'Tether',
    ticker: 'USDT',
    icon: 'tether',
    price: '$1.0002',
    change: '+0.01%',
    up: true,
    spark: [50, 49, 51, 50, 50, 51, 49, 50, 50, 51],
  },
];

export const dashboardHistory = [
  {
    icon: 'arrow-down',
    title: 'Bought BTC',
    meta: '0.042 BTC · 2 min ago',
    amount: '-$2,840.00',
    positive: false,
  },
  {
    icon: 'arrow-up',
    title: 'Sold ETH',
    meta: '1.20 ETH · 1 hr ago',
    amount: '+$3,941.20',
    positive: true,
  },
  {
    icon: 'plus',
    title: 'USDT deposit',
    meta: '1,500 USDT · Yesterday',
    amount: '+$1,500.00',
    positive: true,
  },
];

/**
 * NOTE: testimonial copy is launch placeholder content. Replace the names,
 * roles, and quotes with verified endorsements before promoting the page.
 */
export const testimonials = [
  {
    quote:
      'Avenia is the first desk where I can trace a signal all the way back to the filing. That changes how I size a position.',
    name: 'Raka Pradana',
    role: 'Portfolio Manager · Jakarta',
    initials: 'RP',
    tone: 'peach',
  },
  {
    quote:
      'The KSEI flow view caught a distribution pattern our broker summaries had missed for two weeks. It paid for itself.',
    name: 'Sinta Maharani',
    role: 'Equity Research Lead',
    initials: 'SM',
    tone: 'violet',
  },
  {
    quote:
      'Legal corpus plus market data in one graph. Our compliance reviews went from days to hours, with a citation for every claim.',
    name: 'Bagas Nugroho',
    role: 'Legal Tech Engineer',
    initials: 'BN',
    tone: 'teal',
  },
  {
    quote:
      'No signals-as-magic. Everything is documented, reproducible, and honest about uncertainty. Rare in this market.',
    name: 'Nadia Kusuma',
    role: 'Quantitative Analyst',
    initials: 'NK',
    tone: 'blue',
  },
];

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About the desk', href: '#overview' },
      { label: 'The ecosystem', href: '#features' },
      { label: 'Platform preview', href: '#dashboard' },
      { label: 'Contact', href: site.telegram, external: true },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Methodology', href: '#features' },
      { label: 'Mobile desk', href: '#app' },
      { label: 'Reader notes', href: '#testimonials' },
      { label: 'Source code', href: site.repo, external: true },
    ],
  },
  {
    title: 'Individuals',
    links: [
      { label: 'InvestOwl', href: site.investowl, external: true },
      { label: 'O-Crawler', href: site.ocrawler, external: true },
      { label: 'SM-Tracker', href: site.smtracker, external: true },
      { label: 'Avenia Workers', href: site.workers, external: true },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Telegram community', href: site.telegram, external: true },
      { label: 'GitHub', href: site.github, external: true },
      { label: 'Report an issue', href: `${site.repo}/issues`, external: true },
      { label: 'Open access', href: '#cta' },
    ],
  },
];

export const socials = [
  { label: 'GitHub', href: site.github, icon: 'github' },
  { label: 'Telegram', href: site.telegram, icon: 'telegram' },
  { label: 'InvestOwl', href: site.investowl, icon: 'globe' },
  { label: 'O-Crawler', href: site.ocrawler, icon: 'database' },
];
