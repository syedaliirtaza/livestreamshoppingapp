import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Faq = () => {
  return (
    <div className="container mx-auto lg:px-32">
      <p className="text-primary font-medium text-lg items-start lg:mt-[100px]">
        Faq
      </p>
      <p className="text-4xl font-bold items-start py-4">
        Frequently Asked Questions
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-2 bg-primary px-6 py-6 rounded-lg">
            <p className="text-xl font-semibold text-white">
              How do I make a purchase on <br /> a live stream shopping app?
            </p>
            <p className="text-white text-lg">
              Making a purchase on a live stream shopping app is
              <br />
              Simply browse your products from the feed,
              <br /> watch the live stream and place the order
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2  px-6 py-6 rounded-lg">
          <p className="text-xl font-semibold ">
            How does live stream shopping work?
          </p>
          <p className=" text-lg">
            Live stream shopping is a feature that allows sellers <br /> to
            stream live video of their products while interacting
            <br /> with buyers in real-time.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        <div className="flex flex-col gap-2  px-6 py-6 rounded-lg">
          <p className="text-xl font-semibold ">
            What kind of products can I find on your app?
          </p>
          <p className=" text-lg">
            We offer a wide variety of products from clothing <br />
            and accessories to home goods and electronics.
            <br />
            You&apos;re sure to find something you love!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-2 bg-primary px-6 py-6 rounded-lg">
            <p className="text-xl font-semibold text-white">
              Can I interact with the sellers during a live stream?
            </p>
            <p className="text-white text-lg">
              Yes, our app allows for real-time communication <br />
              with sellers during live streams, you can ask
              <br />
              questions and get more information about the products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
