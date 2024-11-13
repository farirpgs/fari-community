/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "https://keeper.farirpgs.com",
        permanent: false,
      },
      {
        source: "/browse",
        destination: "https://keeper.farirpgs.com",
        permanent: false,
      },
      {
        source: "/creators/:creatorSlug",
        destination: "https://keeper.farirpgs.com/creators/:creatorSlug",
        permanent: false,
      },
      {
        source: "/creators/:creatorSlug/projects/:projectSlug",
        destination:
          "https://keeper.farirpgs.com/resources/:creatorSlug/:projectSlug",
        permanent: false,
      },
      {
        source: "/creators/:creatorSlug/projects/:projectSlug/:pageSlug",
        destination:
          "https://keeper.farirpgs.com/resources/:creatorSlug/:projectSlug/:pageSlug",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
