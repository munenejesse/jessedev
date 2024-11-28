export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "meeet",
    techs: ["css"," display properties"],
    link: "https://thriving-arithmetic-e5aba8.netlify.app/",
  },
  {
    title: "product card",
    techs: ["tailwind","javascript",],
    link: "https://starlit-crumble-c697ce.netlify.app/",
  },
  {
    title: "HotelMenu App",
    techs: ["javascript", "tailwind",],
    link: "https://github.com/MaeWolff/dictionary-app",
    isComingSoon: true,
  },
  {
    title: "montevista Website",
    techs: ["figma", "wordpress", "elementor"],
    link: "https://montevista.co.ke/",
    isComingSoon: false,
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro", "TypeScript"],
    link: "#",
    isComingSoon: false,
  },
];

export default projects;
