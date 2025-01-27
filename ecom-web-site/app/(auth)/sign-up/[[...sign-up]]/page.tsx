import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/loginSignup.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              {/* <span className="sr-only">Home</span> */}

              <Image
                src="/activelogo.svg"
                alt="logo"
                width={85}
                height={90}
                color="#ffff"
                className="mt-2 ml-14"
              />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to{" "}
              <span className="text-black font-extrabold">Active SW</span>
            </h2>

            <p className="mt-4 leading-relaxed text-white text-xl font-bold">
              Designed to fit your lifestyle and your workout. Elevate every rep
              with <span className="text-2xl font-bold text-light">Active</span>{" "}
              gym wear
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl items-center flex flex-col">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                {/* <span className="sr-only">Home</span> */}
                <Image
                  src="/sports wear.png"
                  alt="logo"
                  width={85}
                  height={80}
                  color="#ffff"
                  className="mt-2"
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Active SW
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Designed to fit your lifestyle and your workout. Elevate every
                rep with{" "}
                <span className="text-xl font-bold text-primary">Active</span>{" "}
                gym wear
              </p>
            </div>

            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
