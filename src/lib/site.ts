export const siteConfig = {
  name: "BuildwithRivers",
  description:
    "Building the tech community across Rivers State through learning, collaboration and innovation.",
  url: "https://talent-tribe-red.vercel.app",
  donateUrl: "https://atcafrica.com/donate",
  joinFormUrl: "https://forms.gle/m3oWFHVtvTGbd29Z9",
  supportEmail: "support@talenttribe.com",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Blog", href: "/blog" },
  { label: "Chapters", href: "/chapters" },
  { label: "Events", href: "/events" },
];

export const footerNav = {
  navigate: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Blog", href: "/blog" },
    { label: "Chapters", href: "/chapters" },
    { label: "Events", href: "/events" },
  ],
  programs: [
    { label: "SheInnovates", href: "/community#sheinnovates" },
    { label: "BuildWithOyo", href: "/community#buildwithoyo" },
    { label: "Technical Series", href: "/community#technical-series" },
    { label: "Hackathons", href: "/events" },
    { label: "Mentorship", href: "/community" },
  ],
  connect: [
    { label: "Become A Member", href: "/become-member" },
    { label: "Login", href: "/login" },
    { label: "Donate For a Talent", href: siteConfig.donateUrl },
  ],
};

export const partners = [
  { name: "3MTT", logo: "/images/partners/3mtt.jpg" },
  { name: "Cirvee", logo: "/images/partners/cirvee.png" },
  { name: "CMX Ibadan", logo: "/images/partners/cmx-ibadan.jpg" },
  { name: "Cortouch Media", logo: "/images/partners/cortouch-media.png" },
  { name: "Ekoss360", logo: "/images/partners/ekoss360.jpeg" },
  { name: "GDG Ladoke", logo: "/images/partners/gdg-ladoke.jpg" },
  { name: "GDG Ogbomoso", logo: "/images/partners/gdg-ogbomoso.jpg" },
  { name: "GDG UI", logo: "/images/partners/gdg-ui.png" },
  { name: "GDG", logo: "/images/partners/gdg.jpg" },
  { name: "GDG Ibadan", logo: "/images/partners/gdg-ibadan.jpg" },
  {
    name: "Growth Hackers Africa",
    logo: "/images/partners/growth-hackers-africa.jpg",
  },
  { name: "Ibadan Tech Expo", logo: "/images/partners/ibadan-tech-expo.jfif" },
  { name: "Interswitch", logo: "/images/partners/interswitch.png" },
  { name: "Larva", logo: "/images/partners/larva.png" },
  { name: "Looped", logo: "/images/partners/looped.jpg" },
  { name: "Microsoft", logo: "/images/partners/microsoft.png" },
  { name: "Notzero", logo: "/images/partners/notzero.jpg" },
  { name: "Oyo State", logo: "/images/partners/oyo-state.jpg" },
  { name: "Safenet", logo: "/images/partners/safenet.jpeg" },
  { name: "SEBS", logo: "/images/partners/sebs.png" },
  { name: "She Innovate", logo: "/images/partners/she-innovate.png" },
  { name: "SkyGrid", logo: "/images/partners/skygrid.jpg" },
  { name: "SQI College of ICT", logo: "/images/partners/sqi-college.png" },
  { name: "Talenxify", logo: "/images/partners/talenxify.png" },
  { name: "Tech Cabal", logo: "/images/partners/tech-cabal.gif" },
  { name: "The CM Guide", logo: "/images/partners/the-cm-guide.png" },
  { name: "Varsity Scape", logo: "/images/partners/varsity-scape.png" },
  { name: "Zeeh Africa", logo: "/images/partners/zeeh-africa.jpg" },
  { name: "Techpoint Africa", logo: "/images/partners/techpoint-africa.png" },
  {
    name: "Oluseun Onigbinde RC",
    logo: "/images/partners/oluseun-onigbinde-rc.jpg",
  },
];

export const communityNiches = [
  { label: "Web3 & Blockchain", count: "500+" },
  { label: "AI & Machine Learning", count: "1000+" },
  { label: "Product & Design", count: "3000+" },
  { label: "Founders & Startups", count: "200+" },
  { label: "Open Source", count: "300+" },
];

