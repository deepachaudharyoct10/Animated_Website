// Content sourced verbatim from https://www.murec.com/ (home page).
// Centralized here so components stay presentation-only.

import logoMurec from '../assets/images/logo-murec.webp'
import logoMadhusudan from '../assets/images/logo-madhusudan.webp'
import association01 from '../assets/images/association-01.webp'
import association02 from '../assets/images/association-02.webp'
import association03 from '../assets/images/association-03.webp'
import association04 from '../assets/images/association-04.webp'
import association05 from '../assets/images/association-05.webp'
import partnerBobby from '../assets/images/partner-bobby-mukherrji.webp'
import partnerGoonmeet from '../assets/images/partner-goonmeet-ji.webp'
import brandBobby from '../assets/images/brand-bobby-mukherrji.png'
import brandGoonmeet from '../assets/images/brand-goonmeet-ji.png'

export const brand = {
  name: 'MUREC',
  fullName: 'Madhusudan Urban Real Estate Collection',
  logo: logoMurec,
}

export const navLinks = [
  { label: 'Home', href: 'https://murec.com/' },
  { label: 'About Us', href: 'https://murec.com/about.php' },
  { label: 'Our Legacy', href: 'https://murec.com/legacy.php' },
  { label: 'The MUREC Collection', href: 'https://murec.com/Forest-Walk.php' },
  { label: 'Careers', href: 'https://murec.com/career.php' },
  { label: 'Media (News and Insights)', href: 'https://murec.com/news.php' },
  { label: 'Blogs', href: 'https://murec.com/Blog.php' },
  { label: 'Contact Us', href: 'https://murec.com/contact.php' },
]

export const hero = {
  eyebrowNumber: '78',
  eyebrowSuffix: '+',
  eyebrowLabel: 'Years of Legacy',
  logo: logoMadhusudan,
  cta: { label: 'Learn More', href: 'https://murec.com/about.php' },
  // Original background video, streamed directly from murec.com and lazy-loaded on view.
  videoSrc: 'https://murec.com/images/Vid2.mp4',
}

// Reusable alternating "story" sections — Legacy, Principles, Collection, Design Philosophy.
export const storySections = [
  {
    id: 'legacy',
    eyebrow: 'Our Foundation',
    heading: 'THE LEGACY',
    highlight: 'BEYOND COMPARE',
    body: 'For over seven decades, we stood for perseverance, integrity, and nation-building through enterprise. Every step was guided by one oath: quality before profit, trust before everything.',
    cta: { label: 'Our History', href: 'https://murec.com/legacy.php' },
    videoSrc: 'https://murec.com/images/m1.mp4',
  },
  {
    id: 'principles',
    eyebrow: 'What Guides Us',
    heading: 'LIVING BY',
    highlight: 'PRINCIPLES',
    body: 'MUREC is guided by values that shape every decision—building trust, delivering quality, practicing transparency, and embracing innovation as the foundation of everything we create.',
    cta: { label: 'Explore More', href: 'https://murec.com/principles.php' },
    videoSrc: 'https://murec.com/images/v2.mp4',
  },
  {
    id: 'collection',
    eyebrow: 'The Portfolio',
    heading: 'MUREC',
    highlight: 'COLLECTION',
    body: 'A portfolio shaped by legacy and guided by vision, the MUREC Collection is where every project reflects our way of building.',
    cta: { label: 'Discover More', href: 'https://murec.com/Forest-Walk.php' },
    videoSrc: 'https://murec.com/images/v3.mp4',
  },
  {
    id: 'philosophy',
    eyebrow: 'Built Responsibly',
    heading: 'IGBC CERTIFIED',
    highlight: 'DESIGN PHILOSOPHY',
    body: 'The first MUREC collection is envisioned to align with the IGBC certification standards, reflecting a commitment to responsible development. From efficient resource planning to healthier living environments, the project integrates sustainability as a core design principle, thoughtfully, quietly, and with long-term impact in mind.',
    cta: { label: 'Discover More', href: 'https://murec.com/Design-Philosophy.php' },
    videoSrc: 'https://murec.com/images/home.mp4',
  },
]

export const associationsHeading = 'Our Associations'

export const associations = [
  { src: association01, alt: 'Associate organization logo' },
  { src: association02, alt: 'Associate organization logo' },
  { src: association03, alt: 'Associate organization logo' },
  { src: association04, alt: 'Associate organization logo' },
  { src: association05, alt: 'Associate organization logo' },
]

export const testimonialsHeading = 'From our Partners'

export const testimonials = [
  {
    name: 'Bobby Mukherrji',
    photo: partnerBobby,
    brandLogo: brandBobby,
    quote: "We are engaged to conceptualize the interiors for Murec's clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: 'Goonmeet Ji',
    photo: partnerGoonmeet,
    brandLogo: brandGoonmeet,
    quote: 'We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark—an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning to shape a premium high-rise environment of enduring character and aspiration.',
  },
]

export const ctaBand = {
  heading: 'Get in Touch',
  body: "Looking to collaborate, invest, or simply know more? Reach out and let's connect.",
  cta: { label: 'Contact Us', href: 'https://murec.com/contact.php' },
}

export const footer = {
  heading: 'The MUREC Team',
  address: 'Madhusudan, 2nd Floor, Riana Towers, 51-52, Noida Sector 136, Uttar Pradesh - 201301',
  email: 'info@murec.com',
  phone: '+91 97177 73229',
  disclaimer:
    'This website is purely conceptual and not a legal document. All layouts, specifications, amenities, and visuals are subject to change as may be decided by MUREC or the competent authority. No information herein shall be construed as an offer, solicitation, or invitation to purchase. Interested parties are requested to verify all details, including approvals, specifications, and prices, directly with MUREC before making any commitments.',
  copyright: 'Copyright © 2026',
  privacyPolicy: { label: 'Privacy Policy', href: 'https://murec.com/privacy-policy.php' },
  poweredBy: 'Powered by Propacity',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586724462166' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Murec_official' },
    { label: 'Instagram', href: 'https://www.instagram.com/murec_official/' },
  ],
}
