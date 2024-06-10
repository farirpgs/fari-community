import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Gamenomicon",
    links: {
      Website: "https://www.gamenomicon.com/",
      "Itch.io": "https://gamenomicon.itch.io/",
      DriveThruRPG: "https://www.drivethrurpg.com/browse/pub/11735/Gamenomicon",
      Threads: "https://www.threads.net/@gamenomicon",
      Bluesky: "https://bsky.app/profile/gamenomicon.bsky.social",
      Twitter: "https://twitter.com/the_gamenomicon",
      Facebook: "https://www.facebook.com/Gamenomicon",
    },
  };
}
