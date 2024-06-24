import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "When Suddenly! Games",
    links: {
      twitter: "https://twitter.com/whensuddengames",
      tiktok: "https://tiktok.com/whensuddenlygames",
      facebook: "https://facebook.com/whensuddenlygames",
    },
    description:
      "Indy game dev located in the Southern US who focuses on narrative driven TTRPGs.",
  };
}
