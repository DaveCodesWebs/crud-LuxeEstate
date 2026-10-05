export default function NoProperties({ initModal }) {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">🏘️</div>

            <h3>No Properties Found</h3>

            <p>
                Try refining your search or add a new property listing.
            </p>

            <button
                className="btn btn-primary"
                onClick={() => initModal(null,"add")}
            >
                Add Property
            </button>

        </div>
    );
}