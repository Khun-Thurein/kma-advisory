import type { Metadata } from "next";
import { Manrope, Noto_Sans_Myanmar } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["600"],
  display: "swap",
  preload: true,
  variable: "--font-myanmar-title",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Burmese-Speaking Accountant Australia | KMA Advisory",
    template: "%s | KMA Advisory",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: site.allowIndexing,
    follow: site.allowIndexing,
    googleBot: {
      index: site.allowIndexing,
      follow: site.allowIndexing,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: "Burmese-Speaking Accountant Australia | KMA Advisory",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KMA Advisory — English and Burmese accounting support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burmese-Speaking Accountant Australia | KMA Advisory",
    description: site.description,
    images: ["/opengraph-image"],
  },
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${manrope.variable} ${notoSansMyanmar.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className={`${manrope.className} flex min-h-full flex-col bg-paper font-sans text-ink`}>
        <LanguageProvider>
          <StructuredData />
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white focus:translate-y-0"
          >
            Skip to main content
          </a>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
