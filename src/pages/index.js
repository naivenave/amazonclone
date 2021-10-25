import Head from "next/head";
import Banner from "../components/Banner";
import Header from '../components/Header'
import ProductsFeed from "../components/ProductsFeed";

export default function Home({products}) {
  // console.log(products)
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <div>
        <Header />
      </div>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductsFeed products={products} />
      </main>
      {/* ---- ---- */}
    </div>
  );
}

export const getServerSideProps = async (context)=>{
   const products = await fetch("https://fakestoreapi.com/products").then(res=>res.json())
   return {
     props:
     {
       products
     }
   }

}
