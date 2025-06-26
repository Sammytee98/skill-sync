import ReactPaginate from "react-paginate";

const PaginateJob = ({ jobs, jobsPerPage, setCurrentPage }) => {
  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {jobs.length > 10 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center space-x-3 mt-10"}
          pageClassName={
            "px-3 py-1 rounded bg-[rgb(var(--color-bg-neutral))] cursor-pointer"
          }
          activeClassName={"bg-[rgb(var(--color-brand))] text-white font-bold"}
          previousClassName={
            "px-3 py-1 rounded bg-[rgb(var(--color-bg-neutral))] border border-[rgb(var(--color-border))] cursor-pointer"
          }
          nextClassName={
            "px-3 py-1 rounded bg-[rgb(var(--color-bg-neutral))] border border-[rgb(var(--color-border))] cursor-pointer"
          }
        />
      )}
    </>
  );
};

export default PaginateJob;
