"use client";
import { settings } from "@/app/settings";
const Page = () => {
  return (
    <div className="w-full  sm:mt-24 md:mt-36 lg:mt-48 ">
      <div className="items-center justify-items-center gap-16  ">
        <main className="flex flex-col gap-8  sm:gap-4">
          <h2 className="lg:text-7xl sm:text-3xl font-bold text-center sm:text-left ">
            欢迎你！😘😘
          </h2>
          <h2 className="lg:text-6xl sm:text-3xl font-bold text-center sm:text-left ">
            你好!😊
          </h2>
          <div>
            <p className="my-2">
              <span className="lg:text-4xl sm:text-2xl text-[#11aa11]">
                {settings.next}
              </span>
              <span className="lg:text-9xl sm:text-5xl font-bold text-center sm:text-left block text-[#00ff00]">
                unichen
              </span>
              {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              unichen
            </code> */}
              <span className="lg:ml-[80%] sm:ml-[70%] md:ml-[70%] text-2xl">
                😎😜😉
              </span>
            </p>
            <p className="my-4 text-2xl text-[#77bb77]">{settings.describe}</p>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Page;
