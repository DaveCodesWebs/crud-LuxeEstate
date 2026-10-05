export default function Filters({
    search,
    setSearch,
    sort,
    setSort,
}) {
    return (
       <div className="content-filter-bar">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search properties..."
              className="search-input"
            />
          </div>
             {/* //filter */}
          <div className="filter-select-wrapper">
            <select
              className="filter-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">No Sorting</option>
              <optgroup label="Price">
                <option value="price-low-high">Price: Low → High</option>
                <option value="price-high-low">Price: High → Low</option>
              </optgroup>
              <optgroup label="Area">
                <option value="area-low-high">Area: Low → High</option>
                <option value="area-high-low">Area: High → Low</option>
              </optgroup>
              <optgroup label="Category">
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Cabin">Cabin</option>
                <option value="Studio">Studio</option>
                <option value="Duplex">Duplex</option>
                <option value="Penthouse">Penthouse</option>
              </optgroup>
            </select>
          </div>
        </div>
    );
}