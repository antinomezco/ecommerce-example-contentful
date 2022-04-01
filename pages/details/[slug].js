// import Product from "../../components/ui/Product";
import { getProductSingle, getProductsSlug } from "../../lib/api";
import { useRouter } from "next/router";
import ProductDetail from "../../components/ui/ProductDetail";

export default function ProductDetails(props) {
  const router = useRouter();
  const product = props.data[0];
  return (
    <div>
      <ProductDetail
        key={product?.slug}
        id={product?.id}
        title={product?.productName}
        new={product?.new}
        desc={product?.productDescription}
        slug={product?.slug}
        images={product?.imageCollection?.items}
        features={product?.features}
        price={product?.price}
        includes={product?.includes}
        moreImages={product?.moreImagesCollection?.items}
        youMayAlso={product?.youMayAlsoCollection?.items}
        cartImage={product?.cartImage}
      />
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
  }));
  return { paths, fallback: "blocking" };
}
