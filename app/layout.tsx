import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});

export const metadata: Metadata = {
  title: "Today's Games",
  description: "Today's women's basketball games!",
  keywords: [
    "WNBA",
    "NCAA",
    "NCAAW",
    "basketball",
    "sports",
    "games",
    "today",
    "jogos",
    "hoje",
    "basquete feminino",
  ],
  authors: [{ name: "Luma Montes" }],
  creator: "Luma Montes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
