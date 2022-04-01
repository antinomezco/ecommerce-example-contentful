import Image from "next/image";
import Links from "./Links";
import Button3 from "./Button3";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import ProductCardSimpleThree from "./ProductCardSimpleThree";
import { addToCart } from '../../redux/cart.slice.js';
import BestGear from "./BestGear";

export default function Product(props) {
  const includes = props?.includes;
  const listYma = props?.youMayAlso;
  const dispatch = useDispatch();
  return (
    <div className="space-y-6">
      <div className="py-12 w-11/12 md:w-10/12 mx-auto md:grid-cols-2 space-y-6 md:grid">
        {props.images && (
          <>
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
          </>
        )}
        <div className="flex flex-col space-y-6 pl-0 md:justify-evenly md:pl-12">
          {props.new === true && (
            <div className="tw-overline text-dark-orange">NEW PRODUCT</div>
          )}

          <div className="tw-h3">{props.title}</div>

          <div className="text-black/50 tw-body">{props.desc}</div>

          <div className="tw-h6">$ {props.price}</div>

          <Link href={`/details/${props.slug}`}>
            <button onClick={() => dispatch(addToCart(props))} className="tw-button-orange mx-auto md:mx-0 uppercase">
              add to cart
            </button>
          </Link>
        </div>

        <div className="tw-h5 md:col-span-2">features</div>
        <div
          className="tw-body text-black/50 md:col-span-2"
          dangerouslySetInnerHTML={{ __html: props.features }}
        ></div>

        <div className="tw-h5">in the box</div>
        <ul>
          {includes?.map((include, index) => (
            <li key={index}>
              <span className="tw-body text-dark-orange font-bold">
                {include?.quantity}x&nbsp;
              </span>
              <span className="tw-body text-black/50">
                &nbsp;{include?.item}
              </span>
            </li>
          ))}
        </ul>

        {props.moreImages && (
          <div className="grid gap-6 md:col-span-2 md:grid-cols-2 md:grid-flow-col">
          <div className="w-full mx-auto image-container md:col-span-1">
            <Image
              className="mx-auto rounded-lg"
              src={`${props?.moreImages[0]?.url}`}
              alt=""
              width={327}
              height={184}
              layout="responsive"
            ></Image>
          </div>
          <div className="w-full mx-auto image-container md:col-span-1">
            <Image
              className="mx-auto rounded-lg"
              src={`${props?.moreImages[1]?.url}`}
              alt=""
              width={327}
              height={184}
              layout="responsive"
            ></Image>
          </div>
          <div className="w-full mx-auto image-container md:row-span-2 md:col-span-2">
            <Image
              className="mx-auto rounded-lg"
              src={`${props?.moreImages[2]?.url}`}
              alt=""
              width={327}
              height={368}
              layout="responsive"
            ></Image>
          </div>
        </div>
        )}
      </div>
      <div className="md:grid md:grid-cols-3 w-11/12 md:w-10/12 mx-auto space-y-6">
        <div className="tw-h5 text-center md:col-span-3">you may also like</div>
        {listYma?.map((itemYMA, index) => (
          <div key={index} className="space-y-10 mx-auto md:mx-3 md:col-span-1 ">
            <div className="bg-gray-white rounded-lg grid justify-items-center md:grid-span-1 md:h-64">
              <div className="w-1/2 md:w-full">
                <Image
                  src={`${itemYMA?.url}`}
                  alt=""
                  width={700}
                  height={636}
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="tw-h5 text-center">{itemYMA?.title}</div>
            <Link href={`/details/${itemYMA?.description}`}>
              <div className="flex justify-center">
                <button className="tw-button-orange mx-auto lg:mx-0 ">
                  See Product
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ProductCardSimpleThree />
      <BestGear />
    </div>
  );
}