export const communityStats = [
  { label: "Total Members", value: "1,200+" },
  { label: "Events Hosted", value: "10+" },
  { label: "Active Chapters", value: "12+" },
  { label: "Partner Orgs", value: "30+" },
];

export const programs = [
  {
    status: "COMPLETED",
    kind: "Initiative",
    tag: "WOMEN IN TECH",
    title: "SheInnovates",
    description:
      "A dedicated initiative designed to empower women and bridge the gender gap in the technology sector.",
    image: "/images/mission.png",
    href: "/community#sheinnovates",
  },
  {
    status: "COMPLETED",
    kind: "Annual Program",
    tag: "FLAGSHIP ANNUAL",
    title: "BuildWithOyo",
    description:
      "Our flagship annual program focused on discovering, developing, and nurturing tech talent across Oyo State.",
    image: "/images/buildwithoyo.jpg",
    href: "/community#buildwithoyo",
  },
  {
    status: "COMPLETED",
    kind: "Monthly",
    tag: "MONTHLY SESSIONS",
    title: "Technical Series",
    description:
      "A dedicated monthly program featuring live, hands-on sessions providing the practical experience needed to build, innovate, and grow.",
    image: "/images/teambg.png",
    href: "/community#technical-series",
  },
];

export const chapters = [
  {
    status: "MAIN CHAPTER",
    name: "Ibadan",
    members: "1500+ members",
    active: true,
  },
  {
    status: "GROWTH CHAPTER",
    name: "Ogbomoso",
    members: "1000+ members",
    active: true,
  },
  {
    status: "EMERGING CHAPTER",
    name: "Oyo Town",
    members: "500+ members",
    active: true,
  },
  {
    status: "NEW CHAPTER",
    name: "Iseyin",
    members: "500+ members",
    active: true,
  },
  { status: "UPCOMING", name: "Saki", members: "Coming soon", active: false },
  {
    status: "UPCOMING",
    name: "Eruwa",
    members: "Coming soon",
    active: false,
  },
];

export const galleryImages = [
  { src: "/images/ttheroimage.png", label: "COMMUNITY EVENT" },
  { src: "/images/chapters.jpg", label: "HACKATHON" },
  { src: "/images/firstbgr.png", label: "WORKSHOP" },
  { src: "/images/mission.png", label: "SHE INNOVATES" },
  { src: "/images/buildwithoyo.jpg", label: "BUILDWITHOYO" },
  { src: "/images/teambg.png", label: "TECH SERIES" },
];

export const startupCategories = [
  { key: "startups", label: "Startups", emoji: "🚀" },
  { key: "workspaces", label: "Workspaces", emoji: "🏢" },
  { key: "communities", label: "Communities", emoji: "🤝" },
] as const;

