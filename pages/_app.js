import { Provider } from "react-redux";
import store from '../redux/store';
import "../styles/globals.css";
import { debounce } from "debounce";
import { saveState } from "../redux/browser-storage";
import Layout from "../components/layout/layout"


store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
      <Component {...pageProps} />
      </ Layout>
    </Provider>
  );
}

export default MyApp;
