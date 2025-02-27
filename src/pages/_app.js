import "@/styles/globals.css";
import Cursor from "@/components/cursor"; // Import the Cursor component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}