import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import NO_DATA_2 from "../assets/no_data_img.png";
import Loader from "./Loader";

const TableContainer = ({ children }) => (
  <div className="mx-15">{children}</div>
);

const Table = ({
  title,
  headers,
  data,
  mobileView,
  currentPage,
  totalPages,
  basePageLink,
  onPageChange,
  itemsCountPerPage = 10,
  loading,
}) => {
  return (
    <TableContainer>
      {data && data.length > 0 ? (
        <>
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="header">
                  {headers.map((header, i) => (
                    <td key={i} className="p-4 font-semibold">
                      {header}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="p-5">
                      <div className="flex justify-center items-center w-full">
                        <Loader />
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {data.map((row, i) => {
                      return (
                        <tr key={i} className="border-b border-[#E4E7EC]">
                          {Object.keys(row).map((column, i) => {
                            return (
                              <td key={i} className="p-5">
                                {column === "prescription" ||
                                column === "notes" ? (
                                  row[column] !== "" ? (
                                    <Link to="/dashboard/prescription">
                                      View
                                    </Link>
                                  ) : (
                                    "None"
                                  )
                                ) : (
                                  row[column]
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            <MobileTable data={data} mobileView={mobileView} />
          </div>

          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            itemsCountPerPage={itemsCountPerPage}
          />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            alt="not-found"
            src={NO_DATA_2}
            className="w-48"
            width={200}
            height={200}
          />
          <span className="text-sm">
            There are currently no {title ?? "data"} found
          </span>
        </div>
      )}
    </TableContainer>
  );
};

export default Table;

const MobileTableContainer = ({ children }) => (
  <div className="flex flex-wrap gap-10">{children}</div>
);

const MobileTable = ({ data, mobileView }) => {
  return (
    <MobileTableContainer>
      {data.map((row, i) => {
        return (
          <React.Fragment key={i}>
            {React.cloneElement(mobileView, { data: row })}
          </React.Fragment>
        );
      })}
    </MobileTableContainer>
  );
};

const PaginationContainer = ({ children }) => (
  <div className="flex justify-center items-center my-20">{children}</div>
);

export const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsCountPerPage,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageChange = (e) => {
    onPageChange(e.selected + 1);
    const newOffset = (e.selected * itemsCountPerPage) % totalPages;
    setItemOffset(newOffset);
  };

  const endOffset = itemOffset + itemsCountPerPage;
  function generateArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  const currentItems = generateArray(endOffset);
  const pageCount = Math.ceil(totalPages / itemsCountPerPage);

  return (
    <PaginationContainer>
      {totalPages > itemsCountPerPage && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageChange}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          initialPage={0}
          activeClassName="active-pagination"
        />
      )}
    </PaginationContainer>
  );
};
