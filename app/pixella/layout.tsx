import type { Metadata, Viewport } from "next";
import "./pixella.css";

export const metadata: Metadata = {
  icons: { icon: "/pixella/icon.svg", apple: "/pixella/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#161513" },
  ],
};

export default function PixellaLayout({ children }: { children: React.ReactNode }) {
  return <div className="px">{children}</div>;
}
