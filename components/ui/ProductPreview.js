import Image from "next/image";
import Link from "next/link";

export default function Product(props) {
  return (
    <div className="py-12 w-11/12 mx-auto text-center space-y-6">
      <div className="w-full mx-auto image-container">
        <Image
          className="mx-auto"
          src={`${props.images[1].url}`}
          alt=""
          width={654}
          height={704}
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
