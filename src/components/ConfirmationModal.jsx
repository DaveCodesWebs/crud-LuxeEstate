export default function ConfirmationModal({
  data,
  handleDelete,
  closeModal,
  selectedIds,
}) {
  const handler = () => {
    selectedIds.length > 0 ? handleDelete(null) : handleDelete(data);
    closeModal();
  };

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-modal">
        <h2>Delete selected item(s)?</h2>
        <p>This action cannot be undone.</p>

        <div className="confirmation-actions">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handler}>Delete</button>
        </div>
      </div>
    </div>
  );
}