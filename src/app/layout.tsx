import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Harsha Deesigns - Wall Textures & Decorative Finishes | Anand, Gujarat",
  description: "Transforming spaces with creative wall textures, vibrant decorative paints, and flawless wood finishes for interiors and exteriors that inspire. Where protection meets fascination in every stroke.",
  keywords: "wall textures, decorative paint, wood polish, duco paint, stucco finish, lime plaster, texture work, Harsha Deesigns, Anand Gujarat, interior design, exterior finishes",
  authors: [{ name: "Harsha Deesigns" }],
  openGraph: {
    title: "Harsha Deesigns - Wall Textures & Decorative Finishes",
    description: "Where protection meets fascination in every stroke. Transforming spaces with creative wall textures and vibrant decorative paints.",
    url: "https://harshadeesigns.in",
    siteName: "Harsha Deesigns",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 