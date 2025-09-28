import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Mi Portafolio - Creativo Digital en CDMX',
  description: 'Artista, músico, diseñador web y programador especializado en desarrollo web, IA y marketing digital en Ciudad de México.',
  keywords: 'portafolio, diseño web, desarrollo, artista, músico, Ciudad de México, CDMX, programador, IA, marketing digital',
  authors: [{ name: 'Mi Portafolio' }],
  openGraph: {
    title: 'Mi Portafolio - Creativo Digital en CDMX',
    description: 'Transformo ideas en experiencias digitales extraordinarias desde Ciudad de México.',
    type: 'website',
    locale: 'es_MX',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}