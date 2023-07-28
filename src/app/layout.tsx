import { Aside } from "@/components/Aside/Aside";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify",
  description: "Find your favorite song",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-zinc-950 text-zinc-50 roboto.className ${roboto.className} overflow-hidden`}
      >
        {/* main content */}
        <div className="flex">
          <div>
            <Aside />
          </div>

          <div className="w-full min-w-[980px]">{children}</div>
        </div>

        <div className="sticky bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
