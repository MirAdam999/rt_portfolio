import type { Metadata } from "next";
import './page.css'

export const metadata: Metadata = {
  title: "Artium Adam",
  description: "Artium Adam Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
