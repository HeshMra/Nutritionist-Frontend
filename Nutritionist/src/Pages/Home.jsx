import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
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

      {/* Features section */}
      <div className="text-center mt-36">
        <h1 className="text-5xl font-semibold ">Features</h1>
        <p className="mt-2.5">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>
      </div>

      <div className="mx-40 mt-20 flex ">
        <div>
          <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
            <div className="flex items-center mx-10 my-12">
              <img src="Images/Icon Container.png" alt="" />
              <h1 className="text-2xl font-semibold ml-3.5">
                Personalized Nutrition Plans
              </h1>
            </div>

            <p className="mx-10  mt-[-25px] ">
              Receive a tailored nutrition plan designed specifically for your
              body and goals. Our <br /> certified nutritionists will consider
              your unique needs, dietary preferences, and health conditions to
              create a plan that suits you best.
            </p>
          </div>

          <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-6">
            <div className="flex items-center mx-10 my-12">
              <img src="Images/Icon Container-1.png" alt="" />
              <h1 className="text-2xl font-semibold ml-3.5">
                Food Tracking and Analysis
              </h1>
            </div>

            <p className="mx-10  mt-[-25px] ">
              Effortlessly track your food intake using our user-friendly app.
              Our nutritionists will analyze your data to provide insights into
              your eating habits, help you identify areas for improvement, and
              make personalized recommendations.
            </p>
          </div>

          <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-6">
            <div className="flex items-center mx-10 my-12">
              <img src="Images/Icon Container-3.png" alt="" />
              <h1 className="text-2xl font-semibold ml-3.5">
                Lifestyle and Behavior Coaching
              </h1>
            </div>

            <p className="mx-10  mt-[-25px] ">
              Achieving sustainable results requires more than just a diet plan.
              Our nutritionists will work with you to develop healthy habits,
              address emotional eating, and provide strategies to overcome
              obstacles along the way.
            </p>
          </div>
        </div>

        {/* second column */}
        <div className="ml-6">
          <div>
            <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
              <div className="flex items-center mx-10 my-12">
                <img src="Images/Icon Container-0.png" alt="" />
                <h1 className="text-2xl font-semibold ml-3.5">
                  Guidance from Certified Nutritionists{" "}
                </h1>
              </div>

              <p className="mx-10  mt-[-25px] ">
                Our team of experienced and certified nutritionists will provide
                professional guidance and support throughout your journey. They
                will answer your questions, address your concerns, and keep you
                motivated as you work towards your goals.
              </p>
            </div>
          </div>

          <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-6">
            <div className="flex items-center mx-10 my-12">
              <img src="Images/Icon Container-2.png" alt="" />
              <h1 className="text-2xl font-semibold ml-3.5">
                Meal Planning and Recipes{" "}
              </h1>
            </div>

            <p className="mx-10  mt-[-25px] ">
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs. Our nutritionists will also create
              personalized meal plans, making it easier for you to stay on track
              and enjoy nutritious meals.
            </p>
          </div>
          <div className="w-[680px] h-[250px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-6">
            <div className="flex items-center mx-10 my-12">
              <img src="Images/Icon Container-4.png" alt="" />
              <h1 className="text-2xl font-semibold ml-3.5">
                Nutritional Education and Workshops
              </h1>
            </div>

            <p className="mx-10  mt-[-25px] ">
              Expand your knowledge of nutrition through informative articles
              and educational workshops. Our nutritionists will equip you with
              the knowledge and tools to make informed choices for long-term
              success.
            </p>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div className="text-center mt-36">
        <h1 className="text-5xl font-semibold ">Our Blogs</h1>
        <p className="mt-2.5">
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness
          experts. Here's what you can expect from our blog.
        </p>
      </div>

      <div className="mx-40 mt-20 flex ">
        <div>
          <div className="w-[680px] h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
            <div className=" mx-10 my-12">
              <img src="Images/b1.png" alt="" />
              <p className="mt-10">Weight Loss</p>
              <h1 className="text-2xl font-semibold ">
                The Benefits of Hydration for Weight Loss
              </h1>
              <p className="mt-7">
                Discover how staying hydrated can support your weight loss goals
                and improve overall health.
              </p>

              <div className=" mt-7 w-[600px] h-[100px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
                <div className="flex items-center mx-4 my-4 ">
                  <img src="Images/emily.png" alt="" />
                  <h1 className="text-xl font-semibold ml-3.5">
                    Emily Johnson <br />{" "}
                    <span className="font-normal text-base ">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex ml-auto ">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[680px] h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-7">
            <div className=" mx-10 my-12">
              <img src="Images/b2.png" alt="" />
              <p className="mt-10">Understanding Macronutrients</p>
              <h1 className="text-2xl font-semibold ">
                Carbohydrates, Proteins, and Fats
              </h1>
              <p className="mt-7">
                Get a comprehensive understanding of macronutrients and their
                role in your diet for optimal health and weight management.
              </p>

              <div className=" mt-7 w-[600px] h-[100px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
                <div className="flex items-center mx-4 my-4 ">
                  <img src="Images/Mark.png" alt="" />
                  <h1 className="text-xl font-semibold ml-3.5">
                    Mark Wilson <br />{" "}
                    <span className="font-normal text-base ">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex ml-auto ">
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
        <div className="ml-6">
          <div className="w-[680px] h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
            <div className=" mx-10 my-12">
              <img src="Images/b3.png" alt="" />
              <p className="mt-10">Mindful Eating</p>
              <h1 className="text-2xl font-semibold ">
                Cultivating a Healthy Relationship with Food
              </h1>
              <p className="mt-7">
                Learn how practicing mindful eating can help you develop a
                healthier relationship with food and improve your overall
                well-being.
              </p>

              <div className=" mt-7 w-[600px] h-[100px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
                <div className="flex items-center mx-4 my-4 ">
                  <img src="Images/sarah.png" alt="" />
                  <h1 className="text-xl font-semibold ml-3.5">
                    Sarah Thompson <br />{" "}
                    <span className="font-normal text-base ">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex ml-auto ">
                    <img src="Images/heart.png" alt="" />
                    <img src="Images/lg.png" alt="" className="ml-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[680px] h-[770px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl mt-7 ">
            <div className=" mx-10 my-12">
              <img src="Images/b4.png" alt="" />
              <p className="mt-10">Healthy Snacks on the Go</p>
              <h1 className="text-2xl font-semibold ">
                Quick and Nutritious Options
              </h1>
              <p className="mt-7">
                Explore a variety of convenient and healthy snack ideas to keep
                you fueled throughout the day.
              </p>

              <div className=" mt-7 w-[600px] h-[100px] bg-[#F6FBE9] shadow border border-[#E5F5BD] rounded-xl ">
                <div className="flex items-center mx-4 my-4 ">
                  <img src="Images/emily2.png" alt="" />
                  <h1 className="text-xl font-semibold ml-3.5">
                    Emily Johnson <br />{" "}
                    <span className="font-normal text-base ">
                      23 May 2023 - 5 min read
                    </span>
                  </h1>
                  <div className="flex ml-auto ">
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

      <div className="text-center mt-36">
        <h1 className="text-5xl font-semibold ">Our Testimonials</h1>
        <p className="mt-2.5">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>

      {/* carasoul should add Here
      -
      -
      -
      -
      -
      - */}

      {/* Pricing section  */}

      <div className="text-center mt-36">
        <h1 className="text-5xl font-semibold ">Our Pricing</h1>
        <p className="mt-2.5">
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that <br />{" "}
          everyone deserves access to personalized nutrition guidance and
          resources
        </p>

        <div className="mt-20">
    
        <a href="##" 
        class="bg-[#F6FBE9]shadow border border-[#E5F5BD] rounded-lg py-3.5  
        inline-block mr-4 w-[233px] h-[67px] leading-[27px] text-center">
                Book a Demo
              </a>


        </div>


      </div>





      
    </div>
  );
};

export default Home;
