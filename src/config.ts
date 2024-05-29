import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.toonstorytime.me/", // replace this with your deployed domain
  author: "Cartoon Kritthapath Yaviraj",
  desc: "ToonNongAeoy's Personal Blog.",
  title: "ToonStoryTime (ToonNongAeoy)'s Blog.",
  name: "ToonStoryTime (ToonNongAeoy)",
  ogImage: "web-thumbnail.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "th", // html lang code. Set this empty and default will be "en"
  langTag: ["th-TH"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/toonnongaeoy",
    linkTitle: ` ${SITE.name} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://fb.com/toonstorytime",
    linkTitle: `${SITE.name} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/toonnongaeoy",
    linkTitle: `${SITE.name} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/toonnongaeoy",
    linkTitle: `${SITE.name} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@toonstorytime.me",
    linkTitle: `Send an email to ${SITE.name}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/toonnongaeoy",
    linkTitle: `${SITE.name} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/toonstorytime",
    linkTitle: `${SITE.name} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@toonstorytime",
    linkTitle: `${SITE.name} on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/409324079326167043",
    linkTitle: `${SITE.name} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/toonnongaeoy/",
    linkTitle: `${SITE.name} on Steam`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.name} on Mastodon`,
    active: false,
  },
];
