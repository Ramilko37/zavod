import CertificatesTab from "components/aboutTabs/certificates/certificatesTab";
import AboutPageContent from "containers/about/about";
import Layout from "containers/layout/layout";
import { Head } from "next/document";

export default function Certificates() {
  return (
    <Layout footer='small'>
      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>О нас</title>
      </Head> */}
      <div className="page section">
        <AboutPageContent />
        <CertificatesTab />
      </div>
    </Layout>
  )
}
