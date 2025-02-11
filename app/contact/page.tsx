import React from "react";

const page = () => {
  return (
    <>
     <section className=" bg-[url('/Images/pageHeaderBackground.jpg')] bg-cover w-[calc(300% + 1.3px)] min-h-[50vh] bg-bottom bg-no-repeat flex">
      <h1 className="m-auto text-3xl md:text-5xl pt-16 font-bold tracking-tight">CONTACT US</h1>
    </section>
      <section className="w-full mt-[-11vh] flex max-h-[80vh]">
        <div className="mx-auto ">
          
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
