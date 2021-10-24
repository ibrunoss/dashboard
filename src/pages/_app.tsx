import "tailwindcss/tailwind.css";
import "../components/Template/Template.css";

import { AppProvider } from "../data/contexts/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
