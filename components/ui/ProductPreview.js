import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export default function Product(props, index) {
  console.log(index, props)
  return (
    <div className="py-12 w-11/12 mx-auto text-center space-y-6 lg:flex lg:justify-around lg:items-center">
      <div className="w-full md:hidden mx-auto image-container">
          <Image
            className="mx-auto"
            src={`${props?.images[2]?.url}`}
            alt=""
            width={327}
            height={327}
            layout="responsive"
          ></Image>
        </div>
        <div className="w-full hidden md:block lg:hidden image-container mx-auto">
          <Image
            className="mx-auto"
            src={`${props?.images[3]?.url}`}
            alt=""
            width={689}
            height={352}
            layout="responsive"
          ></Image>
        </div>
        <div className={classNames("w-5/12", "hidden", "lg:block", "image-container", {"order-2": props.index % 2 == !0})}>
          <Image
            className="mx-auto"
            src={`${props?.images[2]?.url}`}
            alt=""
            width={540}
            height={560}
            layout="responsive"
          ></Image>
        </div>
      <div className="text-center space-y-6 lg:w-4/12 lg:text-left">
      {props.new === true && (
        <div className="tw-overline text-dark-orange">NEW PRODUCT</div>
      )}
      <div className="tw-h3">{props.title}</div>
      <div className="text-black/50 tw-body">{props.desc}</div>
      <Link href={`/details/${props.slug}`}><button className="tw-button-orange mx-auto lg:mx-0">See Product</button></Link>
      </div>
    </div>
  );
}
