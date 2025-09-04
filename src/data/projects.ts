interface MediaItem {
  src: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  image: string;
  videos: MediaItem[];
  photos: MediaItem[];
}

export const projectItems: ProjectItem[] = [
  {
    id: "urban-fairytale",
    title: "URBAN FAIRYTALE",
    description: "EVERYDAY SCENES TRANSFORMED INTO MYTHICAL STORIES",
    subtitle: "HINTS OF MAGIC AMONG THE VEGGIE STANDS",
    image: "/projects/first/two.jpg",
    videos: [],
    photos: [
      { src: "/projects/first/two.jpg" },
      { src: "/projects/first/two-alt1.jpg" },
      { src: "/projects/first/two-alt2.jpg" },
    ],
  },
  {
    id: "street-serenity",
    title: "STREET SERENITY",
    description: "EVERYDAY MOMENTS BECOME CINEMATIC FRAMES",
    subtitle:
      "SHADOWS AND LIGHT WEAVING A MODERN MYTH SOFTER THAN SILK THE CITY SPEAKS",
    image: "/projects/first/one.jpg",
    videos: [],
    photos: [{ src: "/projects/first/one.jpg" }],
  },
  {
    id: "lost-in-the-crowd",
    title: "LOST IN THE CROWD",
    description: "SOLITUDE IN THE NOISE",
    subtitle: "A CALM MOMENT AMONG COUNTLESS FACES",
    image: "/projects/first/three.jpg",
    videos: [],
    photos: [
      { src: "/projects/first/three.jpg" },
      { src: "/projects/first/three-alt1.jpg" },
      { src: "/projects/first/three-alt2.jpg" },
      { src: "/projects/first/three-alt3.jpg" },
    ],
  },
  {
    id: "city-soul",
    title: "CITY SOUL",
    description: "MODERN-DAY MUSE, NAVIGATING URBAN LEGENDS",
    subtitle: "BOLD STEPS THROUGH NEON MEMORIES THE CITY IS HER STAGE",
    image: "/projects/first/four.jpg",
    videos: [
      { src: "/projects/first/video-bla.mp4" },
    ],
    photos: [
      { src: "/projects/first/four.jpg" },
      { src: "/projects/first/four-bts1.jpg" },
    ],
  },
];
