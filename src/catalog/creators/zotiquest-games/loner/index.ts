import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Loner",
    description: "A solo RPG system based on Freeform Universal",
    license: "CC BY SA 4.0",
    links: {
      "itch.io": "https://zeruhur.itch.io/loner-2nd-edition",
    },
    headingFont: "Oswald",
    textFont: "Montserrat",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

    article p {
        font-family: 'Montserrat';
    }
    article h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald';
    }
    `,
  };
}
