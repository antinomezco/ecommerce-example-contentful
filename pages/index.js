import Head from "next/head";
import Link from "next/link"
import ProductCardSimpleThree from "../components/ui/ProductCardSimpleThree";
import ZX9Speaker from "../components/home/ZX9Speaker";
import ZX7Speaker from "../components/home/ZX7Speaker";
import YX1Earphones from "../components/home/YX1Earphones";
import BestGear from "../components/ui/BestGear";


export default function Index(props) {
  return (
    <>
        <Head>
          <title>Audiophile Home Page</title>
        </Head>
        <main className="overflow-x-hidden">
          <div className="bg-[url('../assets/home/mobile/image-header.jpg')] md:bg-[url('../assets/home/tablet/image-header.jpg')] lg:bg-[url('../assets/home/desktop/image-hero.jpg')] min-h-[600px] md:min-h-[729px] bg-bottom bg-cover grid items-center grid-cols-12">
            <div className="grid col-span-10 col-start-2 md:col-span-6 md:col-start-4 lg:col-start-2 lg:col-span-5 mx-auto lg:mx-0 lg:w-11/12 text-center lg:text-left space-y-4">
              <div className="tw-overline text-dark-orange">NEW PRODUCT</div>
              <div className="font-manrope text-[36px] uppercase font-bold tracking-[1.29px] leading-[40px] lg:text-[56px] lg:tracking-[2px] lg:leading-[58px] text-white">
                XX99 Mark II HeadphoneS
              </div>
              <div className="tw-body text-white">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </div>
              <Link href="/details/xx99-mark-two-headphones">
              <a><button className="tw-button-orange mx-auto lg:mx-0">
                See Product
              </button></a>
              </Link>
            </div>
          </div>
          <ProductCardSimpleThree />
          <section className="space-y-5">
            <ZX9Speaker />
            <ZX7Speaker />
            <YX1Earphones />
          </section>
          <section>
            <BestGear />
          </section>
        </main>
    </>
  );
}

