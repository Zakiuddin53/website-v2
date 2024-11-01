import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/aos.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/app.min.css";
import "../../public/assets/css/slick.css";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children, params } = props;

  return (
    <html lang={params.locale}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className="light">
        <Header />
        <div className="zubuz-preloader-wrap">
          <div className="zubuz-preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {children}
        <Footer />

        <Script src="assets/js/jquery-3.6.0.min.js" />
        <Script src="assets/js/bootstrap.bundle.min.js" />
        <Script src="assets/js/menu/menu.js" />
        <Script src="assets/js/isotope.pkgd.min.js" />
        <Script src="assets/js/jquery.magnific-popup.min.js" />
        <Script src="assets/js/slick.js" />
        <Script src="assets/js/countdown.js" />
        <Script src="assets/js/wow.min.js" />
        <Script src="assets/js/faq.js" />
        <Script src="assets/js/app.js" />
      </body>
    </html>
  );
}