export const ecosystemEntries = [
  {
    category: "startups" as const,
    name: "TechVenture Labs",
    description:
      "Building innovative software solutions for African markets with focus on fintech and logistics.",
    focus: ["FinTech", "Logistics", "Software Development"],
    location: "Ibadan, Oyo State",
    website: "https://techventure.example.com",
    email: "hello@techventure.com",
    phone: "+234 801 234 5678",
  },
  {
    category: "startups" as const,
    name: "AgriTech Innovations",
    description:
      "Revolutionizing agriculture through technology, connecting farmers directly to markets.",
    focus: ["AgriTech", "E-commerce", "Mobile Apps"],
    location: "Ibadan, Oyo State",
    website: "https://agritech.example.ng",
    email: "info@agritech.ng",
    phone: "+234 802 345 6789",
  },
  {
    category: "startups" as const,
    name: "HealthFlow Digital",
    description:
      "Providing digital health solutions and telemedicine services across Nigeria.",
    focus: ["HealthTech", "Telemedicine", "AI/ML"],
    location: "Ibadan, Oyo State",
    website: "https://healthflow.example.ng",
    email: "contact@healthflow.ng",
    phone: "+234 803 456 7890",
  },
  {
    category: "startups" as const,
    name: "EdubaTech Solutions",
    description:
      "Creating accessible educational technology for students across Africa.",
    focus: ["EdTech", "Online Learning", "Web Development"],
    location: "Ibadan, Oyo State",
    website: "https://edubatech.example.com",
    email: "hello@edubatech.com",
    phone: "+234 804 567 8901",
  },
  {
    category: "workspaces" as const,
    name: "Innovation Hub Ibadan",
    description:
      "State-of-the-art co-working space designed for startups and entrepreneurs with high-speed internet and collaborative environment.",
    focus: ["Co-working", "Mentorship", "Networking"],
    members: "150+ members",
    location: "Bodija, Ibadan",
    website: "https://innovationhub.example.com",
    email: "hello@innovationhub.com",
    phone: "+234 805 678 9012",
  },
  {
    category: "workspaces" as const,
    name: "TechHub Ibadan",
    description:
      "Premium workspace equipped with modern facilities for tech professionals and teams to collaborate and innovate.",
    focus: ["Office Space", "Events", "Training"],
    members: "200+ members",
    location: "Akanbi Road, Ibadan",
    website: "https://techhub-ibadan.example.com",
    email: "info@techhub-ibadan.com",
    phone: "+234 806 789 0123",
  },
  {
    category: "workspaces" as const,
    name: "Startup Village Oyo",
    description:
      "Community-driven workspace providing affordable office space and resources for emerging startups and small tech businesses.",
    focus: ["Affordable Rates", "Community", "Resources"],
    members: "80+ members",
    location: "GRA, Ibadan",
    website: "https://startupvillage.example.com",
    email: "support@startupvillage.com",
    phone: "+234 807 890 1234",
  },
  {
    category: "communities" as const,
    name: "Ibadan Tech Meetup",
    description:
      "Monthly gatherings of tech enthusiasts, developers, and entrepreneurs to share knowledge and network.",
    focus: ["Networking", "Knowledge Sharing", "Meetups"],
    members: "500+ members",
    location: "Various venues in Ibadan",
    website: "https://ibadantech.example.com",
    email: "organizers@ibadantech.com",
    phone: "+234 808 901 2345",
  },
  {
    category: "communities" as const,
    name: "Women In Tech Ibadan",
    description:
      "Supporting and empowering women in technology through workshops, mentorship, and community building.",
    focus: ["Women Empowerment", "Mentorship", "Workshops"],
    members: "300+ members",
    location: "Ibadan, Oyo State",
    website: "https://wiibadan.example.com",
    email: "hello@wiibadan.com",
    phone: "+234 809 012 3456",
  },
  {
    category: "communities" as const,
    name: "Ibadan Developer Community (IDC)",
    description:
      "Vibrant community of software developers collaborating on projects and sharing best practices.",
    focus: ["Web Dev", "Mobile Dev", "Open Source"],
    members: "400+ members",
    location: "Ibadan, Oyo State",
    website: "https://idc-ibadan.example.com",
    email: "contact@idc-ibadan.com",
    phone: "+234 810 123 4567",
  },
  {
    category: "communities" as const,
    name: "Youth Entrepreneurship Forum",
    description:
      "Dedicated to nurturing young entrepreneurs and providing them with resources to build scalable businesses.",
    focus: ["Entrepreneurship", "Startups", "Youth Development"],
    members: "250+ members",
    location: "Ibadan, Oyo State",
    website: "https://yef-ibadan.example.com",
    email: "support@yef-ibadan.com",
    phone: "+234 811 234 5678",
  },
];

export const blogPosts = [
  {
    slug: "from-backend-engineering-to-trustworthy-ai",
    category: "INNOVATION",
    featured: true,
    title: "From Backend Engineering to Trustworthy AI",
    subtitle: "Oluwatosin Akande Builds, Researches and Gives Back",
    author: "Talent Tribe",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    image: "/images/aboutfr.png",
    excerpt:
      "Oluwatosin Akande's journey from backend engineering into trustworthy AI research shows what's possible when Oyo tech talent commits to both building and giving back to the community.",
  },
];

export const events = [
  {
    slug: "building-and-scaling-beyond-skills",
    status: "UPCOMING",
    title: "Building & Scaling: Beyond Skills",
    date: "Friday, September 18, 2026",
    time: "06:00 PM",
    location: "X Space (Twitter)",
  },
];
