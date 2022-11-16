import "tailwindcss/tailwind.css";
import "../components/Template/Template.css";

import { AuthProvider } from "../data/contexts/AuthContext";
import { AppProvider } from "../data/contexts/AppContext";

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
          <AppProvider>
              <Component {...pageProps} />
          </AppProvider>
      </AuthProvider>
  );
}

export default MyApp;
