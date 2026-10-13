import type { Metadata } from "next";
import "@fontsource-variable/outfit";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import { services } from "@/data/services";

// Do menu trafia tylko to, co potrzebne - pełna treść usług nie ląduje w JS każdej strony.
const navServices = services.map(({ id, slug, name, tagline }) => ({
  id,
  slug,
  name,
  tagline,
}));

export const metadata: Metadata = {
  metadataBase: new URL("https://businessquest.pl"),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <MotionProvider>
          <Navbar services={navServices} />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
