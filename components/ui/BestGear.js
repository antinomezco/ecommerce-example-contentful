import DudeMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import DudeTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import DudeDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";

export default function BestGear() {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 md:w-10/12 mx-auto h-auto space-y-7 py-14">
      <div className="image-container w-full md:hidden">
        <Image src={DudeMobile} className="rounded-lg" alt="image of a speaker" />
      </div>
      <div className="image-container w-full hidden md:block lg:hidden">
        <Image src={DudeTablet} className="rounded-lg" alt="image of a speaker" />
      </div>
      <div className="image-container w-1/2 hidden lg:block order-2">
        <Image src={DudeDesktop} className="rounded-lg" alt="image of a speaker"  layout="responsive" />
      </div>
      <div className="w-full text-center md:w-9/12 lg:w-6/12 items-center flex flex-col justify-center lg:text-left mx-auto space-y-7 lg:pr-52">
        <div className="title-mobile">Bringing you the <span className="text-dark-orange">best</span> audio gear</div>
        <div className="tw-body text-black/50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</div>
      </div>
    </div>
  );
}
