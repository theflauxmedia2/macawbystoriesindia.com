import {
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  DEFAULT_OG_IMAGE,
  SOCIAL_PROFILES,
  LOCATIONS,
  absoluteUrl,
} from './siteConfig';

type LocationKey = keyof typeof LOCATIONS;

function postalAddress(location: (typeof LOCATIONS)[LocationKey]) {
  return {
    '@type': 'PostalAddress',
    streetAddress: location.streetAddress,
    addressLocality: location.addressLocality,
    addressRegion: location.addressRegion,
    postalCode: location.postalCode,
    addressCountry: 'IN',
  };
}

export function buildRestaurantSchema(locationKey: LocationKey) {
  const location = LOCATIONS[locationKey];
  const path = `/locations#${location.slug}`;

  return {
    '@type': ['Restaurant', 'BarOrPub', 'NightClub'],
    '@id': `${SITE_URL}/#restaurant-${location.slug}`,
    name: location.name,
    description: location.description,
    url: absoluteUrl(path),
    image: location.image,
    telephone: location.telephone,
    priceRange: '$$$',
    servesCuisine: [...location.servesCuisine],
    areaServed: location.areaServed.map((name) => ({ '@type': 'Place', name })),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop seating', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Live music', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'DJ nights', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full bar', value: true },
    ],
    acceptsReservations: true,
    currenciesAccepted: 'INR',
    paymentAccepted: ['Cash', 'Credit Card', 'UPI'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: locationKey === 'bengaluru' ? '01:00' : '23:30',
      },
    ],
    address: postalAddress(location),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(location.streetAddress + ', ' + location.addressLocality)}`,
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: [DEFAULT_OG_IMAGE, LOCATIONS.chennai.image],
    sameAs: [...SOCIAL_PROFILES],
  };
}

export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Rooftop restaurants with live music, nightlife and multi-cuisine dining in AECS Layout, Bengaluru and Sholinganallur (OMR), Chennai.',
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildGlobalSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildRestaurantSchema('bengaluru'),
      buildRestaurantSchema('chennai'),
    ],
  };
}

export function buildWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildLocationsPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Macaw by Stories Locations',
    description:
      'Macaw by Stories rooftop restaurants with live music in AECS Layout near Singasandra, Hosur Road, Bengaluru and Sholinganallur on OMR, Chennai.',
    url: absoluteUrl('/locations'),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: { '@id': `${SITE_URL}/#restaurant-bengaluru` },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: { '@id': `${SITE_URL}/#restaurant-chennai` },
        },
      ],
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: absoluteUrl(path),
    image: imageUrl,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-IN',
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildSchemaGraph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
