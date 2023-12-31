import { ContextProvider } from "../context";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}
export default MyApp;
