import { services } from "../constants/constants.js";
const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <div
          className="div flex-1 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 card-hover  "
          key={service.label}
        >
          <div className="div flex w-11 h-11 justify-center items-center rounded-full bg-coral-red mb-6">
            <img src={service.imgURL} alt="img" width={24} height={24} />
          </div>
          <div className="div flex flex-col gap-2 ">
            <span className="font-palanquin font-semibold ">
              {service.label}
            </span>
            <span className="font-palanquin text-slate-gray">
              {service.subtext}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
