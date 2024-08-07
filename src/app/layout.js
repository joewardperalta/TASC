import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Apostolic Sanctuary of Canada",
  description:
    "Apostolic Sanctuary of Canada is a apostolic pentecostal oneness church.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/church-logo.png" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
