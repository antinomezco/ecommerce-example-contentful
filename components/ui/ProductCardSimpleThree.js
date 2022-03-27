import ProductCardSimple from "./ProductCardSimple";

export default function ProductCardSimpleThree() {
  return (
    <section className="space-y-5 py-12 sm:flex sm:items-end sm:w-11/12 md:w-10/12 sm:mx-auto">
      <ProductCardSimple
        image={"image-category-thumbnail-headphones"}
        item={"headphones"}
      ></ProductCardSimple>
      <ProductCardSimple
        image={"image-category-thumbnail-speakers"}
        item={"speakers"}
      ></ProductCardSimple>
      <ProductCardSimple
        image={"image-category-thumbnail-earphones"}
        item={"earphones"}
      ></ProductCardSimple>
    </section>
  );
}
