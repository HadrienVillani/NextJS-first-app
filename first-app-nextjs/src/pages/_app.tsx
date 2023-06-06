import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

// export function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
