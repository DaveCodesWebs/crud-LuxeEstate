export default function PropertyPerPage({setItemsPerPage, setCurrentPage, itemsPerPage}){
    return(
        <div className="per-page-wrapper">
                <span>Show</span>
                <select
                  value={itemsPerPage}
                  className="per-page-select"
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
                <span>entries</span>
              </div> 

    )
}