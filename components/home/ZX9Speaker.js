import SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import Image from "next/image";

const Circles = () => {
  return (
    <svg
      className="  w-[944px] h-[944px] overflow-x-hidden absolute transform -translate-y-[35%] -translate-x-[30%] md:-translate-x-[14%] scale-65 md:scale-140 lg:-translate-x-[36%] lg:-translate-y-[5%] lg:scale-15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
        <circle cx="472" cy="472" r="235.5" />
        <circle cx="472" cy="472" r="270.5" />
        <circle cx="472" cy="472" r="471.5" />
      </g>
    </svg>
  );
};

export default function ZX9Speaker() {
  return (
    <div className="z-10 first-letter:overflow-hidden relative background-circles md:w-10/12 w-11/12 space-y-8 py-16 my-16 lg:py-0 lg:pt-16 flex flex-col lg:flex-row justify-items lg:justify-center mx-auto text-center rounded-lg">
      {/* <Circles className="z-0" /> */}
      <div className="image-container w-5/12 h-auto md:hidden mx-auto ">
        <Image src={SpeakerMobile} alt="image of a speaker" />
      </div>
      <div className="image-container md:w-3/12 h-auto hidden md:block lg:hidden mx-auto">
        <Image src={SpeakerTablet} alt="image of a speaker" />
      </div>
      <div className="image-container w-4/12 hidden lg:block mx-auto ">
        <Image
          src={SpeakerDesktop}
          alt="image of a speaker"
          className="mt-10"
        
        />
      </div>
      <div className="w-10/12 space-y-8 md:w-5/12 mx-auto lg:text-left">
        <div className="title-mobile text-white">
          ZX9
          <br /> SPEAKER
        </div>
        <div className="tw-body  text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </div>
        <button className="tw-button-black">See product</button>
      </div>
    </div>
  );
}
