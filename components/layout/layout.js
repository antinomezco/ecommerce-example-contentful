import Footer from "../ui/Footer";
import Header from "../ui/Header";


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}