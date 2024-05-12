import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import SettingSwitch from "@/components/Common/SettingSwitch";
import Navbar from "@/components/Blog/Navbar";
import Noise from "@/components/Home/Noise";
import MainPost from "@/components/Blog/MainPost";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: 'Harry Ashton - Blog Details',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export default function BlogDetails() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Navbar />
      <Noise />
      <main>
        <MainPost />
        <RelatedPosts />
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
