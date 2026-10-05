import { useState } from "react";

const emptyProperty = {
  title: "",
  description: "",
  price: "",
  location: "",
  category: "",
  status: "For Sale",
  bedrooms: "",
  bathrooms: "",
  area: "",
  image: "",
  ownerId: "",
};

export default function Modal({ data, updateData, closeModal, addData, mode }) {
  const [newData, setNewData] = useState(data || {});
  const isBulkMode = mode === "bulk-update";

  function handleChange(e) {
    setNewData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div id="modal" className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2>
            {mode === "add"
              ? "Add New Property"
              : mode === "bulk-update"
                ? "Bulk Update Properties"
                : "Edit Property"}
          </h2>
          <button className="btn-close" onClick={closeModal} type="button">
            ✕
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (mode === "add") {
              addData(newData);
            } else {
              updateData(data?.id, newData);
            }
          }}
        >
          <div className="form-grid">
            <div className="input-group full-width">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                value={newData.title || ""}
                onChange={handleChange}
                placeholder="e.g. Modern Beachfront Apartment"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group full-width">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={newData.description || ""}
                onChange={handleChange}
                placeholder="Provide a detailed description of the property..."
                rows="3"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="price">Price (€)</label>
              <input
                id="price"
                name="price"
                type="number"
                value={newData.price || ""}
                onChange={handleChange}
                placeholder="e.g. 150000"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                value={newData.location || ""}
                onChange={handleChange}
                placeholder="e.g. Tirana"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={newData.category || ""}
                onChange={handleChange}
                required={!isBulkMode}
              >
                <option value="">Select Category</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Cabin">Cabin</option>
                <option value="Studio">Studio</option>
                <option value="Duplex">Duplex</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={newData.status || ""}
                onChange={handleChange}
                required={!isBulkMode}
              >
                <option value="For Sale">For Sale</option>
                <option value="Sold">Sold</option>
                <option value="Pending">Pending</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                id="bedrooms"
                name="bedrooms"
                type="number"
                value={newData.bedrooms || ""}
                onChange={handleChange}
                placeholder="e.g. 3"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                id="bathrooms"
                name="bathrooms"
                type="number"
                value={newData.bathrooms || ""}
                onChange={handleChange}
                placeholder="e.g. 2"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="area">Area (m²)</label>
              <input
                id="area"
                name="area"
                type="number"
                value={newData.area || ""}
                onChange={handleChange}
                placeholder="e.g. 120"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group">
              <label htmlFor="ownerId">Owner ID</label>
              <input
                id="ownerId"
                name="ownerId"
                type="number"
                value={newData.ownerId || ""}
                onChange={handleChange}
                placeholder="e.g. 101"
                required={!isBulkMode}
              />
            </div>

            <div className="input-group full-width">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                name="image"
                value={newData.image || ""}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {mode === "update"
                ? "Save Changes"
                : mode === "bulk-update"
                  ? "Bulk Update"
                  : "Add Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
