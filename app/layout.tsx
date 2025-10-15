import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiDoKu - Linux, Docker & Kubernetes Training",
  description: "Professional training and resources for Linux, Docker, and Kubernetes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
