import EarphoneMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import EarphoneTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import EarphoneDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Image from "next/image";

export default function YX1Earphones() {
  return (
    <div className="grid gap-4 w-11/12 md:w-10/12  mx-auto h-auto py-16 md:flex">
      <div className="image-container w-full md:hidden">
        <Image
          src={EarphoneMobile}
          className="rounded-lg object-fill"
          alt="image of a speaker"
          layout="responsive"
        />
      </div>
      <div className="image-container w-full hidden md:block lg:hidden">
        <Image
          src={EarphoneTablet}
          className="rounded-lg "
          alt="image of a speaker"
        />
      </div>
      <div className="image-container w-full hidden lg:block">
        <Image
          src={EarphoneDesktop}
          className="rounded-lg "
          alt="image of a speaker"
          layout="responsive"
        />
      </div>
      <div className="w-full h-auto pl-5 items-center py-16 grid mx-auto rounded-lg bg-gray-white space-y-10">
        <div className="title-mobile">YX1 EARPHONES</div>
        <button className="tw-button-no-bg">See product</button>
      </div>
    </div>
  );
}
