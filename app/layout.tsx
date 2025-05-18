import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col flex-1 min-h-[100dvh]">
          <main className="flex-1">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
