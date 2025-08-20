import "@/styles/globals.css";
import useSmoothScroll from "@/Components/SmoothScrollProvider";

export default function App({ Component, pageProps }) {
  // useSmoothScroll();
  return (
    <>
      <title>Elevate 2.0</title>
      <Component {...pageProps} />
    </>
  );
}
