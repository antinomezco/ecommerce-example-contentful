import Image from "next/image";
import Link from "next/link";
import Cart from "../components/ui/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import classNames from "classnames";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [payment, setPayment] = useState(null);
  const [formComplete, setFormComplete] = useState(null);

  const handleChange = (e) => {
    setPayment(e.target.value);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const validationSchema = Yup.object().shape({
    decide: Yup.string(),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Email is invalid"
      ),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Phone number is invalid"
      ),
    address: Yup.string()
      .min(6, "Address must be at least 6 characters")
      .required("Address is required"),
    zipCode: Yup.string()
      .required("Zip code is required")
      .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Zip code is invalid"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    eMoney: Yup.string().when("decide", (val, schema) => {
      if (val === "e-Money") return Yup.string().required();
      else return Yup.string().notRequired();
    }),
    eMoneyPin: Yup.string().when("decide", (val, schema) => {
      if (val === "e-Money") return Yup.string().required();
      else return Yup.string().notRequired();
    }),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, getValues } = useForm(
    formOptions,
    {
      defaultValues: {
        decide: "cod",
      },
    }
  );
  const { errors } = formState;
  function onSubmit(data) {
    // display form data on success
    setFormComplete(true);
    return false;
  }
  return (
    <div className="bg-[#f2f2f2]">
      {cart.length === 0 ? (
        <div className="bg-[#f2f2f2] py-6">
          <h1 className="grid place-content-center py-48">
            Your Cart is Empty!
          </h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-6 lg:mx-auto lg:flex lg:w-10/12"
        >
          <div className="mx-auto w-11/12 space-y-6 rounded-lg bg-white p-6 lg:w-7/12">
            <div className="tw-h4">checkout</div>
            <div className="tw-subtitle text-dark-orange">billing details</div>
            <div>
              <div className="mt-8 ">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Name
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.name?.message}
                      </div>
                    </div>
                    <input
                      name="name"
                      {...register("name")}
                      type="text"
                      className={`form-val ${
                        errors.name?.message ? "form-inval" : ""
                      }`}
                      placeholder="Name Here"
                    />
                  </label>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Email Address
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.email?.message}
                      </div>
                    </div>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      className={`form-val ${
                        errors.email?.message ? "form-inval" : ""
                      }`}
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Phone Number
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.phoneNumber?.message}
                      </div>
                    </div>
                    <input
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      type="text"
                      className={`form-val ${
                        errors.phoneNumber?.message ? "form-inval" : ""
                      }`}
                      placeholder="555-555-5555"
                    />
                  </label>
                  <div className="tw-subtitle text-dark-orange md:col-span-2">
                    shipping info
                  </div>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Your Address
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.address?.message}
                      </div>
                    </div>
                    <input
                      name="address"
                      {...register("address")}
                      type="text"
                      className={`form-val ${
                        errors.address?.message ? "form-inval" : ""
                      }`}
                      placeholder="123 fake st."
                    />
                  </label>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Zip Code
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.zipCode?.message}
                      </div>
                    </div>
                    <input
                      name="zipCode"
                      {...register("zipCode")}
                      type="text"
                      className={`form-val ${
                        errors.zipCode?.message ? "form-inval" : ""
                      }`}
                      placeholder="90210"
                    />
                  </label>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        City{" "}
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.city?.message}
                      </div>
                    </div>
                    <input
                      name="city"
                      {...register("city")}
                      type="text"
                      className={`form-val ${
                        errors.city?.message ? "form-inval" : ""
                      }`}
                      placeholder="San Diego"
                    />
                  </label>
                  <label className="block">
                    <div className="flex justify-between">
                      <span
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Country{" "}
                      </span>
                      <div className="font-manrope text-xs text-red-500">
                        {errors.country?.message}
                      </div>
                    </div>
                    <input
                      name="country"
                      {...register("country")}
                      type="text"
                      className={`form-val ${
                        errors.country?.message ? "form-inval" : ""
                      }`}
                      placeholder="Mexico"
                    />
                  </label>
                  <div className="tw-subtitle text-dark-orange">
                    payment details
                  </div>
                  <fieldset className="block">
                    <div className="flex justify-between">
                      <legend
                        className={classNames("tw-label", {
                          "text-red-500": errors.name?.message,
                        })}
                      >
                        Payment Method
                      </legend>

                      {errors.decide?.message && (
                        <div className="font-manrope text-xs text-red-500">
                          Please choose a payment method
                        </div>
                      )}
                    </div>
                    <div className="mt-2 space-y-4">
                      <div className="w-full rounded-lg border-2 border-gray-300 p-3 shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100">
                        <label className="inline-flex w-full items-center">
                          <input
                            {...register("decide")}
                            className="form-radio "
                            type="radio"
                            name="decide"
                            id="e-Money"
                            value="e-Money"
                            onChange={handleChange}
                            defaultChecked={getValues("decide") === "e-Money"}
                          />
                          <span className="ml-2">e-Money</span>
                        </label>
                      </div>
                      <div className="w-full rounded-lg border-2 border-gray-300 p-3 shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100">
                        <label className="inline-flex w-full items-center">
                          <input
                            {...register("decide")}
                            className="form-radio"
                            type="radio"
                            name="decide"
                            id="cod"
                            value="cod"
                            onChange={handleChange}
                            defaultChecked={getValues("decide") === "cod"}
                          />
                          <span className="ml-2 ">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  {payment === "e-Money" && (
                    <>
                      <label className="block">
                        <div className="flex justify-between">
                          <span
                            className={classNames("tw-label", {
                              "text-red-500": errors.name?.message,
                            })}
                          >
                            e-Money
                          </span>
                          <div className="font-manrope text-xs text-red-500">
                            {errors.eMoney?.message}
                          </div>
                        </div>
                        <input
                          type="string"
                          {...register("eMoney")}
                          className={`form-val ${
                            errors.eMoney?.message ? "form-inval" : ""
                          }`}
                          placeholder="Account number"
                        />
                      </label>
                      <label className="block">
                        <div className="flex justify-between">
                          <span
                            className={classNames("tw-label", {
                              "text-red-500": errors.name?.message,
                            })}
                          >
                            e-Money PIN
                          </span>
                          <div className="font-manrope text-xs text-red-500">
                            {errors.eMoneyPin?.message}
                          </div>
                        </div>
                        <input
                          type="string"
                          {...register("eMoneyPin")}
                          className={`form-val ${
                            errors.eMoneyPin?.message ? "form-inval" : ""
                          }`}
                          placeholder="12345"
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 w-11/12 rounded-lg bg-white lg:mt-0 lg:w-4/12 lg:self-start">
            <div className="p-5">
              <div className="tw-h6">Summary</div>
              <Cart />
              {!formComplete ? (
                <button type="submit" className="tw-button-orange-wide mt-5">
                  Confirm Information
                </button>
              ) : (
                <ConfirmationModal
                  total={(getTotalPrice() * 1.2 + 50).toFixed(2)}
                  cart={cart}
                />
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
