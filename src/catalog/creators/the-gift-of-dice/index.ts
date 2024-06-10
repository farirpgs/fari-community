import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "The Gift of Dice",
    description:
      "I am Gabriel Caetano (they/them), and I am a queer, Latine parent, TRPG creator, audio professional, and game facilitator (aka GM) from Brazil. The Gift of Dice is the playful name I chose to publish my art. I create role-playing games, as well as TTRPG-adjacent experiences.",
    links: {
      Mastodon: "https://dice.camp/@thegiftofgabes",
      Twitter: "https://twitter.com/TheGiftOfGabes",
      "Itch.io": "https://thegiftofdice.itch.io/",
      "Ko-Fi": "https://ko-fi.com/thegiftofgabes",
    },
  };
}
