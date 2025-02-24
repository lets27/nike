import { shoe8 } from "../assets/images";
const SupQuality = () => {
  return (
    <div id="about-us" className="flex  max-sm:flex-wrap">
      <div className="">
        <h2 className=" font-palanquin font-bold text-4xl max-sm:leading-[45px] mb-4 ">
          we provide you{""}
          <span className="text-coral-red pl-4">{""}super</span> <br /> quality
          {""}
          <span className="text-coral-red"> shoes</span>
        </h2>
        <p className="xl:whitespace-wrap xl:leading-72px w-5.1/6 mb-8 max-sm:leading-[40px] font-montserrat leading-[35px]  text-slate-gray">
          Step into comfort and style with our premium footwear collection.
          Designed for performance and crafted with precision, our shoes offer
          the perfect blend of durability, elegance, and innovation. Whether you
          are hitting the streets or making a statement, we got the perfect pair
          for every occasion.
          <br />
          Elevate your style, enhance your comfort, and experience the
          difference of superior craftsmanship with every step.
          <br />
          <br />
          quam nihil possimus repellat ratione suscipit nisi cumque nulla
          aliquam.
        </p>
        <button className="btn btnTwo">see more</button>
      </div>

      <img src={shoe8} alt="" />
    </div>
  );
};

export default SupQuality;
