import { ICreator } from "public/catalog/loader";

export const CreatorsProjectSorter = {
  sort(creators: Array<ICreator>) {
    const projectsFlatMapWithCreators = creators.flatMap((c) => {
      return c.projects.map((p) => {
        return { project: p, creator: c };
      });
    });

    const fariProjects = ["charge", "dash", "breathless", "firelights"];
    const fariApprovedProjects = [
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
    ].sort((a, b) => {
      return Math.random() - 0.5;
    });

    const featuredProjects = [...fariProjects, ...fariApprovedProjects]
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
