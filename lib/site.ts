const defaultEmail = "khun@kmaadvisory.com.au";
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || defaultEmail;
const emailHref = `mailto:${email}`;
const bookingHref =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "/contact";
const hasExternalBooking = bookingHref.startsWith("http");

export const site = {
  name: "KMA Advisory",
  url: configuredUrl.replace(/\/+$/, ""),
  description:
    "English and Burmese accounting support being prepared for clients across Australia.",
  areaServed: "Australia",
  languages: ["English", "Burmese"] as const,
  locale: "en_AU",
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || "",
  email,
  emailHref,
  bookingHref,
  primaryCtaLabel: "Book Now",
  shortCtaLabel: "Book Now",
  hasVerifiedEmail: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()),
  hasExternalBooking,
  credential: {
    title: "Certified Public Accountant (CPA)",
    issuer: "CPA Australia",
    issued: "Issued Jun 2026",
    id: "09C060726XF82175",
    imageSrc: "/images/cpaaustralia_logo.jpeg",
    imageAlt: "CPA Australia",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Me" },
  { href: "/news", label: "News/Resources" },
  { href: "/contact", label: "Contact" },
] as const;
