import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: '一个使用 Next.js 构建的现代化仪表盘应用',
  keywords: ['Next.js', 'React', 'JavaScript', 'Dashboard'],
  authors: [{ name: 'Acme Team' }],
  creator: 'Acme Inc',
  metadataBase: new URL('https://acme-dashboard.example.com'),
  openGraph: {
    title: 'Acme Dashboard',
    description: '一个使用 Next.js 构建的现代化仪表盘应用',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
