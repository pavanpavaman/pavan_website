import type { Metadata } from "next";
import { Permanent_Marker, Patrick_Hand } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B Pavan Kumar | Machine Learning Engineer",
  description:
    "Innovative Machine Learning Engineer specialized in building end-to-end AI-driven applications, Agentic RAG systems, Computer Vision models, and cross-platform mobile solutions.",
  keywords: [
    "Machine Learning",
    "AI",
    "Deep Learning",
    "Flutter",
    "Python",
    "LangChain",
    "Computer Vision",
    "RAG",
    "GPT-4",
  ],
  authors: [{ name: "B Pavan Kumar" }],
  openGraph: {
    title: "B Pavan Kumar | Machine Learning Engineer",
    description:
      "Innovative Machine Learning Engineer specialized in building end-to-end AI-driven applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} ${patrickHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
