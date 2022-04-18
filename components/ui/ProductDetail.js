import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ProductCardSimpleThree from "./ProductCardSimpleThree";
import { addToCart } from "../../redux/cart.slice.js";
import BestGear from "./BestGear";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Product(props, onClick) {
  const includes = props?.includes;
  const listYma = props?.youMayAlso;
  const dispatch = useDispatch();
  return (
    <div className="space-y-6">
      <div className="mx-auto w-11/12 space-y-6 py-12 md:grid md:w-10/12 md:grid-cols-2">
        {props.images && (
          <>
            <div className="image-container mx-auto w-full md:hidden">
              <Image
                className="mx-auto"
                src={`${props?.images[2]?.url}`}
                alt=""
                width={327}
                height={327}
                layout="responsive"
              ></Image>
            </div>
            <div className="image-container hidden w-full md:block md:pr-12 lg:hidden ">
              <Image
                className="mx-auto"
                src={`${props?.images[1]?.url}`}
                alt=""
                width={181}
                height={280}
                layout="responsive"
              ></Image>
            </div>
            <div className="image-container hidden w-full md:pr-12 lg:block ">
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

          <div className="tw-body text-black/50">{props.desc}</div>

          <div className="tw-h6">$ {props.price}</div>

          <Popover className="relative">
            {({ open }) => (
              <>
                <button onClick={() => dispatch(addToCart(props))}>
                  <Popover.Button className="tw-button-orange mx-auto uppercase md:mx-0">
                    <span>add to cart</span>
                  </Popover.Button>
                </button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-gray-50 p-4">
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Added {props.title} to the cart
                          </span>
                        </span>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
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
              <span className="tw-body font-bold text-dark-orange">
                {include?.quantity}x&nbsp;
              </span>
              <span className="tw-body text-black/50">
                &nbsp;{include?.item}
              </span>
            </li>
          ))}
        </ul>

        {props.moreImages && (
          <div className="grid gap-6 md:col-span-2 md:grid-flow-col md:grid-cols-2">
            <div className="image-container mx-auto w-full md:col-span-1">
              <Image
                className="mx-auto rounded-lg"
                src={`${props?.moreImages[0]?.url}`}
                alt=""
                width={327}
                height={184}
                layout="responsive"
              ></Image>
            </div>
            <div className="image-container mx-auto w-full md:col-span-1">
              <Image
                className="mx-auto rounded-lg"
                src={`${props?.moreImages[1]?.url}`}
                alt=""
                width={327}
                height={184}
                layout="responsive"
              ></Image>
            </div>
            <div className="image-container mx-auto w-full md:col-span-2 md:row-span-2">
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
      <div className="mx-auto w-11/12 space-y-6 md:grid md:w-10/12 md:grid-cols-3">
        <div className="tw-h5 text-center md:col-span-3">you may also like</div>
        {listYma?.map((itemYMA, index) => (
          <div
            key={index}
            className="mx-auto space-y-10 md:col-span-1 md:mx-3 "
          >
            <div className="md:grid-span-1 grid justify-items-center rounded-lg bg-gray-white ">
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
              <a className="flex justify-center">
                <button className="tw-button-orange mx-auto lg:mx-0 ">
                  See Product
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <ProductCardSimpleThree />
      <BestGear />
    </div>
  );
}
