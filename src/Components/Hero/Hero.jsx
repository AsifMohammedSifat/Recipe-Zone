import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-bg h-[250px] md:h-[500px] mt-5 opacity-85 flex flex-col justify-center items-center font-mono font-bold text-center">
        <div className="text-xl md:text-5xl text-white  md:w-2/3">
          Discover an exceptional cooking
        </div>
        <div className="text-xl md:text-5xl text-white  md:w-2/3">
          Dclass tailored for you!
        </div>

        <p className="text-xs md:text-lg text-white font-thin md:w-2/3 text-balance text-center">
          This is summertime in a bowl! Spicy shrimp with all the delicious
          heat, smoke, and sweetness we want, alongside a fresh peach and
          cucumber salad.
        </p>

        <div className="p-5">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md m-5 bg-[#0be58a] text-black font-bold rounded-2xl hover:text-white hover:bg-pink-500">
            Explore Now
          </button>

          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-transparent text-white border-white font-bold rounded-2xl">
            Our Feedback
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
