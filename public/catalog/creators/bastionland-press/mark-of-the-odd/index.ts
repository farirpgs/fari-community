import { IProjectData } from "public/catalog/loader";

export function getData(): IProjectData {
  return {
    name: "Mark of the Odd",
    description: "An SRD based on Into the Odd.",
    license: "Custom",
    links: {
      Website:
        "https://www.bastionland.com/2020/11/mark-of-odd-licence-and-srd.html",
      "Into the Odd":
        "https://freeleaguepublishing.com/en/store/?product_id=7749919539458",
      "Itch.": "https://chrismcdee.itch.io/",
    },
  };
}
