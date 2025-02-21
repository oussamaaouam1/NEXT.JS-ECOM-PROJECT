import Image from "next/image";
import React from "react";
import Slider from "./_components/slider";

const AboutUs = () => {
  return (
    <div>
      <Slider />
      <div className="bg-slate-300  flex flex-col px-4 ">
        <div className="flex py-16 px-2 flex-1 justify-center md:flex-row flex-col-reverse gap-24">
          <div className="text-black md:w-1/3 w-auto px-3 py-6">
            <h1 className="font-bold text-3xl font-serif tracking-widest pb-10 ">
              ABOUT ACTIVE SW
            </h1>
            <h2 className="text-xl font-bold py-2">OUR STORY</h2>
            <p className="text-primary font-sans leading-8 font-semibold items-center">
              At Active SW, we believe that movement is more than just
              fitness—it’s a way of life. Founded with a passion for performance
              and style, our brand is built for those who push limits, break
              barriers, and redefine what’s possible. Whether you're in the gym,
              on the track, or conquering everyday challenges, Active SW is here
              to elevate your journey.
            </p>
          </div>

          <Image
            src="/ab1.jpg"
            alt="pic1"
            width={650}
            height={500}
            color="#ffff"
            priority
            className="rounded-2xl"
          />
        </div>
        <div className="flex py-16 px-2 flex-1 justify-center md:flex-row flex-col gap-24">
          <Image
            src="/ab2.jpg"
            alt="pic1"
            width={650}
            height={500}
            color="#ffff"
            priority
            className="rounded-2xl"
          />
          <div className="text-black md:w-1/3 w-auto px-3 py-6">
            <h2 className="text-xl font-bold py-2">DESIGNED FOR PERFORMANCE</h2>
            <p className="text-primary font-sans leading-8 font-semibold">
              Every piece of Active SW apparel is crafted with
              precision—blending innovative fabrics, ergonomic designs, and
              cutting-edge technology to enhance comfort, durability, and
              performance. We don’t just follow trends; we set them.
            </p>
          </div>
        </div>
        <div className="flex py-16 px-2 flex-1 justify-center md:flex-row flex-col gap-24">
          <div className="text-black md:w-1/3 w-auto px-3 py-6">
            <h2 className="text-xl font-bold py-2">
              BUILT BY ATHLETES, FOR ATHLETES
            </h2>
            <p className="text-primary font-sans leading-8 font-semibold items-center">
              We know what it takes because we live it. Our products are tested
              and refined by athletes, trainers, and movement enthusiasts to
              ensure they perform at the highest level—just like you.
            </p>
          </div>

          <Image
            src="/ab3.jpg"
            alt="pic1"
            width={650}
            height={500}
            color="#ffff"
            priority
            className="rounded-2xl"
          />
        </div>
        <div className="flex py-16 px-2 flex-1 justify-center md:flex-row flex-col-reverse gap-24">
          <Image
            src="/ab4.jpg"
            alt="pic1"
            width={650}
            height={500}
            color="#ffff"
            // priority
            className="rounded-2xl"
          />
          <div className="text-black md:w-1/3 w-auto px-3 py-6">
            <h2 className="text-xl font-bold py-2">
              MORE THAN A BRAND – A COMMUNITY
            </h2>
            <p className="text-primary font-sans leading-8 font-semibold">
              Active SW isn’t just about the gear. It’s about the people who
              wear it. From beginners taking their first steps to seasoned pros
              pushing their limits, we’re here to support, inspire, and
              celebrate every milestone.
            </p>
            <h2 className="text-xl font-bold py-2">JOIN THE MOVEMENT</h2>
            <p className="text-primary font-sans leading-8 font-semibold">
              This is more than fitness. It’s a lifestyle. It’s a mindset. It’s
              Active SW. Stay active. Stay strong. Stay unstoppable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
