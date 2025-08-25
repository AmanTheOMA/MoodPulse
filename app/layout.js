import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fugaz_One } from "next/font/google";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Logout from "@/components/Logout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata = {
  title: "MoodPulse",
  description: "Track your mood, change your lifestyle",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          MoodPulse
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-500 duration-200  " + fugaz.className}>
        &apos;You are always learning about yourself&apos; - Aman
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <AuthProvider>
        <body
          className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  ${geistSans.variable} ${geistMono.variable} ${fugaz.variable} antialiased`}
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
