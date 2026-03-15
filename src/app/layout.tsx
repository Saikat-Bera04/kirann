import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Snowfall } from '@/components/snowfall';

export const metadata: Metadata = {
  title: 'Saikat Bera | Portfolio',
  description: 'Full Stack Engineer building scalable backends and genAI products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&family=Iceberg&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen selection:bg-primary/30" suppressHydrationWarning>
        <Snowfall />
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
