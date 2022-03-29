import Image from "next/image";
import Link from "next/link";
import Cart from "../components/ui/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
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
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div className="bg-[#f2f2f2] py-6">
          <h1 className="py-48 grid place-content-center">
            Your Cart is Empty!
          </h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f2f2f2] py-6">
          <div className="bg-white w-11/12 mx-auto p-6 space-y-6 rounded-lg">
            <div className="tw-h4">checkout</div>
            <div className="tw-subtitle text-dark-orange">billing details</div>
            <div>
              <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="tw-label">Name</span>
                    <input
                      name="name"
                      {...register("name")}
                      type="text"
                      className={`form-val ${
                        errors.name ? "is-invalid ring-red-500" : ""
                      }`}
                      placeholder="Name Here"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.name?.message}
                    </div>
                  </label>
                  <label className="block">
                    <span className="tw-label">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      className={`form-val ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="john@example.com"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.email?.message}
                    </div>
                  </label>
                  <label className="block">
                    <span className="tw-label">Phone Number</span>
                    <input
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      type="text"
                      className={`form-val ${
                        errors.phoneNumber ? "is-invalid" : ""
                      }`}
                      placeholder="555-555-5555"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.phoneNumber?.message}
                    </div>
                  </label>
                  <div className="tw-subtitle text-dark-orange">
                    shipping info
                  </div>
                  <label className="block">
                    <span className="tw-label">Your Address</span>
                    <input
                      name="address"
                      {...register("address")}
                      type="text"
                      className={`form-val ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="123 fake st."
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.address?.message}
                    </div>
                  </label>
                  <label className="block">
                    <span className="tw-label">Zip Code</span>
                    <input
                      name="zipCode"
                      {...register("zipCode")}
                      type="text"
                      className={`form-val ${
                        errors.zipCode ? "is-invalid" : ""
                      }`}
                      placeholder="90210"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.zipCode?.message}
                    </div>
                  </label>
                  <label className="block">
                    <span className="tw-label">City</span>
                    <input
                      name="city"
                      {...register("city")}
                      type="text"
                      className={`form-val ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      placeholder="San Diego"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.city?.message}
                    </div>
                  </label>
                  <label className="block">
                    <span className="tw-label">Country</span>
                    <input
                      name="country"
                      {...register("country")}
                      type="text"
                      className={`form-val ${
                        errors.country ? "is-invalid" : ""
                      }`}
                      placeholder="Mexico"
                    />
                    <div className="text-red-500 text-xs pt-1 pl-3">
                      {errors.country?.message}
                    </div>
                  </label>
                  <div className="tw-subtitle text-dark-orange">
                    payment details
                  </div>
                  <fieldset className="block">
                    <legend className="tw-label">Payment Method</legend>
                    <div className="mt-2 space-y-4">
                      <div className="w-full border-2 border-gray-300 shadow-sm rounded-lg p-3 focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100">
                        <label className="inline-flex items-center w-full">
                          <input
                            className="form-radio "
                            type="radio"
                            checked
                            name="radio-direct"
                            value="1"
                          />
                          <span className="ml-2">e-Money</span>
                        </label>
                      </div>
                      <div
                        className="w-full border-2 border-gray-300
                    shadow-sm rounded-lg p-3
                    focus:border-indigo-300 focus:ring focus:ring-[#D87D4A] focus:ring-opacity-100"
                      >
                        <label className="inline-flex items-center w-full">
                          <input
                            className="form-radio"
                            type="radio"
                            name="radio-direct"
                            value="2"
                          />
                          <span className="ml-2 ">Cash on Delivery</span>
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
              <button type="submit" className="btn btn-primary mr-1">
                Register
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
