// Shared content + types for the SparkFest 2026 landing page.

export const REGISTER_URL = "https://forms.gle/yJntfLmxigG75zSt5";

export type GoogleColor = "blue" | "red" | "yellow" | "green";

export const NAV_LINKS = [
  { label: "Highlights", href: "#highlights" },
  { label: "About", href: "#about" },
  { label: "Pre-Events", href: "#pre-events" },
  { label: "Program", href: "#program" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  tagline: ["Igniting Innovation.", "Building Impact.", "Empowering Communities."],
  eligibility: "Open to all PUP & inter-university students",
  primaryCta: "Register Now – It's Free",
  secondaryCta: "See How It Works",
};

export const ABOUT = {
  title: "Build the Spark. Become the Impact.",
  paragraphs: [
    {
      text: "SparkFest 2026 is the flagship hackathon of *Google Developer Groups on Campus PUP*. For three intense weeks, students from technical, creative, and managerial backgrounds team up to mirror a real startup environment — designing, building, and pitching solutions to challenges that actually matter.",
    },
    {
      text: "But we don't stop at the screen. Every build connects to a community. Through our *Community Impact Initiative*, the winning team's solution directly supports an underserved sector — from jeepney drivers to security personnel to your local barangay.",
    },
  ],
  quote: "“This isn't a competition for prizes. It's a movement for impact.”",
  stats: [
    { value: "?", label: "Participants" },
    { value: "?", label: "Teams" },
    { value: "?", label: "Communities reached" },
  ],
};

export const WHAT_GOES_DOWN: { title: string; desc: string; color: GoogleColor }[] = [
  {
    title: "Hackathon Proper",
    desc: "Form a team, pick a problem, and build a working solution to a real-world or community challenge.",
    color: "blue",
  },
  {
    title: "Mentorship Sessions",
    desc: "Get hands-on guidance from industry pros and technical experts who've actually been there.",
    color: "red",
  },
  {
    title: "Pitching Day",
    desc: "Finalist teams take the stage to pitch their solutions to judges and industry leaders.",
    color: "yellow",
  },
  {
    title: "Awarding Ceremony",
    desc: "Recognition, prizes, and the spotlight for standout teams and projects.",
    color: "green",
  },
  {
    title: "Networking",
    desc: "Connect with fellow builders, mentors, and industry partners who can open real doors.",
    color: "blue",
  },
  {
    title: "Community Impact",
    desc: "Your winning build becomes real change, adopted by an underserved community that needs it.",
    color: "red",
  },
];

export const PERSONAS: { label: string; color: GoogleColor }[] = [
  { label: "Developers", color: "blue" },
  { label: "Designers", color: "green" },
  { label: "Strategists", color: "yellow" },
  { label: "Innovators", color: "red" },
];

export type Judge = { name: string; role: string; color: GoogleColor };

export const JUDGES: Judge[] = [
  { name: "To Be Announced", role: "Industry Judge", color: "blue" },
  { name: "To Be Announced", role: "Technical Judge", color: "red" },
  { name: "To Be Announced", role: "Design Judge", color: "yellow" },
  { name: "To Be Announced", role: "Community Judge", color: "green" },
];

export const ROADMAP: {
  date: string;
  title: string;
  desc: string;
  color: GoogleColor;
}[] = [
  {
    date: "June 1 – 18, 2026",
    title: "Pre-Event Promotions",
    desc: "Follow us, hype it up, and get your squad ready.",
    color: "blue",
  },
  {
    date: "June 19, 2026",
    title: "Registration Opens",
    desc: "Lock in your spot. Free to join — first come, first-served.",
    color: "red",
  },
  {
    date: "June 28, 2026",
    title: "Kick-Off Program",
    desc: "The starting gun. Briefings, team-ups, and the challenge drop.",
    color: "yellow",
  },
  {
    date: "July 2, 2026",
    title: "First Submission Deadline",
    desc: "Your first checkpoint — submit your initial build.",
    color: "green",
  },
  {
    date: "July 3 – 6, 2026",
    title: "Workshops & Mentorship",
    desc: "Level up with expert-led sessions and 1-on-1 guidance.",
    color: "blue",
  },
  {
    date: "July 9, 2026",
    title: "Pitching, Judging & Awarding",
    desc: "The big day. Pitch, impress, and walk away a winner.",
    color: "red",
  },
];

export const WHERE_WHEN = {
  venue: "Bulwagang Bonifacio",
  address: "Polytechnic University of the Philippines (PUP) — Manila",
  dates: "June 28 – July 9, 2026",
  format: "On-site / In-person",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.13509793409537!2d121.01160318848683!3d14.59910131565349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd97a1439b%3A0x44e1b969e7f1f67a!2sPUP%20Main%20-%20A.%20Mabini%20Campus%2C%20Sta.%20Mesa%2C%20Manila!5e1!3m2!1sen!2sph!4v1782567551853!5m2!1sen!2sph",
};

export const FAQS = [
  {
    q: "Who can join SparkFest 2026?",
    a: "College students from all disciplines — at PUP and other universities. Developers, designers, innovators, entrepreneurs, and total first-timers are all welcome.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. SparkFest 2026 is completely free to join — no registration or participation fees.",
  },
  {
    q: "Do I need a team or coding experience?",
    a: "Neither is required. You can join solo and we'll help you find a team, and non-coders are essential to every great build — design, strategy, and storytelling all matter.",
  },
  {
    q: "What will my team actually build?",
    a: "A working solution to a real-world or community challenge, developed and refined over three weeks with mentor guidance, then pitched to judges.",
  },
  {
    q: "Where and when does it happen?",
    a: "The hackathon runs June 28 – July 9, 2026 at Bulwagang Bonifacio, PUP Manila, with hybrid pre-events leading up to it.",
  },
];

export const SNAP_FRAME = {
  title: "Sparky's Snap & Frame!",
  intro:
    "SparkFest 2026 comes with its own digital toolkit so you can show up, show off, and show the world you were there.",
  photobooth: {
    heading: "Proof you showed up and built something.",
    body: "The GDG Photobooth is your on-site, no-download, browser-based photo booth that is live at SparkFest 2026. Walk up, snap, and walk away with a snap that actually looks good. No more queue. Just you, your team, and a moment worth keeping.",
    cta: "Try the Photobooth",
  },
  dpFrame: {
    heading: "Show up before you even show up.",
    body: "Can't wait until July 9 to show your SparkFest energy? Don't. The GDG DP Frame lets you drop a SparkFest 2026 frame on your profile photo right now — self-serve, browser-based, and built to go live in under a minute. Upload. Frame. Post. Let your feed know you're in.",
    cta: "Get Your DP Frame",
  },
};

export const PRE_EVENTS: {
  title: string;
  tag: string;
  desc: string;
  color: GoogleColor;
}[] = [
  {
    title: "Sparkpulse: UXpedition",
    tag: "Design Workshop",
    desc: "Before you build, you have to understand the user. UXpedition is SparkFest 2026's pre-event workshop built for designers, developers, and anyone who's ever looked at an interface and thought — I could make this better. Walk away with the design thinking that separates good products from great ones.",
    color: "yellow",
  },
  {
    title: "Sparkpulse: Cumulus",
    tag: "Cloud & Build Session",
    desc: "You might be building something that could ship. Cumulus is SparkFest 2026's pre-event session for builders who want to go beyond the prototype. Learn how modern applications are actually built, deployed, and scaled through cloud technologies — real practices, real understanding of the stack.",
    color: "red",
  },
  {
    title: "Inkspire: Shaping Stories, Building Brands, Creating Impact",
    tag: "Comms & Branding",
    desc: "As the official voice and visual cornerstone of the organization, the GDG Communications Department — together with industry-level speakers — pulls back the curtain on how marketing and creative teams bridge the gap between complex technology and authentic human connection.",
    color: "blue",
  },
  {
    title: "TechTimeout: GDG Esports & Sparkrush",
    tag: "Community & Recreation",
    desc: "Feeling the weight of academic deadlines and organizational stress? TechTimeout is GDG on Campus PUP's recreational and engagement event designed to give you the ultimate break through fun, teamwork, and friendly competition — because sometimes the best debugging happens away from the screen.",
    color: "green",
  },
];

export const FINAL_CTA = {
  quote: "“Your idea could be the next big spark.”",
  lines: [
    "Three weeks. One team. A solution that lives on in a real community.",
    "Don't just watch it happen — build it.",
  ],
  cta: "Register Now – It's Free",
};

export const FOOTER = {
  title: "SparkFest 2026",
  tagline: "Bridging the gap between theory and practice.",
  org: "Google Developer Groups on Campus - Polytechnic University of the Philippines",
};

// Tailwind class maps for the four Google colors.
export const COLOR_TEXT: Record<GoogleColor, string> = {
  blue: "text-google-blue-500",
  red: "text-google-red-500",
  yellow: "text-google-yellow-500",
  green: "text-google-green-500",
};

export const COLOR_BG: Record<GoogleColor, string> = {
  blue: "bg-google-blue-500",
  red: "bg-google-red-500",
  yellow: "bg-google-yellow-500",
  green: "bg-google-green-500",
};

export const COLOR_BORDER: Record<GoogleColor, string> = {
  blue: "border-google-blue-500",
  red: "border-google-red-500",
  yellow: "border-google-yellow-500",
  green: "border-google-green-500",
};

export const COLOR_HEX: Record<GoogleColor, string> = {
  blue: "#4285f4",
  red: "#ea4335",
  yellow: "#fbbc04",
  green: "#34a853",
};
