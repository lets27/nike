import ShoeCard from "./shoeCard";
import { products } from "../constants/constants.js";

const PopularProducts = () => {
  return (
    <section id="products" className="">
      <div className="div">
        <h2 className="font-montserrat font-bold text-4xl mb-2 leading-normal ">
          Our{" "}
          <span className="text-coral-red max-sm:text-[43px] max-sm:leading-[62px] leading-normal">
            popular
          </span>{" "}
          Products
        </h2>

        <span className="font-montserrat  text-slate-gray leading-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          eaque!
        </span>

        <div className="collection flex justify-between max-container mt-10 max-sm:flex-wrap ">
          {products.map((prod) => (
            <ShoeCard
              key={prod.name}
              name={prod.name}
              price={prod.price}
              img={prod.imgURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
