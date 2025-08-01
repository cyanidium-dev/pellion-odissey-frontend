import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Sofia_Sans } from "next/font/google";
import "../assets/style/global.scss";
import { Footer } from "@/components/screens/footer/footer";
import { Container } from "@/components/container";
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia-sans",
});

const benzinBold = localFont({
  src: '../assets/Benzin/Benzin-Bold.ttf',
  variable: '--benzin-bold',
  display: 'swap',
});

const benzinMedium = localFont({
  src: '../assets/Benzin/Benzin-Medium.ttf',
  variable: '--benzin-medium',
  display: 'swap',
});

const gothamRegular = localFont({
  src: '../assets/Gotham/Gotham-Regular.otf',
  variable: '--gotham-regular',
  display: 'swap',
})

const gothamBold = localFont({
  src: '../assets/Gotham/Gotham-Bold.otf',
  variable: '--gotham-bold',
  display: 'swap',
})

const gilroyMedium = localFont({
  src: '../assets/Gilroy/Gilroy-Medium.ttf',
  variable: '--gilroy-medium',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${montserrat.className} ${sofiaSans.variable} ${bebasNeue.variable} ${benzinBold.variable} ${benzinMedium.variable} ${gothamRegular.variable} ${gothamBold.variable} ${gilroyMedium.variable}`}>
        {children}
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
