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
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <ChooseUs />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
