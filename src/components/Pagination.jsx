


export default function Pagination({setCurrentPage, currentPage, totalPages,}){
    return(
         <div className="pagination">
                <button
                  className="btn-pagination"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="pagination-info">
                  Page <strong>{currentPage}</strong> of{" "}
                  <strong>{totalPages}</strong>

                </span>
                <button
                  className="btn-pagination"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
    )
}