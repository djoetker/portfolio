import unsocial_media from "../assets/images/unsocial_media.png";
import save_space from "../assets/images/save_space.png";
import susanne_dicken from "../assets/images/susanne_dicken.png";
import rawmusic from "../assets/images/raw-music.png";


const projectDB = [
  {
    image: unsocial_media,
    imagetitle: "Unsocial Media",
    title: "Unsocial Media",
    description: "A social media platform where users can interact without the need for registration or user data. It provides basic functionality such as posting, commenting, searching for hashtags or words, and infinite scrolling to view posts.",
    link: "https://unsocial-media-frontend.onrender.com/",
    tags: ["React", "Node.js", "Express", "MongoDB", "Axios", "DOMpurify", "Infinite Scroll"]
  }, {
    image: save_space,
    imagetitle: "save space landing page",
    title: "Save Space",
    description: "URL shortening service with registration and an intermediate step where the user sees the destitation URL before being redirected.",
    link: "https://savespace-frontend-1.onrender.com/",
    tags: ["React", "Node.js", "Express", "MongoDB", "User Authentication", "JWT Token"]
  },
  {
    image: susanne_dicken,
    imagetitle: "susanne dicken landing page",
    title: "Susanne Dicken",
    description: "Helped to update the page with new content, standardize the design of each page and maintain the site and server.",
    link: "https://susanne-dicken.de/",
    tags: ["HTML", "CSS", "Wordpress", "Web Hosting"]
  },
  {
    image: rawmusic,
    imagetitle: "raw-music.org website design",
    title: "raw-music.org [WIP]",
    description: "Artist website for electronic music producer with a focus on minimalistic design and easy navigation. Shows links to social media and music platforms and has a self-made music player integrated with some unreleased music. Includes a moving generative art background.",
    link: "https://raw-music.org/",
    tags: ["Tailwind", "Next.js", "Typescript", "AWS S3 & Amplify", "Web Hosting", "P5.js"]
  },
];

export default projectDB; 