import Head from "next/head";
import React from "react";
import Layout from 'containers/layout/layout';
import PartnershipPageContent from "../containers/partnership";

export default function Partnership() {

    return (
        <Layout footer='small' style={{height: 'auto'}}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="Description" content="Put your description here."/>
                <title>Partnership</title>
            </Head>

            <div className="px-0">
                <PartnershipPageContent/>
            </div>
        </Layout>
    );
}
