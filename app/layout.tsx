import SessionWrapper from "@/app/components/SessionWrapper";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
