import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Anirudh Kuppili",
  description: "Anirudh Kuppili's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        {/* Google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT-Sans&display=swap"
            rel="stylesheet"
          />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
