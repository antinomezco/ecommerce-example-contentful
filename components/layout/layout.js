import Footer from "../ui/Footer";
import Header from "../ui/Header";


export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}