export type Album = {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: any;
  songs: Song[];
};

export type Song = {
  id: number;
  title: string;
  artist: string;
  duration: string;
};

export const albums: Album[] = [
  {
    id: "after-hours",
    title: "After Hours",
    artist: "The Weeknd",
    description: "Album • 2020",
    image: require("@/assets/images/image_1.jpg"),

    songs: [
      {
        id: 1,
        title: "Alone Again",
        artist: "The Weeknd",
        duration: "4:10",
      },
      {
        id: 2,
        title: "Too Late",
        artist: "The Weeknd",
        duration: "3:59",
      },
      {
        id: 3,
        title: "Hardest To Love",
        artist: "The Weeknd",
        duration: "3:31",
      },
      {
        id: 4,
        title: "Scared To Live",
        artist: "The Weeknd",
        duration: "3:11",
      },
    ],
  },

  {
    id: "utopia",
    title: "UTOPIA",
    artist: "Travis Scott",
    description: "Album • 2023",
    image: require("@/assets/images/image_2.jpg"),

    songs: [
      {
        id: 1,
        title: "HYAENA",
        artist: "Travis Scott",
        duration: "3:42",
      },
      {
        id: 2,
        title: "THANK GOD",
        artist: "Travis Scott",
        duration: "3:04",
      },
      {
        id: 3,
        title: "MODERN JAM",
        artist: "Travis Scott",
        duration: "4:15",
      },
      {
        id: 4,
        title: "MY EYES",
        artist: "Travis Scott",
        duration: "4:11",
      },
    ],
  },

  {
    id: "views",
    title: "Views",
    artist: "Drake",
    description: "Album • 2016",
    image: require("@/assets/images/image_3.jpg"),

    songs: [
      {
        id: 1,
        title: "Keep The Family Close",
        artist: "Drake",
        duration: "5:28",
      },
      {
        id: 2,
        title: "9",
        artist: "Drake",
        duration: "4:15",
      },
      {
        id: 3,
        title: "U With Me?",
        artist: "Drake",
        duration: "4:57",
      },
    ],
  },

  {
    id: "graduation",
    title: "Graduation",
    artist: "Kanye West",
    description: "Album • 2007",
    image: require("@/assets/images/image_4.jpg"),

    songs: [
      {
        id: 1,
        title: "Good Morning",
        artist: "Kanye West",
        duration: "3:15",
      },
      {
        id: 2,
        title: "Champion",
        artist: "Kanye West",
        duration: "2:48",
      },
      {
        id: 3,
        title: "Stronger",
        artist: "Kanye West",
        duration: "5:12",
      },
    ],
  },
];