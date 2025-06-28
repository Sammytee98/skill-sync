import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search title or company"
        className="absolute px-3 py-2 w-full border-2 border-[rgb(var(--color-border))] outline-none focus:border-[rgb(var(--color-brand))] transition rounded-full text-sm"
      />
      <AiOutlineSearch className=" text-lg text-[rgb(var(--color-border))] absolute right-5 top-[50%] translate-y-[50%] pointer-events-none" />
    </div>
  );
};
export default Search;
