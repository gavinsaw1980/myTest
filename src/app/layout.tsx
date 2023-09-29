import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "../Components/Provider/provider";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software Recruitment co.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur iaculis sollicitudin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Provider />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
