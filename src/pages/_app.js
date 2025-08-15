import "@/styles/globals.css";
import useSmoothScroll from "@/Components/SmoothScrollProvider";

export default function App({ Component, pageProps }) {
  useSmoothScroll();

  return <Component {...pageProps} />;
}
