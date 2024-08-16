

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
      <h1>This is a nested route</h1>
    </>
  )
}
