import { AiOutlineFilter, AiFillFilter } from "react-icons/ai";
import { motion } from "framer-motion";
import { memo } from "react";

const Filter = ({
  showDropdown,
  setShowDropdown,
  locationFilter,
  setLocationFilter,
}) => {
  const Filter = showDropdown ? AiFillFilter : AiOutlineFilter;
  const location = ["all", "remote", "on-site"];

  return (
    <div className="relative top-9 inline-block text-left mb-6">
      <button
        type="button"
        onClick={() => setShowDropdown((prev) => !prev)}
        className=" cursor-pointer"
      >
        <Filter className="text-xl" />
      </button>
      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -left-18 mt-2 w-25 rounded-md shadow-lg bg-[rgb(var(--color-bg-neutral))] border z-10"
        >
          <ul className="text-sm text-left">
            {location.map((type) => (
              <li
                key={type}
                onClick={() => {
                  setLocationFilter(type);
                  setShowDropdown(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-[rgb(vvar(--color-bg-neutral))] capitalize ${
                  locationFilter === type
                    ? "font-semibold text-[rgb(var(--color-brand))]"
                    : ""
                }`}
              >
                {type}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.showDropdown === nextProps.showDropdown &&
    prevProps.locationFilter === nextProps.locationFilter
  );
};

export default memo(Filter, areEqual);
