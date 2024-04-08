import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Categories",
      items: [
        {
          title: "Cloud",
          href: "/cloud",
          description: "Free Cloud Resources. Hosting, BaaS, Domains and More",
        },

        {
          title: "Design",
          href: "/design",
          description: "Free resources for designers and developers. Fonts, Illustrations, Colors, Icons and More",
        },

        {
          title: "Dev",
          href: "/dev",
          description: "Free resources for developers of all kinds. APIs, CI/CD, QA, Testing and More",
        },

        {
          title: "Web",
          href: "/web",
          description: "Free Resources for Web Developers. Icons, Templates, Design Systems and much more.",
        }
      ],
    },
  ],

  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
          disabled: true,
        },
      ],
    },
  ],

  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
