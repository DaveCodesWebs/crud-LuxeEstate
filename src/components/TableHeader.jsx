
export default function TableHeader({initModal}){
    return(
        <div className="content-header">
          <div className="content-title-wrapper">
            <h2>Properties Directory</h2>
            <p className="content-subtitle">
              Manage and track your property listings, status, and pricing.
            </p>
          </div>
          <div className="content-actions">
            <button
              className="btn btn-primary btn-add"
              onClick={() => initModal(null, "add")}
            >
              <span className="btn-icon">+</span> Add Property
            </button>
          </div>
        </div>
    )
}
