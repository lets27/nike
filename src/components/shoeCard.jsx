import { star } from "../assets/icons";

const ShoeCard = ({ img, name, price }) => {
  return (
    <div className="card-hover">
      <img src={img} alt="prod" className="block" />
      <div className="flex flex-col gap-2">
        <div className="flex">
          <img src={star} alt="" width={10} height={10} />{" "}
          <span className="text-slate-gray">4.5</span>
        </div>
        <span className="font-palanquin font-semibold leading-normal">
          {name}
        </span>
        <span className="font-palanquin font-semibold text-coral-red leading-normal">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ShoeCard;
