import './globals.css'

export const metadata = {
  title: '아이들나라 (Clone)',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
