import Image from "next/image";
import Button3 from "./Button3";
import Link from "next/link";
import classNames from "classnames";

export default function ProductCardSimple(props) {
  if (props) {
    console.log("PCS", props);
  }
  return (
    <div>
      <div
        className={classNames("mx-auto", "w-1/2", {
          hidden: props.mobileMenu === "true",
        })}
      >
        <Image
          className="mx-auto"
          src={require(`../../assets/shared/desktop/${props.image}.png`)}
          alt=""
        ></Image>
      </div>
      <div className={classNames("md:-mt-18", "mx-auto", "-mt-28","grid w-11/12","justify-items-center", "rounded-lg", "bg-gray-white", "pt-24", "pb-4", {
          'mt-0 pt-6': props.mobileMenu === "true",
        })} >
        {props.mobileMenu && (
          <div className="mx-auto w-3/12 sm:w-1/2 ">
            <Image
              className="mx-auto"
              src={require(`../../assets/shared/desktop/${props.image}.png`)}
              alt=""
            ></Image>
          </div>
        )}
        <div className="font-manrope text-[15px] font-bold uppercase leading-[20.49px] tracking-[1.07px] ">
          {props.item}
        </div>
        <Link href={`/category/${props.item}`}>
          <a>
            <Button3></Button3>
          </a>
        </Link>
      </div>
    </div>
  );
}
