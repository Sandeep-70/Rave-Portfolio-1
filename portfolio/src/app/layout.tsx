import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Sandeep Kumar Singh | Software Developer Portfolio",
  description: "Full Stack Software Developer specializing in Java, Web Development, and Full Stack applications. Explore my projects, skills, and experience.",
  keywords: ["Software Developer", "Full Stack", "Java", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sandeep Kumar Singh" }],
  openGraph: {
    title: "Sandeep Kumar Singh | Software Developer",
    description: "Full Stack Software Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark text-white antialiased" suppressHydrationWarning>
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
