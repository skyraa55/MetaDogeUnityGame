export const LINKS = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.zenithstudio.metadoge",
  x: "https://x.com/metadogeunity",
  youtube: "https://www.youtube.com/@MetaDogeUnity",
  telegram: "#",
  discord: "#",
};

export const TOKEN = {
  symbol: "$MU",
  supply: "10,000,000,000",
  chain: "BNB Chain",
  contract: "0x8adDDd53a259AE69b86825CA1F1f2c3ece9ABc78",
};

export const CHARACTERS = [
  {
    id: "01",
    name: "IRONBEARD",
    codename: "Heavy Soldier",
    class: "Heavy Assault",
    weapon: "Incendiary Launcher",
    image: "/assets/characters/heavy-soldier.png",
    accent: "yellow",
    bio: "Front-line demolitions specialist. Soaks damage, clears cover, and turns choke points into kill zones.",
    stats: { armor: 92, speed: 45, firepower: 80 },
  },
  {
    id: "02",
    name: "VOLT",
    codename: "Tech Soldier",
    class: "Recon Specialist",
    weapon: "Plasma Rail Rifle",
    image: "/assets/characters/tech-soldier.png",
    accent: "yellow",
    bio: "Battlefield scanner and drone handler. Feeds the squad live intel before the first shot is fired.",
    stats: { armor: 60, speed: 78, firepower: 70 },
  },
  {
    id: "03",
    name: "BRAMBLE",
    codename: "Green Fighter",
    class: "Field Scout",
    weapon: "Frag Charges",
    image: "/assets/characters/green-fighter.png",
    accent: "green",
    bio: "Guerrilla-trained skirmisher built for close-quarters chaos and explosive entries.",
    stats: { armor: 55, speed: 88, firepower: 65 },
  },
  {
    id: "04",
    name: "CRIMSON",
    codename: "Red Trooper",
    class: "Vanguard",
    weapon: "Pulse Cannon",
    image: "/assets/characters/red-trooper.png",
    accent: "purple",
    bio: "Powered-armor striker engineered for sustained frontal assaults on hostile territory.",
    stats: { armor: 85, speed: 60, firepower: 88 },
  },
  {
    id: "05",
    name: "REAPER-9",
    codename: "Skull Cyborg",
    class: "Shadow Operative",
    weapon: "Boom Fist Modules",
    image: "/assets/characters/skull-cyborg.png",
    accent: "purple",
    bio: "Rogue cybernetic unit running on salvaged combat firmware. Efficient. Unforgiving.",
    stats: { armor: 78, speed: 70, firepower: 92 },
  },
];

export const REWARDS = [
  {
    icon: "🎮",
    title: "Daily Login",
    amount: "5 $MU / day",
    desc: "Log in and stay active.",
    note: "One eligible claim per day.",
  },
  {
    icon: "🎁",
    title: "First-Time Registration",
    amount: "50 $MU",
    desc: "One-time welcome reward for eligible new players.",
    note: "One reward per unique player / account.",
  },
  {
    icon: "🏆",
    title: "Multiplayer Wins",
    amount: "100 $MU",
    desc: "For every 10 legitimate multiplayer wins.",
    note: "Verified match results only.",
  },
  {
    icon: "🤝",
    title: "Referrals",
    amount: "50 $MU / referral",
    desc: "Referral must use your unique link or code and complete onboarding.",
    note: "Max 50,000 $MU.",
  },
  {
    icon: "🔫",
    title: "Kill-to-Earn",
    amount: "1 kill = 1 $MU",
    desc: "Kills must come from legitimate gameplay.",
    note: "Max 5,000 $MU.",
  },
  {
    icon: "📱",
    title: "Screenshot Content",
    amount: "300 $MU / week",
    desc: "10 original gameplay screenshots per week.",
    note: "Must tag the official project account.",
  },
  {
    icon: "🎥",
    title: "Video Content",
    amount: "400 $MU / week",
    desc: "10 original short gameplay videos per week.",
    note: "Re-uploaded or copied content does not qualify.",
  },
  {
    icon: "🏆",
    title: "Weekly Tournaments",
    amount: "1,000 $MU / participation",
    desc: "Register and participate in the official weekly tournament.",
    note: "Extra rewards available for top performers.",
  },
];

export const AMBASSADOR_STEPS = [
  { n: "01", title: "Join", desc: "Join the official MetaDogeUnity community." },
  { n: "02", title: "Register", desc: "Register for the Ambassador Program." },
  { n: "03", title: "Get Your ID", desc: "Receive your unique Ambassador ID and referral link." },
  { n: "04", title: "Contribute", desc: "Play, create, refer and compete." },
  { n: "05", title: "Submit", desc: "Submit your activity through the official tracking system." },
  { n: "06", title: "Earn", desc: "Activity is verified and eligible $MU rewards are distributed." },
];

export const CORE_FEATURES = [
  {
    title: "Multiplayer",
    desc: "Compete against other players in fast-paced matches.",
  },
  {
    title: "Skill-Driven",
    desc: "Aim, movement, positioning and strategy matter.",
  },
  {
    title: "Kill-to-Earn",
    desc: "Supported gameplay mechanics connect player performance with on-chain rewards.",
  },
  {
    title: "$MU Economy",
    desc: "$MU provides the token layer supporting the MetaDogeUnity ecosystem.",
  },
];

export const NAV_LINKS = [
  { label: "Gameplay", href: "#gameplay" },
  { label: "Characters", href: "#characters" },
  { label: "$MU", href: "#token" },
  { label: "Ambassador", href: "#ambassador" },
  { label: "Community", href: "#community" },
];
