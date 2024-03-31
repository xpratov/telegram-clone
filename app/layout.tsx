import "./globals.css";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <title>Chat UI (by Khushnudbek)</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
