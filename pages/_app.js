import { Provider } from "react-redux";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import store from '../redux/store';
import "../styles/globals.css";
import { debounce } from "debounce";
import { saveState } from "../redux/browser-storage";


store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
