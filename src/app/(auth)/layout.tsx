export default function AUthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
  
      </html>
    )
  }