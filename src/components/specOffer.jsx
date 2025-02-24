import { offer } from "../assets/images";
import Button from "./button";
import { arrowRight } from "../assets/icons";
const SpecOffer = () => {
  return (
    <section
      id="specOffer"
      className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-container">
        <span className="font-montserrat font-bold text-4xl  xl:bg-white xl:whitespace-wrap relative z-10 pr-10">
          special <span className="text-coral-red">offer</span>
        </span>
        <br />

        <p className="font-montserrat text-slate-gray  max-sm:pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          accusantium quo, ea officiis illum deleniti nemo corrupti est minus
        </p>
        <br />
        <br />
        <p className="font-montserrat text-slate-gray  max-sm:pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          accusantium quo, ea officiis illum deleniti nemo corrupti est minus
        </p>
        <Button iconUrl={arrowRight} word={"learn more"} />
      </div>
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default SpecOffer;
