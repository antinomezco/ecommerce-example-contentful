import Link from "next/link";

export default function Links() {
  return (
    <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-14 tw-subtitle text-white">
            <li className="hover:text-dark-orange">
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li className="hover:text-dark-orange">
              <Link href={"/category/headphones"}>
                <a>headphones</a>
              </Link>
            </li>
            <li className="hover:text-dark-orange" >
              <Link href={"/category/speakers"}>
                <a>speakers</a>
              </Link>
            </li>
            <li className="hover:text-dark-orange">
              <Link href={"/category/earphones"}>
                <a>earphones</a>
              </Link>
            </li>
          </ul>
  )
}