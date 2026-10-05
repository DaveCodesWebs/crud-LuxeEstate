export default function BulkActions({
    selectedIds,
    initModal,
    handleDelete,
setDeleteModalOpen
}) {
    if (selectedIds.length === 0) return null;

    return (
        <div className="bulk-actions-bar">

            <span className="bulk-count">
                {selectedIds.length} properties selected
            </span>

            <div className="bulk-buttons">
                <button
                    className="btn btn-secondary"
                    onClick={() => initModal(null,"bulk-update")}
                >
                    Update Selected
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => setDeleteModalOpen(true)}
                >
                    Delete Selected
                </button>

            </div>

        </div>
    );
}