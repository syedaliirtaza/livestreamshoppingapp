import Head from "next/head";
import Image from "next/image";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>baskett</title>
        <meta
          name="baskett enables users to buy their favourite products by watching and interacting with live stream. Shopping online has never been easier or more enjoyable!"
          content="baskett enables users to buy their favourite products by watching and interacting with live stream. Shopping online has never been easier or more enjoyable!"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        ></link>
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <link rel="icon" href="/favicon.ico" />
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1201442643832987');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1201442643832987&ev=PageView&noscript=1"
/></noscript>
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <ChooseUs />
      <Faq />
      <Footer />
    </div>
  );
}
