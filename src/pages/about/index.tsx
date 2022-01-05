import Layout from "containers/layout/layout";
import Head from 'next/head';
import Header from "containers/layout/header";
import AboutPageContent from "containers/about/about";
import AboutTabs from 'components/aboutTabs/aboutTabs'




export default function About() {
  return (
    <Layout footer='small'>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>О нас</title>
      </Head>
      <div className="page section">
        <AboutPageContent />
      </div>
    </Layout>
  );
}
