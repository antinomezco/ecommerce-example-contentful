import ProductCardSimple from "./ProductCardSimple";
import classNames from "classnames";

export default function ProductCardSimpleThree(props) {
  return (
    <section className={classNames("space-y-5", "py-12", "sm:items-end", "sm:flex", "sm:w-11/12", "md:w-10/12", "sm:mx-auto", {"space-y-6 items-center lg:hidden w-10/12 mx-auto" : props.mobileMenu==="true"})}>
      <ProductCardSimple
        image={"image-category-thumbnail-headphones"}
        item={"headphones"}
        mobileMenu={props.mobileMenu}
      ></ProductCardSimple>
      <ProductCardSimple
        image={"image-category-thumbnail-speakers"}
        item={"speakers"}
        mobileMenu={props.mobileMenu}
      ></ProductCardSimple>
      <ProductCardSimple
        image={"image-category-thumbnail-earphones"}
        item={"earphones"}
        mobileMenu={props.mobileMenu}
      ></ProductCardSimple>
    </section>
  );
}
