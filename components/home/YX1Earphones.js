import EarphoneMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import EarphoneTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import EarphoneDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function YX1Earphones() {
  return (
    <div className="mx-auto grid h-auto w-11/12  gap-4 py-16 md:flex md:w-10/12">
      <div className="image-container w-full md:hidden">
        <Image
          src={EarphoneMobile}
          className="rounded-lg object-fill"
          alt="image of a speaker"
          layout="responsive"
        />
      </div>
      <div className="image-container hidden w-full md:block lg:hidden">
        <Image
          src={EarphoneTablet}
          className="rounded-lg "
          alt="image of a speaker"
        />
      </div>
      <div className="image-container hidden w-full lg:block">
        <Image
          src={EarphoneDesktop}
          className="rounded-lg "
          alt="image of a speaker"
          layout="responsive"
        />
      </div>
      <div className="mx-auto grid h-auto w-full items-center rounded-lg bg-gray-white py-16 ">
        <div className="mx-auto w-10/12 space-y-10">
          <div className="title-mobile">YX1 EARPHONES</div>
          <div>
            <Link href="/details/yx1-earphones">
              <a>
                <button className="tw-button-no-bg">See product</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
