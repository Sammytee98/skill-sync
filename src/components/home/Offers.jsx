import { memo } from "react";
import { offers } from "../../data/offers";
import Feature from "../ui/Feature";

const Offers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        What SkillSync Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Feature key={offer.title} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default memo(Offers);
