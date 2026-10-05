const compact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
});
console.log(compact.format(1200000)); // Output: $1.2M

export default function HouseList({
  items,
  initModal,
  handleDelete,
  selectedIds,
  setSelectedIds,
  initPropertyModal,
  setDeleteModalOpen,
  setSelected
}) {
    const handleSelectAll = () => {
  if (selectedIds.length === items.length) {
    setSelectedIds([]);
  } else {
    setSelectedIds(items.map(item => item.id));
  }
};
 const handleConfirmation = (itemId) => {
  setSelected(itemId) 
  setDeleteModalOpen(true)
 }

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="table-responsive">
      <table className="properties-table">
        <thead>
          <tr>
            <th className="checkbox-col">
              <button className="btn-select-all" onClick={handleSelectAll}>
                {selectedIds.length === items.length && items.length > 0 ? "None" : "All"}
              </button>
            </th>
            <th className="id-col">ID</th>
            <th className="title-col">Title</th>
            <th className="price-col">Price</th>
            <th className="location-col">Location</th>
            <th className="category-col">Category</th>
            <th className="status-col">Status</th>
            <th className="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={selectedIds.includes(item.id) ? "row-selected" : ""}>
              <td className="checkbox-col">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => handleSelect(item.id)}
                  className="checkbox-input"
                />
              </td>
              <td className="id-col">#{item.id}</td>
              <td className="title-col font-medium">{item.title}</td>
              <td className="price-col font-semibold">{compact.format(item.price)}</td>
              <td className="location-col">{item.location}</td>
              <td className="category-col">
                <span className="category-tag">{item.category}</span>
              </td>
              <td className="status-col">
                <span className={`badge badge-${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </span>
              </td>
              <td className="actions-col">
                <div className="action-buttons-group">
                  <button className="btn-action btn-view" onClick={() => initPropertyModal(item.id)}>
                    View
                  </button>
                  <button className="btn-action btn-edit" onClick={() => initModal(item.id, "update")}>
                    Edit
                  </button>
                  <button className="btn-action btn-delete" onClick={() => handleConfirmation(item.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
