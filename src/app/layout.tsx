import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henry Truong Portfolio",
  description: "Created using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={inter.className}>
        <header className="sticky top-0 z-10 px-5 py-4 bg-gray-100">
          <NavBar />
        </header>
        <main className="w-full min-h-screen px-5 text-gray-900 bg-gray-100">
          {children}
        </main>
        <footer className="px-5 py-10 bg-gray-100">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
