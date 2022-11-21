export interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface IContent {
  type: string;
  content: string;
}

export interface IPost {
  id: number;
  author: IAuthor;
  content: IContent[];
  publishedAt: Date;
}

export const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MariaEmiliaAlcantara.png",
      name: "Maria Emilia Alcantara",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa! 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-11-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa! 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#javascript" },
    ],
    publishedAt: new Date("2022-11-03 20:00:00"),
  },
];
