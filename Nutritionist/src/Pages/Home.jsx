import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex ">
        <img
          src="Images/cover.png"
          alt="cover"
          className="w-1/2 h-1/2 rounded-br-[50px] mt-16"
        ></img>
        <div className="ml-12 mt-40">
          <p className="text-[28px]  font-semibold ">
            Transform Your ❤️ Health with
          </p>
          <h1 className="mt-3.5  text-[58px] font-semibold leading-tight">
            Personalized Nutrition Coaching
          </h1>
          <p className="mt-5  ">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition
            <br /> coaching. Our certified nutritionists are here to guide you
            on your weight loss journey, providing <br />
            customized plans and ongoing support. Start your transformation
            today and experience the <br /> power of personalized nutrition
            coaching.
          </p>
          <div className="flex mt-12">
            <div className="px-2">
              <a
                href="##"
                class="  bg-[#CBEA7B] rounded-lg py-3.5 font-medium inline-block mr-4 
           hover:border-yellow-500 hover:text-white hover:border w-[187px] h-[59px] leading-[27px] text-center "
              >
                Get Starter Today
              </a>
            </div>

            <div>
              <a
                href="##"
                class="bg-[#F6FBE9]shadow border border-[#E5F5BD] rounded-lg py-3.5 font-medium inline-block mr-4 
             w-[154px] h-[59px] leading-[27px] text-center "
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="flex items-center mt-16">
            <img src="Images/Container.png" alt="cover" className=""></img>
            <p className="ml-2 font-medium">
              <span className="text-[#468671]">430+</span> Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
