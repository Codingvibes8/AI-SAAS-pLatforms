import type { Metadata } from "next";
import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton

} from '@clerk/nextjs'



const roboto = Roboto({ subsets: ["latin"],weight:['400','500','700'] });

export const metadata: Metadata = {
  title: "Maxim-SAAS_AI",
  description: "AI-SAAS PLATFORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body>


        {children}
        </body>
        </html>
      </ClerkProvider>
  );
}


