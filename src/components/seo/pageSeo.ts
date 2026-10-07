import { keywordSets } from './keywordSets';
import { DEFAULT_OG_IMAGE, CHENNAI_OG_IMAGE, SITE_NAME } from './siteConfig';

const suffix = ` | ${SITE_NAME}`;

export const pageSeo = {
  home: {
    title: `Rooftop Restaurant & Live Music in Bangalore & Chennai${suffix}`,
    description:
      'Rooftop restaurants with live music & nightlife in AECS Layout, Bengaluru and Sholinganallur (OMR), Chennai. North Indian, Asian, continental, pizza & cocktails. Book a table.',
    path: '/',
    keywords: keywordSets.home,
    ogImage: DEFAULT_OG_IMAGE,
  },
  about: {
    title: `About Us — Luxury Rooftop Dining & Nightlife${suffix}`,
    description:
      'The story behind Macaw by Stories — luxury rooftop restaurants in Bengaluru and Chennai where fine dining, craft cocktails, live music and nightlife come together.',
    path: '/about-us',
    keywords: keywordSets.about,
    ogImage: DEFAULT_OG_IMAGE,
  },
  locations: {
    title: `Rooftop Restaurants in AECS Layout, Bengaluru & OMR, Chennai${suffix}`,
    description:
      'Find Macaw by Stories near Singasandra on Hosur Road, Bengaluru and in Sholinganallur on OMR, Chennai. Rooftop dining, live music, late-night dinners & parties. Get directions.',
    path: '/locations',
    keywords: keywordSets.locations,
    ogImage: DEFAULT_OG_IMAGE,
  },
  gallery: {
    title: `Gallery — Rooftop Restaurant, Food & Nightlife Photos${suffix}`,
    description:
      'Photos of Macaw by Stories — rooftop dining, cocktails, food, live music and party nights at our restaurants in AECS Layout, Bengaluru and Sholinganallur (OMR), Chennai.',
    path: '/gallery',
    keywords: keywordSets.gallery,
    ogImage: DEFAULT_OG_IMAGE,
  },
  packages: {
    title: `Birthday & Party Packages in Bangalore (AECS Layout)${suffix}`,
    description:
      'Party and birthday packages at our rooftop restaurant near Singasandra, Hosur Road, Bengaluru. From ₹1099/person, min 25 guests. North Indian, Chinese, pizza & pasta menus.',
    path: '/packages',
    keywords: keywordSets.packages,
    ogImage: DEFAULT_OG_IMAGE,
  },
  chennaiPackages: {
    title: `Party & Birthday Packages in OMR, Chennai — Coming Soon${suffix}`,
    description:
      'Party packages are coming soon to Macaw by Stories, Sholinganallur (OMR). Call us now to book birthday parties, group dining and corporate celebrations in Chennai.',
    path: '/chennai-packages',
    keywords: keywordSets.chennaiPackages,
    ogImage: CHENNAI_OG_IMAGE,
  },
  media: {
    title: `Media, Press & Blog — News & Stories${suffix}`,
    description:
      'Press coverage and blog stories from Macaw by Stories — news from The Hindu, Economic Times & more about our rooftop restaurants on Hosur Road, Bengaluru and OMR, Chennai.',
    path: '/media',
    keywords: keywordSets.media,
    ogImage: DEFAULT_OG_IMAGE,
  },
  contact: {
    title: `Book a Table — Rooftop Restaurant in Bangalore & Chennai${suffix}`,
    description:
      'Reserve a table at Macaw by Stories in AECS Layout, Bengaluru or Sholinganallur, OMR, Chennai — for date nights, birthday parties, live music nights and private dining.',
    path: '/contact',
    keywords: keywordSets.contact,
    ogImage: DEFAULT_OG_IMAGE,
  },
  notFound: {
    title: `Page Not Found${suffix}`,
    description: 'The page you are looking for could not be found. Explore Macaw by Stories rooftop bars in Bangalore and Chennai.',
    path: '/404',
    noIndex: true,
  },
} as const;

export const blogSlugs = [
  '5-must-try-cocktails-at-macaw',
  'behind-the-design-the-story-of-our-tropical-paradise',
  'how-to-host-the-perfect-corporate-event-in-bangalore',
  'spotlight-on-our-signature-sushi-platters',
  'weekend-vibes-best-times-to-visit-macaw-chennai',
  'the-art-of-rooftop-entertainment',
] as const;
