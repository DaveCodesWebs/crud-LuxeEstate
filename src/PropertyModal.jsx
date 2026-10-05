export default function PropertyModal({ item, close }) {
  return (
    <div id="property-modal-overlay">
      <div id="property-modal">
        <button id="close-btn" onClick={close}>
          ✕
        </button>

        <img
          className="property-image"
          src={item.image || "https://placehold.co/900x450?text=No+Image"}
          alt={item.title}
        />
        <div className="property-header">
          <div className="badge-group">
            <span className={`badge badge-${item.status.toLowerCase().replace(" ", "-")}`}>
              {item.status}
            </span>
            <span className="category-tag">
              {item.category}
            </span>
          </div>

          <h1>{item.title}</h1>
          <p className="location">{item.location}</p>

          <p className="price">€{item.price.toLocaleString()}</p>
        </div>

        <div className="property-details">
          <div className="detail-card">
            <span className="label">Bedrooms</span>
            <span className="value">{item.bedrooms}</span>
          </div>

          <div className="detail-card">
            <span className="label">Bathrooms</span>
            <span className="value">{item.bathrooms}</span>
          </div>

          <div className="detail-card">
            <span className="label">Area</span>
            <span className="value">{item.area} m²</span>
          </div>

          <div className="detail-card">
            <span className="label">Owner ID</span>
            <span className="value">#{item.ownerId}</span>
          </div>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>

        <div className="modal-actions">
          <button className="secondary-btn" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}