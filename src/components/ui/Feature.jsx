const Feature = ({ offer }) => {
  return (
    <div className="bg-[rgb(var(--color-bg-neutral))] rounded-2xl p-6 shadow-lg transition hover-scale-[1.03]">
      <offer.icon className="text-3xl text-[rgb(var(--color-brand))] mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
      <p className="text-base text-[rgb(var(--color-text-neutral))]">
        {offer.desc}
      </p>
    </div>
  );
};

export default Feature;
