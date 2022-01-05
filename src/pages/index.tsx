import {useEffect} from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/hero-block';
import Products from 'containers/products';
import HowItWorks from 'containers/how-it-works';
import OurProduction from 'containers/our-production';
import Quote from 'containers/quote';
import {useRefScroll} from 'helpers/use-ref-scroll';
import {useSearch} from 'contexts/search/use-search';
import {getProducts} from 'helpers/get-products';
import {getCategories} from 'helpers/get-categories';
import Categories from 'containers/categories';
import {useCategory} from 'contexts/category/use-category';
import ApplicationContainer from "../containers/application-container";


export default function Home({products, categories}) {
    const {elRef, scroll} = useRefScroll({
        percentOfElement: 0,
        percentOfContainer: 0,
        offsetPX: -100,
    });
    const {searchTerm} = useSearch();
    const {category} = useCategory();
    useEffect(() => {
        if (searchTerm || category) return scroll();
    }, [searchTerm, category]);

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="Description" content="Put your description here."/>
                <title>Новосибирский респираторный завод</title>
            </Head>

            <HeroBlock/>
            <div className="container">
                <HowItWorks/>
                <Categories data={categories} ref={elRef}/>
                <Products items={products} ref={elRef}/>
                <OurProduction />
                <Quote />
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const products = await getProducts();
    const categories = await getCategories();

    return {
        props: {
            products,
            categories,
        },
    };
}
