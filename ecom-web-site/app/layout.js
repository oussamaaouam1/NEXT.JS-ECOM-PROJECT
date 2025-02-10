import { Providers } from "./_redux/Providers";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export const metadata = {
  title: "ACTIVE SW",
  description: "POWER YOUR WORKOUT",
  icons: {
    icon: [
      {
        url: "/activ-web-icon.svg", // Make sure this matches your icon's path in public folder
        href: "/activ-web-icon.svg",
        sizes: "64x64",
        
      },
    ],
    shortcut: "/activ-web-icon.svg",
    apple: "/activ-web-icon.svg",
  },
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
