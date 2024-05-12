import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import SettingSwitch from "@/components/Common/SettingSwitch";
import Liquid from "@/components/Home/Liquid";
import Navbar from "@/components/Home/Navbar";
import MainBox from "@/components/Home/MainBox";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Referrals";
import Blog from "@/components/Home/Blog";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: 'Harry Ashton - Frontend developer',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export default function Home() {
  return (
    <body className="liquid">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Liquid />
      <Navbar />
      <main>
        <MainBox />
        <Portfolio />
        <Testimonials />
        {/*<Blog />*/}
        <Contact />
      </main>
      <Footer />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
      <Script src="https://kit.fontawesome.com/d8d8f76b04.js" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
