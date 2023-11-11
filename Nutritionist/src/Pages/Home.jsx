import React from "react";
import Carasoul from "../Components/carasoul";
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="lg:flex xl:flex md:px-0 px-4">
        
        <img
          src="Images/cover.png"
          alt="cover"
          className="m:w-1/2 m:h-1/2 rounded-br-[50px] md:mt-16 "
        ></img>

        <div className="md:ml-12 md:mt-40 mt-7 px-4">
          <p className="md:text-[28px]  md:font-semibold text-lg font-semibold text-center md:text-left ">
            Transform Your ❤️ Health with
          </p>
          <h1 className="md:mt-3.5  md:text-[58px] md:font-semibold  md:leading-tight text-[38px] font-bold text-center md:text-left">
            Personalized Nutrition Coaching
          </h1>
          <p className="md:mt-5 mt-4 text-center md:text-left md:text-lg text-sm">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition
            coaching. Our certified nutritionists are here to guide you
            on your weight loss journey, providing 
            customized plans and ongoing support. Start your transformation
            today and experience the  power of personalized nutrition
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

          <div className="flex flex-col md:flex-row items-center mt-16">
            <img src="Images/Container.png" alt="cover" className=""></img>
            <p className="ml-2 font-medium">
              <span className="text-[#468671]">430+</span> Happy Customers
            </p>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="text-center md:mt-36  px-4 mt-16">
        <h1 className="text-5xl font-semibold ">Features</h1>
        <p className="mt-2.5 md:text-lg text-sm">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>
      </div>

      <div className="md:mx-40 md:mt-20 mt-10 md:flex-row flex flex-col px-4 items-center ">
        <div>
          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 ">
            <div className="flex items-center md:mx-10 md:my-12">
              <img src="Images/Icon Container.png" alt="" />
              <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                Personalized Nutrition Plans
              </h1>
            </div>

            <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
              Receive a tailored nutrition plan designed specifically for your
              body and goals. Our <br /> certified nutritionists will consider
              your unique needs, dietary preferences, and health conditions to
              create a plan that suits you best.
            </p>
          </div>

          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 md:mt-6 mt-6">
          <div className="flex items-center md:mx-10 md:my-12">
              <img src="Images/Icon Container-1.png" alt="" />
              <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                Food Tracking and Analysis
              </h1>
            </div>

            <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
              Effortlessly track your food intake using our user-friendly app.
              Our nutritionists will analyze your data to provide insights into
              your eating habits, help you identify areas for improvement, and
              make personalized recommendations.
            </p>
          </div>

          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 md:mt-6 mt-6">
          <div className="flex items-center md:mx-10 md:my-12">
              <img src="Images/Icon Container-3.png" alt="" />
              <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                Lifestyle and Behavior Coaching
              </h1>
            </div>

            <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
              Achieving sustainable results requires more than just a diet plan.
              Our nutritionists will work with you to develop healthy habits,
              address emotional eating, and provide strategies to overcome
              obstacles along the way.
            </p>
          </div>
        </div>

        {/* second column */}
        <div className="md:ml-6">
          <div>
          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 md:mt-0 mt-6 ">
          <div className="flex items-center md:mx-10 md:my-12">
                <img src="Images/Icon Container-0.png" alt="" />
                <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                  Guidance from Certified Nutritionists{" "}
                </h1>
              </div>

              <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
                Our team of experienced and certified nutritionists will provide
                professional guidance and support throughout your journey. They
                will answer your questions, address your concerns, and keep you
                motivated as you work towards your goals.
              </p>
            </div>
          </div>

          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 md:mt-6 mt-6 ">
          <div className="flex items-center md:mx-10 md:my-12">
              <img src="Images/Icon Container-2.png" alt="" />
              <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                Meal Planning and Recipes{" "}
              </h1>
            </div>

            <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs. Our nutritionists will also create
              personalized meal plans, making it easier for you to stay on track
              and enjoy nutritious meals.
            </p>
          </div>

          <div className="md:w-[680px] md:h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl w-[358px] h-[229px] md:p-0 p-6 md:mt-6 mt-6">
          <div className="flex items-center md:mx-10 md:my-12">
              <img src="Images/Icon Container-4.png" alt="" />
              <h1 className="md:text-2xl font-semibold md:ml-3.5 text-lg ml-2 ">
                Nutritional Education and Workshops
              </h1>
            </div>

            <p className="md:mx-10  md:mt-[-25px] text-sm  md:text-base mt-3">
              Expand your knowledge of nutrition through informative articles
              and educational workshops. Our nutritionists will equip you with
              the knowledge and tools to make informed choices for long-term
              success.
            </p>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div className="text-center md:mt-36 px-4 mt-12">
        <h1 className="text-5xl font-semibold ">Our Blogs</h1>
        <p className="mt-6 md:mt-2.5 text-sm md:text-base">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </div>

      <div className="mt-4 md:mx-40 md:mt-20 md:flex  px-4">
        <div>
          <div className="md:w-[680px] md:h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
            <div className=" md:mx-10 md:my-12 md:p-0 p-4">
              <img src="Images/b1.png" alt="" />
              <p className="md:mt-10 mt-6">Weight Loss</p>
              <h1 className="text-2xl font-semibold ">
                The Benefits of Hydration for Weight Loss
              </h1>
              <p className="md:mt-7 mt-2 text-sm md:text-base ">
                Discover how staying hydrated can support your weight loss goals
                and improve overall health.
              </p>

              <div className="col-2 mt-6 md:p-0 p-2 md:mt-7 md:w-[600px] md:h-[100px] w-full h-[145px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
                <div className="flex items-center md:mx-4 md:my-4 ">
                  <img src="Images/emily.png" alt="" />
                  <h1 className="md:text-xl text-lg font-semibold ml-3.5">
                    Emily Johnson <br />{" "}
                    <span className="font-normal md:text-base text-sm">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex md:ml-auto md:flex-row  flex-col ml-16">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-6 mt-6 md:w-[680px] md:h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
          <div className=" md:mx-10 md:my-12 md:p-0 p-4">              <img src="Images/b2.png" alt="" />
              <p className="md:mt-10 mt-6">Understanding Macronutrients</p>
              <h1 className="text-2xl font-semibold ">                Carbohydrates, Proteins, and Fats
              </h1>
              <p className="mt-7">
                Get a comprehensive understanding of macronutrients and their
                role in your diet for optimal health and weight management.
              </p>

              <div className="col-2 mt-6 md:p-0 p-2 md:mt-7 md:w-[600px] md:h-[100px] w-full h-[145px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
              <div className="flex items-center md:mx-4 md:my-4 ">
                  <img src="Images/Mark.png" alt="" />
                  <h1 className="md:text-xl text-lg font-semibold ml-3.5">
                    Mark Wilson <br />{" "}
                    <span className="font-normal md:text-base text-sm">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex md:ml-auto md:flex-row  flex-col ml-16">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* next container start here */}
        </div>

        {/* second column */}
        <div className="md:ml-6 ">
        <div className="md:w-[680px] md:h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl md:mt-0 mt-6">
        <div className=" md:mx-10 md:my-12 md:p-0 p-4">   
              <img src="Images/b3.png" alt="" />
              <p className="md:mt-10 mt-6">Mindful Eating</p>
              <h1 className="text-2xl font-semibold ">
                Cultivating a Healthy Relationship with Food
              </h1>
              <p className="mt-7">
                Learn how practicing mindful eating can help you develop a
                healthier relationship with food and improve your overall
                well-being.
              </p>

              <div className="col-2 mt-6 md:p-0 p-2 md:mt-7 md:w-[600px] md:h-[100px] w-full h-[145px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
              <div className="flex items-center md:mx-4 md:my-4 ">
                  <img src="Images/sarah.png" alt="" />
                  <h1 className="md:text-xl text-lg font-semibold ml-3.5">
                    Sarah Thompson <br />{" "}
                    <span className="font-normal md:text-base text-sm">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex md:ml-auto md:flex-row  flex-col ml-16">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:mt-6 mt-6 md:w-[680px] md:h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
          <div className=" md:mx-10 md:my-12 md:p-0 p-4">   
              <img src="Images/b4.png" alt="" />
              <p className="md:mt-10 mt-6">Healthy Snacks on the Go</p>
              <h1 className="text-2xl font-semibold ">
                Quick and Nutritious Options
              </h1>
              <p className="mt-7">
                Explore a variety of convenient and healthy snack ideas to keep
                you fueled throughout the day.
              </p>

              <div className="col-2 mt-6 md:p-0 p-2 md:mt-7 md:w-[600px] md:h-[100px] w-full h-[145px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
              <div className="flex items-center md:mx-4 md:my-4 ">
                  <img src="Images/emily2.png" alt="" />
                  <h1 className="md:text-xl text-lg font-semibold ml-3.5">
                    Emily Johnson <br />{" "}
                    <span className="font-normal md:text-base text-sm">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex md:ml-auto md:flex-row  flex-col ml-16">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next container start here */}
        </div>
      </div>
      
     
      {/* Testimonial section  */}

      <div className="  text-center md:mt-36 px-4 mt-12 ">
        <h1 className="text-5xl font-semibold ">Our Testimonials</h1>
        <p className="mt-2.5 text-sm md:text-base ">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>

      <Carasoul/>
      {/* carasoul should add Here
      -
      -
      -
      -
      -
      - */}

      {/* Pricing section  */}

      <div className="text-center mt-36 px-4">
        <h1 className="text-5xl font-semibold ">Our Pricing</h1>
        <p className="mt-2.5 text-sm md:text-base ">
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. <br /> We believe that {" "}
          everyone deserves access to personalized nutrition guidance and
          resources
        </p>

        <div className="mt-20 flex justify-center items-center ">
          <div class="bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-lg py-2 inline-block w-[240px] h-[67px] leading-[27px] ">
            <div class="bg-[#234338] shadow border  rounded-lg  inline-block w-[114px] h-[47px] leading-[27px] text-white py-2 ">
              <p>Monthly</p>
            </div>

            <div class="bg-[#F6FBE9] shadow border border-[#E5F5BD]   rounded-lg  inline-block w-[114px] h-[47px] leading-[27px]  py-2 ">
              <p>Yearly</p>
            </div>
          </div>
        </div>
        <p className="mt-3.5">Save 50% on Yearly</p>
      </div>

      {/* Packages section */}
      <div className="md:mx-40 md:mt-20 md:mb-36 md:flex px-16  ">

        <div className="md:w-[400px] md:h-[497px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-7 w-[358px] h-[400px]  ">
          <div className="md:mx-10 md:my-10 md:p-0 p-8 ">
            <h1 className="md:text-3xl text-2xl font-semibold">Premium Plan</h1>
            <p className="md:text-base text-sm">Up to 50% off on Yearly Plan</p>
            <p className="mt-10 md:text-lg  text-sm ">
            Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan,
             you'll receive video consultations, priority support, 
             and personalized recipe recommendations..
            </p>

            <h1 className="md:text-[50px] text-[40px] font-bold mt-10 text-[#2C5446]">
            $79 <span className="text-[#000000] text-lg">/month</span>
            </h1>

            <div className="mt-4">
              <a
                href="##"
                class="bg-[#CBEA7B] shadow border rounded-lg md:py-3.5 py-2 font-medium inline-block mr-4 
                md:w-[300px] md:h-[58px] leading-[27px] text-center w-[300px] h-[45px]"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        {/* next one starts here */}
        <div className=" md:ml-6  md:w-[400px] md:h-[497px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-7 w-[358px] h-[400px] ">
          <div className="md:mx-10 md:my-10 md:p-0 p-8">
          <h1 className="md:text-3xl text-2xl font-semibold">Basic Plan</h1>
          <p className="md:text-base text-sm">Up to 50% off on Yearly Plan</p>
          <p className="mt-10 md:text-lg  text-sm ">
              Get started on your health journey with our Basic Plan. It
              includes personalized nutrition coaching, access to our app, meal
              planning assistance, and email support.
            </p>

            <h1 className="md:text-[50px] text-[40px] font-bold mt-10 text-[#2C5446]">
              $49 <span className="text-[#000000] text-lg">/month</span>
            </h1>

            <div className="mt-4">
              <a
                href="##"
                class="bg-[#CBEA7B] shadow border rounded-lg md:py-3.5 py-2 font-medium inline-block mr-4 
                md:w-[300px] md:h-[58px] leading-[27px] text-center w-[300px] h-[45px]"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
          {/* next one starts here */}
          <div className="md:ml-6 mb-7  md:w-[400px] md:h-[497px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-7 w-[358px] h-[400px] ">
          <div className="md:mx-10 md:my-10 md:p-0 p-8">
          <h1 className="md:text-3xl text-2xl font-semibold">Ultimate Plan</h1>
          <p className="md:text-base text-sm">Up to 50% off on Yearly Plan</p>
          <p className="mt-10 md:text-lg  text-sm ">
            Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. 
            Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.
            </p>

            <h1 className="md:text-[50px] text-[40px] font-bold mt-10 text-[#2C5446]">
            $99 <span className="text-[#000000] text-lg">/month</span>
            </h1>

            <div className="mt-4">
              <a
               href="##"
               class="bg-[#CBEA7B] shadow border rounded-lg md:py-3.5 py-2 font-medium inline-block mr-4 
               md:w-[300px] md:h-[58px] leading-[27px] text-center w-[300px] h-[45px]"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        {/* next one starts here */}

      </div>
    </div>
  );
};

export default Home;
