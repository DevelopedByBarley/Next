import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial ",
    template: "%s | Barley"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 


  return (
    <html lang="en">
      <body>
        <header style={{ minHeight: '200px', background: 'lightgreen' }}>Header</header>
        {children}
        <footer style={{ minHeight: '200px', background: 'lightblue' }}>Footer</footer>
      </body>
    </html>
  )
}
