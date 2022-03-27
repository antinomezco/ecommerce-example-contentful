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
              <Link href={"/headphones"} passHref>
                <a>headphones</a>
              </Link>
            </li>
            <li className="hover:text-dark-orange" >
              <Link href={"/speakers"} passHref>
                <a>speakers</a>
              </Link>
            </li>
            <li className="hover:text-dark-orange">
              <Link href={"/earphones"} passHref>
                <a>earphones</a>
              </Link>
            </li>
          </ul>
  )
}