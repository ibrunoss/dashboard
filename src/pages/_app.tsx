import "tailwindcss/tailwind.css";
import "../components/Template/Template.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
