import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllFromCart,
} from "../../redux/cart.slice";
import ConfirmationModal from "./ConfirmationModal";

export default function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  return (
    <div>
      {props.cartComponent && (
        <div className="flex justify-between">
          <div className="tw-h6">Cart ({cart.length})</div>
          <button
            className="tw-body underline text-black/50"
            onClick={() => dispatch(removeAllFromCart())}
          >
            Remove all
          </button>
        </div>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex py-6 space-x-6 items-center ">
          <div className="w-4/12 md:hidden image-container">
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

          {props.cartComponent ? (
            <div>
              <div className="flex bg-[#f1f1f1] text-center ">
                <button
                  className="h-[32px] w-[32px] tw-subtitle"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <p className="h-[32px] w-[32px] tw-subtitle pt-1">
                  {item.quantity}
                </p>

                <button
                  className="h-[32px] w-[32px] tw-subtitle"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
                {/* <button onClick={() => dispatch(removeFromCart(item.id))}>x</button> */}
              </div>
            </div>
          ) : (
            <p className="h-[32px] w-[32px] tw-subtitle pt-1">
              x{item.quantity}
            </p>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <div className="tw-body text-black/50 uppercase">Total: </div>
        <div className="tw-h6">$ {getTotalPrice()}</div>
      </div>
      {!props.cartComponent && (
        <div>
          <div className="flex justify-between">
            <div className="tw-body text-black/50 uppercase">shipping</div>
            <div className="tw-h6">$ 50</div>
          </div>
          <div className="flex justify-between">
            <div className="tw-body text-black/50 uppercase">
              VAT (included)
            </div>
            <div className="tw-h6">$ {(getTotalPrice() * 0.2).toFixed(2)}</div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="tw-body text-black/50 uppercase">Grand Total</div>
            <div className="tw-h6 text-dark-orange">
              $ {(getTotalPrice() * 1.2 + 50).toFixed(2)}
            </div>
          </div>
          {/* <ConfirmationModal
            total={(getTotalPrice() * 1.2 + 50).toFixed(2)}
            cart={cart}
          /> */}
        </div>
      )}
    </div>
  );
}
