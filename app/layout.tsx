import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lidoku.com'),
  title: {
    default: 'LiDoKu: learn Linux, Docker & Kubernetes on a real machine',
    template: '%s · LiDoKu',
  },
  description:
    'Hands-on Linux, Docker and Kubernetes courses. Every lesson comes with your own isolated machine in the browser, ready in seconds, with nothing to install.',
  openGraph: {
    title: 'LiDoKu: learn Linux, Docker & Kubernetes on a real machine',
    description: 'Every lesson comes with your own isolated machine in the browser. Nothing to install.',
    url: 'https://lidoku.com',
    siteName: 'LiDoKu',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${mono.variable}`}>
      <body className='antialiased font-sans' suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
