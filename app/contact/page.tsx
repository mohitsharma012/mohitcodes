import React from "react";

const page = () => {
  return (
    <>
      <section className="w-full pt-36 flex max-h-[80vh]">
        <div className="mx-auto ">
          <h2 className="text-4xl text-center m-auto font-mono tracking-tight text-orange-500 font-bold  sm:text-5xl ">
            Want to react out to me ?
          </h2>
          <img
            src="/Images/contactArrow.png"
            className="w-[300vh] h-[60vh] hidden md:block"
            alt=""
          />
          <img
            src="/Images/contactArrowPhone.png"
            className=" h-[55vh] md:hidden"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default page;
