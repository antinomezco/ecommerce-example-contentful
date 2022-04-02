import Footer from "../ui/Footer";
import Header from "../ui/Header";


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}