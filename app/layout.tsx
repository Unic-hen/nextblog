import type { Metadata } from "next";
import Button4Theme from "./components/Button4Theme";
import Logo from "./components/Logo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unic-chen",
  description: "website for unic-chen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Button4Theme />
        {children}
      </body>
    </html>
  );
}
