import { ICreator } from "public/catalog/loader";

export const CreatorsProjectSorter = {
  sort(creators: Array<ICreator>) {
    const projectsFlatMapWithCreators = creators.flatMap((c) => {
      return c.projects.map((p) => {
        return { project: p, creator: c };
      });
    });

    const fariRPGsProjects = ["charge", "dash", "breathless", "firelights"];
    const fariRecommendedProjects = [
      "blades",
      "lumen",
      "24xx",
      "push",
      "trophy",
      "bad time",
      "resistance",
      "motif",
      "tricube",
      "guided by the sun",
      "fate condensed",
      "fate accelerated",
      "fate core",
      "hopes & dreams",
      "liminal horror",
      "carta",
      "grove system",
      "harmony drive",
      "hints and hijinx",
    ];
    const currentDateOfTheMonth = new Date().getDate();
    const shuffledFariRecommendedProjects = shuffleWithSeed(
      fariRecommendedProjects,
      currentDateOfTheMonth
    );
    const featuredProjects = [
      ...fariRPGsProjects,
      ...shuffledFariRecommendedProjects,
    ]
      .map((p) => p.toLowerCase())
      .reverse();

    const result = projectsFlatMapWithCreators.sort(function (a, b) {
      const aProjectName = (a.project.data?.name ?? "").toLowerCase();
      const bProjectName = (b.project.data?.name ?? "").toLowerCase();

      return (
        featuredProjects.findIndex((p) => {
          return bProjectName.includes(p);
        }) -
        featuredProjects.findIndex((p) => {
          return aProjectName.includes(p);
        })
      );
    });
    return result;
  },
};

function shuffleWithSeed<T>(array: Array<T>, seed: number) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  seed = seed || 1;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
