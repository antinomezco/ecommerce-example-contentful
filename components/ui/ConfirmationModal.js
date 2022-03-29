import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllFromCart,
} from "../../redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./Cart";

export default function ConfirmationModal(props) {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);    
  }



  const cart = props.cart;
  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="tw-button-orange-wide mt-5"
        >
          continue & pay
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="space-y-6 inline-block w-full max-w-md p-6 mt-32 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="tw-h5">thank you for your order</div>
                <div className="tw-body text-black/50">
                  You will receive an email confirmation shortly.
                </div>
                <div>
                  <div className="bg-[#f1f1f1] w-full rounded-t-lg p-5">
                    <div className="hidden lg:block">
                      {cart.map((item, key) => (
                        <div
                          key={key}
                          className="flex py-6 space-x-6 items-center "
                        >
                          <div className="w-3/12 md:hidden image-container">
                            <Image
                              className="mx-auto rounded-lg"
                              src={`${item.cartImage.url}`}
                              alt=""
                              height="64"
                              width="64"
                              layout="responsive"
                            ></Image>
                          </div>
                          <div className="grow">
                            <p className="uppercase tw-body font-bold">
                              {item.cartImage.description}
                            </p>
                            <p className="text-[14px] font-manrope font-bold text-black/50">
                              $&nbsp;{item.price}
                            </p>
                          </div>

                          <p className="h-[32px] w-[32px] tw-subtitle pt-1">
                            x{item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:hidden">
                      <div className="flex py-6 space-x-6 items-center ">
                        <div className="w-3/12 md:hidden image-container">
                          <Image
                            className="mx-auto rounded-lg"
                            src={`${cart[0].cartImage.url}`}
                            alt=""
                            height="64"
                            width="64"
                            layout="responsive"
                          ></Image>
                        </div>
                        <div className="grow">
                          <p className="uppercase tw-body font-bold">
                            {cart[0].cartImage.description}
                          </p>
                          <p className="text-[14px] font-manrope font-bold text-black/50">
                            $&nbsp;{cart[0].price}
                          </p>
                        </div>

                        <p className="h-[32px] w-[32px] tw-subtitle pt-1">
                          x{cart[0].quantity}
                        </p>
                      </div>
                      {cart.length > 1 && (
                        <div className="text-black/50 text-center">
                          <div className="w-full border-[1px] my-2"></div>
                          <div>and {cart.length - 1} other items</div>
                        </div>
                      )}
                      {cart.length > 1}
                    </div>
                  </div>
                  <div className="bg-black w-full p-5 rounded-b-lg">
                    <div className="text-white/50 tw-body">Grand Total</div>
                    <div className="text-white tw-h6">$ {props.total}</div>
                  </div>
                </div>
                <Link href="/">
                  <button className="tw-button-orange-wide mt-6" onClick={() => dispatch(removeAllFromCart())}>
                    Back to home
                  </button>
                </Link>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
