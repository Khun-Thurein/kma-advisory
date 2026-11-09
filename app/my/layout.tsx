import { Noto_Sans_Myanmar } from "next/font/google";

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["600"],
  display: "swap",
  preload: true,
  variable: "--font-myanmar-title",
});

export default function BurmeseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={notoSansMyanmar.variable}>{children}</div>;
}
