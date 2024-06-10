import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Jesse Ross",
    links: {
      twitter: "https://twitter.com/jesseross",
      Website: "https://jesseross.com/",
    },
  };
}
