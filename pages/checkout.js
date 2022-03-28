import Image from "next/image";
import Link from "next/link";
import Cart from "../components/ui/Cart";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.length === 0 ? (
        <div className="grid place-content-center h-96 "><h1>Your Cart is Empty!</h1></div>
      ) : (
        <div className="bg-[#f2f2f2] py-6">
          <div className="bg-white w-11/12 mx-auto p-6 space-y-6 rounded-lg">
            <div className="tw-h4">checkout</div>
            <div className="tw-subtitle text-dark-orange">billing details</div>
            <div>
              {/* <h2 className="text-2xl font-bold">Simple</h2> */}
              <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="tw-label">Name</span>
                    <input
                      type="text"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100
                  "
                      placeholder="Name Here"
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">Email Address</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">Phone Number</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="555-555-5555"
                    />
                  </label>
                  <div className="tw-subtitle text-dark-orange">
                    shipping info
                  </div>
                  <label className="block">
                    <span className="tw-label">Your Address</span>
                    <input
                      type="text"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">Zip Code</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">City</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="555-555-5555"
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">Country</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="555-555-5555"
                    />
                  </label>
                  <div className="tw-subtitle text-dark-orange">
                    payment details
                  </div>
                  <fieldset className="block">
                    <legend className="tw-label">Payment Method</legend>
                    <div className="mt-2 space-y-4">
                      <div className="w-full border-2 border-gray-300 shadow-sm rounded-lg p-3 focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100">
                        <label className="inline-flex items-center">
                          <input
                            className="form-radio"
                            type="radio"
                            checked
                            name="radio-direct"
                            value="1"
                          />
                          <span className="ml-2">Option 1</span>
                        </label>
                      </div>
                      <div
                        className="w-full border-2 border-gray-300
                    shadow-sm rounded-lg p-3
                    focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100"
                      >
                        <label className="inline-flex items-center">
                          <input
                            className="form-radio"
                            type="radio"
                            name="radio-direct"
                            value="2"
                          />
                          <span className="ml-2">Option 2</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <label className="block">
                    <span className="tw-label">e-Money</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="555-555-5555"
                    />
                  </label>
                  <label className="block">
                    <span className="tw-label">e-Money PIN</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="555-555-5555"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-11/12 mx-auto mt-6 rounded-lg">
            <div className="p-5">
              <div className="tw-h6">Summary</div>
              <Cart />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
