import { memo } from "react";

const Feature = ({ offer }) => {
  return (
    <div className="bg-[rgb(var(--color-bg-neutral))] border-[rgb(var(--color-border))] border-t-2 border-b-2 rounded-2xl p-6 transition hover:scale-[1.03]">
      <offer.icon className="text-3xl text-[rgb(var(--color-brand))] mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
      <p className="text-base text-[rgb(var(--color-text-neutral))]">
        {offer.desc}
      </p>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.offer.title === nextProps.offer.title &&
    prevProps.offer.desc === nextProps.offer.desc
  );
};

export default memo(Feature, areEqual);
