---
author: Dragan Pecanac
pubDatetime: 2023-02-18T05:01:53Z
title: Ded Pong - Devlong
postSlug: ded-pong
featured: true
draft: true
tags:
  - unity
  - game development
ogImage: ""
description: A well-written description to go here.
---

AstroPaper is a highly customizable Astro blog theme. With AstroPaper, you can customize everything according to your personal taste. This article will explain how you can make some customizations easily in the config file.

## Table of contents

## Configuring SITE

Another important configurations lies in `src/config.ts` file. Within that file, you'll see the `SITE` object where you can specify your website's main configurations.

Here are SITE configuration options

| Options            | Description                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ogImage`          | Your default OG image for the site. Useful for social media sharing. OG images can be an external image url or they can be placed under `/public` directory. |

## Configuring logo or title

You can specify site's title or logo image in `src/config.ts` file.

![An arrow pointing at the website logo](https://res.cloudinary.com/noezectz/v1663911318/astro-paper/AstroPaper-logo-config_goff5l.png)

```js
// file: src/config.ts
export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
```

## Configuring social links

You can configure your own social links along with its icons.

![An arrow pointing at social link icons](https://res.cloudinary.com/noezectz/v1663914759/astro-paper/astro-paper-socials_tkcjgq.png)

Currently 20 social icons are supported. (Github, LinkedIn, Facebook etc.)

You can specify and enable certain social links in hero section and footer. To do this, go to `/src/config.ts` and then you'll find `SOCIALS` array of object.

```js
// file: src/config.ts
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  ...
]
```

You have to set specific social link to `active: true` in order to appear your social links in hero and footer section. Then, you also have to specify your social link in `href` property.

For instance, if I want to make my Github appear, I'll make it like this.

```js
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing", // update account link
    linkTitle: `${SITE.title} on Github`, // this text will appear on hover and VoiceOver
    active: true, // makre sure to set active to true
  }
  ...
]
```

Another thing to note is that you can specify the `linkTitle` in the object. This text will display when hovering on the social icon link. Besides, this will improve accessibility and SEO. AstroPaper provides default link title values; but you can replace them with your own texts.

For example,

```js
linkTitle: `${SITE.title} on Twitter`,
```

to

```js
linkTitle: `Follow ${SITE.title} on Twitter`;
```

## Conclusion

This is the brief specification of how you can customize this theme. You can customize more if you know some coding. For customizing styles, please read [this article](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/). Thanks for reading.✌🏻
