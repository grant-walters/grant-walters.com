import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const bayon = localFont({
  src: "./fonts/Bayon-Regular.ttf",
  variable: "--font-bayon",
  weight: "100 900",
});

export const metadata = {
  title: "Grant Walters",
  description: "Professional Software Engineer Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bayon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
