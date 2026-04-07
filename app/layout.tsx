import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeniCal",
  description: "An intelligent calendar for planning and follow-through.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}