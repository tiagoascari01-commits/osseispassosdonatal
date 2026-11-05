import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Natal em Seis Traços',
  description: 'Revele a magia do Natal, um traço de cada vez.',
  openGraph: {
    title: 'Natal em Seis Traços',
    description: 'Revele a magia do Natal, um traço de cada vez.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natal em Seis Traços',
    description: 'Revele a magia do Natal, um traço de cada vez.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2257775555005183');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent');
        ` }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
               src="https://www.facebook.com/tr?id=2257775555005183&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
