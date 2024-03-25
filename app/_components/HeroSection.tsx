import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            انطلق الى عالم الاعمال
            <span className="sm:block text-secondary">
              {" "}
              قم بأنشاء سيرتك الذاتية{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            استعد لتحويل أحلامك إلى واقع واجعل كل خطوة في رحلتك المهنية تكون
            خطوة نحو تحقيق أهدافك. ابنِ سيرتك الذاتية بإيمان وثقة، فأنت على وشك
            دخول عالم الأعمال حيث تستطيع أن تكون القصة والقوة وراء نجاحك
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              البدء
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto border-1 shadow-md"
              href="#"
            >
              المزيد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
