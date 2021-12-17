import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/normalize.css";
import "../styles/vars.css";
import "../styles/common.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
