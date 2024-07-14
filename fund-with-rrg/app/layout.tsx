import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get me a Lassi",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />

          <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="relative h-full w-full bg-black">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              </div>
              <div className="absolute top-0 h-[100vh] w-[100vw] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
              </div>
            </div>
          </div>

          <div className="min-h-[calc(100vh-200px)] text-white">
            {children}
          </div>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
