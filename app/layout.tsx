import type { Metadata } from 'next';
import './globals.css';
import { ApolloClientProvider } from '@/components/ApolloClientProvider';

export const metadata: Metadata = {
  title: 'UMA App',
  description: 'UMA App example with Apollo GraphQL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning={true}>
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  );
}
