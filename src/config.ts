import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://www.dedryu.com/",
  author: "Dragan Pecanac",
  desc: "Dragan's game & software development blog, devlog, and portfolio website",
  title: "Dragan Pecanac",
  ogImage: "astropaper-og.jpg", //default OG img for site, useful for social media shring; can be external img URL or file placed in /public directory
  lightAndDarkMode: true, //if disabled, primary color scheme will be used, enabled by default
  postPerPage: 3, //how many pages will be displayed in each posts page
};

export const LOGO_IMAGE = {
  enable: false, //false = SITE.title will display as logo
  svg: true, //specify logo.png or logo.svg under /public/assets directory. only svg and png image file formats are supported; If your logo image is png file format, you have to set `LOGO_IMAGE.svg` => `false`
  width: 216, //It is recommended that you specify width and height of your logo image
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `Find ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dragan.pecanac",
    linkTitle: `Follow ${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dragan-pecanac",
    linkTitle: `Connect with ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dragan.pecanac@protonmail.ch",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ded_ryu",
    linkTitle: `Follow ${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/https://discordapp.com/users/771610528237879297",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/dragan-pecanac",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
