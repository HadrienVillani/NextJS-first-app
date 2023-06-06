import Layout from '@/components/layout';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import React from 'react';
import NestedLayout from '../components/layout-nested';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};
export default Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout layout1={"je suis dans l'accueil"}>{page}</NestedLayout>
    </Layout>
  );
};
