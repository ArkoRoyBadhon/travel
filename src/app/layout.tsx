import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Orgranized by Arko Roy Badhon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
