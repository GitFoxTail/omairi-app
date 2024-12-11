import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "omikuji-management",
  description: "this is omikuji management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
