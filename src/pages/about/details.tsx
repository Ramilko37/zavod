import CertificatesTab from "components/aboutTabs/certificates/certificatesTab";
import DetailsTab from "components/aboutTabs/datails/detailsTab";
import AboutPageContent from "containers/about/about";
import Layout from "containers/layout/layout";
import { Head } from "next/document";

export default function Details() {
  return (
    <Layout>
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
        <DetailsTab />
      </div>
    </Layout>
  )
}
