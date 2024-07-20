export const navItems = [
  { name: "Home", icon: "/home.svg", link: "" },
  { name: "About", icon: "/about.svg", link: "#about" },
  { name: "Tech Stacks", icon: "/tech.svg", link: "#tech" },
  { name: "Projects", icon: "/projects.svg", link: "#projects" },
  // { name: "Testimonials", icon: "/testi.svg", link: "#testimonials" },
  { name: "Experience", icon: "/experience.svg", link: "#experience" },
  // { name: "Contact", icon: "/contact.svg", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a range of SaaS applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BuildGuild",
    des: "A community platform that leverages LLM to connect people with like-minded peers to bring ideas to life!",
    img: "/buildguild.png",
    iconLists: [
      "/next.svg",
      "/ollama.svg",
      "/supabase.svg",
      "/fastapi.svg",
      "/tail.svg",
      "/ts.svg",
      "/shadcn.svg",
    ],
    link: null,
    github: "https://github.com/orgs/GarudaHacks-Hore/repositories",
  },
  {
    id: 2,
    title: "Artificier: AI Image Editing SaaS",
    des: "An image editing SaaS with AI features and a payments and credits system using the latest tech stack.",
    img: "/artificier.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.svg", "/clerk.svg"],
    link: "https://artificier.vercel.app/",
    github: "https://github.com/ceavinrufus/artificier",
  },
  {
    id: 3,
    title: "MovieHub: All Things Movies",
    des: "Dive into the world of cinema! Explore movie details, trailers, reviews, and recommendations—all in one place.",
    img: "/movie-hub.png",
    iconLists: ["/re.svg", "/css.svg", "/js.svg"],
    link: "https://movie-hub-website.netlify.app/",
    github: "https://github.com/ceavinrufus/movie-hub",
  },
  {
    id: 4,
    title: "Animek",
    des: "Explore the diverse realms of Anime magic. Built using server actions.",
    img: "/animek.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://animek-omega.vercel.app/",
    github: "https://github.com/ceavinrufus/animek/",
  },
  {
    id: 5,
    title: "Solar System Explorer",
    des: "Explore the wonders of our solar system with this captivating simulation of the planets using only CSS.",
    img: "/solar-system.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://ceavinrufus.github.io/solar-system-plain/",
    github: "https://github.com/ceavinrufus/solar-system-plain/",
  },
  // {
  //   id: 4,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/s.svg", "/clerk.svg"],
  //   link: "https://github.com/ceavinrufus/zoom-clone",
  // },
];

export const testimonials = [
  {
    quote:
      "If you're looking to enhance your digital presence and achieve top-tier results, Ceavin is the perfect collaborator.",
    avatar: "/anonymous.svg",
    name: "Anonymous",
  },
];

export const companies = [
  {
    id: 1,
    name: "telkom",
    img: "/telkom.svg",
  },
  {
    id: 2,
    name: "amsa indonesia",
    img: "/amsa-indonesia.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Engineer Intern",
    desc: "Contributed to the development of dashboard web applications using cutting edge technologies, such as VueJS, Prisma, and NestJS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Projects",
    desc: "Developed several mobile applications utilizing modern frameworks and technologies, such as React Native and Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Development",
    desc: "Successfully completed 5+ projects for diverse clients, delivering high-quality solutions on time and within budget.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web3 Projects",
    desc: "Building various Web3 projects, creating and developing smart contracts, and exploring decentralized technologies and blockchain integration.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://www.github.com/ceavinrufus",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.twitter.com/ceavinrufus",
    img: "/twit.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/ceavinrufus",
    img: "/link.svg",
  },
];
