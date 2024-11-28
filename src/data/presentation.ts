type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jessymunene9@gmail.com",
  title: "Hi, I’m Jesse 👋",
  // profile: "/profile.webp",
  description:
    "Hi, i'm a Kenyan frontend developer* with over *3 years* of web experience. I am currently working with *javascript*. I love experiementing with legacy web frameworks such as* react* and newones like Astro optimized for building fast, content-driven websites.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/jesse-waweru-98442813b",
    },
    {
      label: "Github",
      link: "https://github.com/munenejesse",
    },
  ],
};

export default presentation;
