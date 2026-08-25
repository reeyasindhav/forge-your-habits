export type Habit = {
  id: string;
  name: string;
  detail: string;
  streak: number;
  best: number;
  done: boolean;
  category: "Movement" | "Mind" | "Focus" | "Rest" | "Craft";
  weekly: boolean[];
};

export const habits: Habit[] = [
  {
    id: "morning-movement",
    name: "Morning movement",
    detail: "20 min · Daily",
    streak: 12,
    best: 24,
    done: true,
    category: "Movement",
    weekly: [true, true, true, true, false, false, false],
  },
  {
    id: "read-reflect",
    name: "Read & reflect",
    detail: "15 min · Daily",
    streak: 8,
    best: 19,
    done: true,
    category: "Mind",
    weekly: [true, true, false, true, false, false, false],
  },
  {
    id: "deep-work",
    name: "Deep work block",
    detail: "90 min · Weekdays",
    streak: 5,
    best: 14,
    done: false,
    category: "Focus",
    weekly: [true, false, true, true, false, false, false],
  },
  {
    id: "evening-reset",
    name: "Evening reset",
    detail: "10 min · Daily",
    streak: 21,
    best: 21,
    done: false,
    category: "Rest",
    weekly: [true, true, true, false, false, false, false],
  },
  {
    id: "sketch-practice",
    name: "Sketch practice",
    detail: "25 min · Mon/Wed/Fri",
    streak: 3,
    best: 11,
    done: false,
    category: "Craft",
    weekly: [true, false, true, false, false, false, false],
  },
];

export type Challenge = {
  id: string;
  title: string;
  blurb: string;
  participants: number;
  days: number;
  progress: number;
  joined: boolean;
  image: string;
};

export const challenges: Challenge[] = [
  {
    id: "early-riser",
    title: "30 day early riser",
    blurb: "Wake before 6:30 and log your first hour.",
    participants: 2841,
    days: 30,
    progress: 18,
    joined: true,
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "no-scroll",
    title: "14 day no morning scroll",
    blurb: "Phone stays down for the first 60 minutes.",
    participants: 1206,
    days: 14,
    progress: 6,
    joined: true,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "run-club",
    title: "21 day slow run club",
    blurb: "Three easy kilometres, conversation pace.",
    participants: 934,
    days: 21,
    progress: 0,
    joined: false,
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "pages",
    title: "10 pages a night",
    blurb: "Paper only. Ten pages before lights out.",
    participants: 3510,
    days: 30,
    progress: 0,
    joined: false,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=70",
  },
];

export type Post = {
  id: string;
  author: string;
  avatar: string;
  handle: string;
  time: string;
  body: string;
  cheers: number;
  streak: number;
};

export const posts: Post[] = [
  {
    id: "p1",
    author: "Maya Okafor",
    handle: "@mayabuilds",
    avatar: "https://i.pravatar.cc/160?img=47",
    time: "18m",
    body: "Day 40 of morning pages. The first ten days were willpower, the rest has been momentum.",
    cheers: 128,
    streak: 40,
  },
  {
    id: "p2",
    author: "Theo Lindqvist",
    handle: "@theoruns",
    avatar: "https://i.pravatar.cc/160?img=12",
    time: "1h",
    body: "Missed yesterday for the first time in 3 weeks. Logging it, not spiralling about it. Back out at 6am.",
    cheers: 264,
    streak: 1,
  },
  {
    id: "p3",
    author: "Priya Raman",
    handle: "@priya.reads",
    avatar: "https://i.pravatar.cc/160?img=32",
    time: "3h",
    body: "The weekly grid finally turned fully green. Small steps really do compound.",
    cheers: 412,
    streak: 63,
  },
  {
    id: "p4",
    author: "Sam Ihara",
    handle: "@deepwork.sam",
    avatar: "https://i.pravatar.cc/160?img=68",
    time: "5h",
    body: "Pairing deep work with a 90 minute timer changed everything. No notifications, one task.",
    cheers: 97,
    streak: 22,
  },
];

export const leaderboard = [
  { name: "Priya Raman", streak: 63, avatar: "https://i.pravatar.cc/160?img=32" },
  { name: "Maya Okafor", streak: 40, avatar: "https://i.pravatar.cc/160?img=47" },
  { name: "Sam Ihara", streak: 22, avatar: "https://i.pravatar.cc/160?img=68" },
  { name: "Alex Morgan", streak: 12, avatar: "https://i.pravatar.cc/160?img=15" },
  { name: "Theo Lindqvist", streak: 1, avatar: "https://i.pravatar.cc/160?img=12" },
];

export const weeklyTrend = [
  { day: "Mon", done: 4, target: 5 },
  { day: "Tue", done: 5, target: 5 },
  { day: "Wed", done: 3, target: 5 },
  { day: "Thu", done: 4, target: 5 },
  { day: "Fri", done: 2, target: 5 },
  { day: "Sat", done: 3, target: 5 },
  { day: "Sun", done: 5, target: 5 },
];

export const monthlyTrend = [
  { week: "W1", rate: 62 },
  { week: "W2", rate: 71 },
  { week: "W3", rate: 68 },
  { week: "W4", rate: 84 },
  { week: "W5", rate: 91 },
];

/** Deterministic 5x30 heatmap: 0 missed, 1 partial, 2 complete */
export const heatmap: number[] = Array.from({ length: 150 }, (_, i) => (i * 7 + 3) % 5 === 0 ? 0 : (i * 5 + 1) % 3);

export const milestones = [
  { label: "First 7 days", date: "May 24", unlocked: true },
  { label: "Two weeks strong", date: "May 31", unlocked: true },
  { label: "21 day evening reset", date: "Jun 14", unlocked: true },
  { label: "30 day forge", date: "Locked", unlocked: false },
  { label: "100 day club", date: "Locked", unlocked: false },
];
