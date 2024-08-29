import { MdChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";

const Pagination = ({
  totalPage,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}: {
  totalPage: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (index: number) => void;
}) => {
  return (
    <div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-400 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <span onClick={handlePrevPage}>
              <MdChevronLeft />
            </span>
          </a>
        </li>

        {[...Array(totalPage)].map((_, index) => (
          <button
            key={`page-${index + 1}`}
            onClick={() => handlePageClick(index + 1)}
            className={
              currentPage === index + 1
                ? "block size-8 rounded border border-blue-500 bg-blue-600 text-center leading-8 text-white"
                : "block size-8 rounded border border-gray-400 bg-white"
            }
          >
            {index + 1}
          </button>
        ))}

        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-400 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <span onClick={handleNextPage}>
              <MdOutlineChevronRight />
            </span>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
