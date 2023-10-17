import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sign up form",
  description: "Sign up page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" description="Form test">
      <body
        className={`${poppins.className} bg-[#FF7A7A] bg-cover box-border max-md:pb-[100px]`}
        style={{ backgroundImage: 'url("./bg-intro-desktop.png")' }}
      >
        {children}
      </body>
    </html>
  );
}
