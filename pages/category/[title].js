import ProductPreview from "../../components/ui/ProductPreview";
import { getProductsContent, getProductscategories } from "../../lib/api";
import { useRouter } from 'next/router'

export default function ProductCategories(props) {
  const router = useRouter()
  const products = props.data
  return (
    <div>
      <div className="uppercase text-center tw-h4 text-white bg-black py-6">{router.query.title}</div>
      <div>
      {products.map((product, index) => (
          <ProductPreview
            key={product.slug}
            title={product.productName}
            new={product.new}
            desc={product.productDescription}
            slug={product.slug}
            images={product.imageCollection.items}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = (await getProductsContent(params.title)) ?? [];
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const data = (await getProductscategories()) ?? [];
  const paths = data.map((post) => ({
      params: { title: `/category/${post.title}` },
    }))
  return {paths, fallback: 'blocking'};
}