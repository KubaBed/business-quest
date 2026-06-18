import type { Metadata } from "next";
import "@fontsource-variable/outfit";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "businessQuest — HR Consulting & Leadership Development",
  description:
    "Wspieramy firmy technologiczne, e-commerce i kancelarie w budowaniu skutecznych zespołów i liderów. Relacje. Wyniki. Wzrost.",
  openGraph: {
    title: "businessQuest — HR Consulting & Leadership Development",
    description:
      "Warsztaty liderskie, konsulting HR, webinary i programy rozwojowe dla nowoczesnych organizacji.",
    locale: "pl_PL",
    type: "website",
    url: "https://businessquest.pl",
  },
  icons: {
    icon: "/images/logo-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
