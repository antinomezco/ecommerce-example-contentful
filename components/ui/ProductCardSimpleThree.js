import ProductCardSimple from "./ProductCardSimple";
import classNames from "classnames";

export default function ProductCardSimpleThree(props) {
  console.log("simplethree", props)
  return (
    <section className={classNames("space-y-5", "py-12", "sm:items-end", "sm:flex", "sm:w-11/12", "md:w-10/12", "sm:mx-auto", {"flex space-y-0 items-center py-6 lg:hidden w-11/12 mx-auto" : props.mobileMenu==="true"})}>
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
