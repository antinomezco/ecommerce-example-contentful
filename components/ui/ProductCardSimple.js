import Image from "next/image";
import Button3 from "./Button3";
import Link from "next/link";

export default function ProductCardSimple(props) {
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <Image
          className="mx-auto"
          src={require(`../../assets/shared/desktop/${props.image}.png`)}
          alt=""
        ></Image>
      </div>
      {/* <div className="w-3/12 h-3.5 blur-2xl bg-black mx-auto">test</div> */}
      <div className="bg-gray-white w-11/12 rounded-lg mx-auto grid justify-items-center pt-24  pb-4 -mt-20 md:-mt-18">
        <div className="font-manrope  text-[15px] uppercase tracking-[1.07px] font-bold leading-[20.49px] ">
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
