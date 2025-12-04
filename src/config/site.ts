export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Xiaohao Liu's Homepage",
  description: "Xiaohao Liu's Homepage",
  navItems: [
    {
      label: "Bio",
      href: "/",
    },
    {
      label: "Publications",
      href: "/pub",
    },
  ],
  navMenuItems: [
    {
      label: "Publications",
      href: "/pub",
    },
  ],
  links: {
    github: "https://github.com/Xiaohao-Liu",
    scholar: "https://scholar.google.com/citations?user=pIGIxewAAAAJ&hl=en",
    email: "mailto:xiaohao.liu@u.nus.edu",
  },
};
