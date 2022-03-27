// import Product from "../../components/ui/Product";
import { getProductSingle, getProductsSlug } from "../../lib/api";
import { useRouter } from 'next/router'
import ProductDetail from "../../components/ui/ProductDetail";

export default function ProductDetails(props) {
  const router = useRouter()
  // const products = props.data
  // console.log(props)
  const product = props.data[0]
  return (
    <div>
      {/* <div className="uppercase text-center tw-h4 text-white bg-black py-6">{router.query.title}</div> */}
      <div>
          <ProductDetail
            key={product.slug}
            title={product.productName}
            new={product.new}
            desc={product.productDescription}
            slug={product.slug}
            images={product.imageCollection.items}
            features={product.features}
            price={product.price}
            includes={product.includes}
            moreImages={product.moreImagesCollection.items}
            youMayAlso={product.youMayAlsoCollection.items}
          />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = (await getProductSingle(params.slug)) ?? [];
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const data = (await getProductsSlug()) ?? [];
  const paths = data.map((post) => ({
      params: { slug: `/details/${post.slug}` },
    }))
  return {paths, fallback: 'blocking'};
}