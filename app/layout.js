import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fornitemvp | Build your MVP in 14 days",
  description: "Build your MVP in 14 days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className,"bg-muted")}>
        {children}
      </body>
    </html>
  );
}
