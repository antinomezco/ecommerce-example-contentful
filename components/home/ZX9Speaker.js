import SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import Image from "next/image";
import Link from "next/link";

export default function ZX9Speaker() {
  return (
    <div className="background-circles justify-items relative z-10 my-16 mx-auto flex w-11/12 flex-col space-y-8 rounded-lg py-16 text-center first-letter:overflow-hidden md:w-10/12 lg:flex-row lg:justify-center lg:items-center lg:py-0 lg:pt-16">
      <div className="image-container mx-auto h-auto w-5/12 md:hidden ">
        <Image src={SpeakerMobile} alt="image of a speaker" />
      </div>
      <div className="image-container mx-auto hidden h-auto md:block md:w-3/12 lg:hidden">
        <Image src={SpeakerTablet} alt="image of a speaker" />
      </div>
      <div className="image-container mx-auto hidden w-4/12 lg:block ">
        <Image src={SpeakerDesktop} alt="image of a speaker" />
      </div>
      <div className="mx-auto w-10/12 space-y-6 md:w-5/12 lg:text-left">
        <div className="title-mobile text-white">
          ZX9
          <br /> SPEAKER
        </div>
        <div className="tw-body text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <div>
        <Link href="/details/zx9-speaker">
          <a>
            <button className="tw-button-black">See product</button>
          </a>
        </Link> 
        </div>
      </div>
    </div>
  );
}
