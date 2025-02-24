import Button from "./button";
import { arrowRight } from "../assets/icons";
const Subs = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-col gap-6 items-center text-center"
    >
      <div>
        <h3 className="text-4xl leading-[68px] font-palanquin font-bold">
          Sign Up for
          <span className="text-coral-red"> & NewsLetter</span>
        </h3>
      </div>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="@subscribe@nike.com"
          className="w-full p-4 pr-20 border border-slate-gray rounded-full"
        />
        <Button
          word="Sign Up"
          iconUrl={arrowRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-coral-red text-white px-4 py-2 rounded-full"
        />
      </div>
    </section>
  );
};

export default Subs;
