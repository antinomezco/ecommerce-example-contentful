import Image from "next/image";
import Link from "next/link";

export default function Product(props) {
  return (
    <div className="py-12 w-11/12 mx-auto text-center space-y-6">
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
        <div className="w-full hidden md:block lg:hidden md:pr-12 image-container ">
          <Image
            className="mx-auto"
            src={`${props?.images[1]?.url}`}
            alt=""
            width={181}
            height={280}
            layout="responsive"
          ></Image>
        </div>
        <div className="w-full hidden lg:block md:pr-12 image-container ">
          <Image
            className="mx-auto"
            src={`${props?.images[2]?.url}`}
            alt=""
            width={540}
            height={560}
            layout="responsive"
          ></Image>
        </div>
      {props.new === true && (
        <div className="tw-overline text-dark-orange">NEW PRODUCT</div>
      )}
      <div className="tw-h3">{props.title}</div>
      <div className="text-black/50 tw-body">{props.desc}</div>
      <Link href={`/details/${props.slug}`}><button className="tw-button-orange mx-auto lg:mx-0">See Product</button></Link>
    </div>
  );
}
