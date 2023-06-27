import NavBar from "@/components/layout/navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Whatsapp from "@/components/layout/whatsapp";
import Footer from "@/components/layout/footer";
import Footers from "@/components/layout/footers";
import { Toaster } from "react-hot-toast";

const font = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Jhunjhunwala Diamonds",
  description: ` 
  Explore Jhunjhunwala Diamonds'
   iconic collection of luxury diamond 
   jewellery at unbeatable prices, offering the perfect 
   blend of elegance, affordability, and exceptional 
   craftsmanship.`,
   icon: './icon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${font.className}`}>
        <Toaster position="top-left" reverseOrder={false} />
        <div className="flex justify-center w-full">
          <NavBar />
        </div>
        <div>{children}</div>
        <Whatsapp />
        <Footers />
      </body>
    </html>
  );
}
