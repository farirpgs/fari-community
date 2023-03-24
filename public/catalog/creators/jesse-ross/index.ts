import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Jesse Ross",
    links: {
      twitter: "https://twitter.com/jesseross",
      website: "https://jesseross.com/",
    },
  };
}
