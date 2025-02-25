import Button from "./button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants/constants.js";

const Hero = () => {
  return (
    <section
      id="home"
      className=" padding-x w-full  flex xl:flex-row flex-col gap-10  items-center min-h-screen max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[32px] max-sm:leading-[62px] font-bold">
          <span className="font-montserrat text-8xl  xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrivial
          </span>
          <br />
          <span className="relative bg-white font-montserrat  z-10">
            Nike shoes
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray  leading-[30px] max-sm:pt-4">
          Elevate your sneaker game with our latest Nike collection. Designed
          for ultimate performance and unmatched style, our shoes blend
          cutting-edge innovation with timeless comfort. Whether you’re hitting
          the streets or pushing your limits, step into the future of footwear
          with Nike.
        </p>
        <Button label={"shop now"} iconUrl={arrowRight} />

        <div className=" relative  flex justify-start items-start flex-wrap w-full mt-5 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-montserrat ">{stat.value}</p>
              <p className="font-montserrat ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  flex flex-col flex-1 justify-center items-center xl:min-h screen max-xl:pl-40   max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="" className=" object-contain relative z-5" />
        <div className="relative flex gap-10 items-center translate-y-10 overflow-visible">
          {shoes.map((shoe, index) => (
            <div className="div w-32 card-hover " key={index}>
              <img
                src={shoe.thumbnail}
                alt=""
                className=" block rounded-xl border border-white-400 bg-primary"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
