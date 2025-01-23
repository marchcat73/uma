import type { Metadata } from 'next';
import '@/assets/css/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
