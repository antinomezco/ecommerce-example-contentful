import Link from "next/link";

export default function ZX7Speaker() {
  return (
    <div className="mx-auto grid h-[320px] w-11/12 items-center rounded-lg bg-[url('../assets/home/mobile/image-speaker-zx7.jpg')] bg-cover py-16 pl-5 md:w-10/12 md:bg-[url('../assets/home/tablet/image-speaker-zx7.jpg')] md:pl-14 lg:bg-[url('../assets/home/desktop/image-speaker-zx7.jpg')]">
      <div className="title-mobile">ZX7 SPEAKER</div>
      <Link href="/details/zx7-speaker">
        <a>
          <button className="tw-button-no-bg">See product</button>
        </a>
      </Link>
    </div>
  );
}
