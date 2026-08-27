import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ApolloClientProvider from "@/lib/apollo/provider";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestLab — Хөрөнгийн зах зээлийн сургалт",
  description:
    "Хөрөнгийн зах зээлийн сургалт, хичээл, мэдээлэл. InvestLab-тай хамт арилжааны ур чадвараа хөгжүүлээрэй.",
};

export function generateStaticParams() {
  return [{ locale: "mn" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
