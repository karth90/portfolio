import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Karthik Sundar - Senior Data Scientist & AI/ML Expert",
  description: "Portfolio of Karthik Sundar, a Senior Data Scientist with expertise in AI/ML, product analytics, and data-driven innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
