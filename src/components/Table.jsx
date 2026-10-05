import { useEffect, useState } from "react";
import api from "../api/properties";
import Modal from "../Modal.jsx";
import HouseList from "./HouseList.jsx";
import PropertyModal from "../PropertyModal.jsx";
import Loading from "./Loading.jsx";
import Header from "./Header.jsx";
import Pagination from "./Pagination.jsx";
import BulkActions from "./BulkActions.jsx";
import Filters from "./Filters.jsx";
import TableHeader from "./TableHeader.jsx";
import NoProperties from "./NoProperties.jsx";
import PropertyPerPage from "./PropertyPerPage.jsx";
import ConfirmationModal from "./ConfirmationModal.jsx";

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

export default function Table() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [modalMode, setModalMode] = useState("");
  const [sort, setSort] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [propertyModalOpen, setPropertyModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  let visibleItems = items.filter((item) => {
    const matchesSearch =
      !search || item.title.toLowerCase().includes(search.toLowerCase());

    return matchesSearch;
  });

  if (sort === "price-low-high") {
    visibleItems.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high-low") {
    visibleItems.sort((a, b) => b.price - a.price);
  }

  if (sort === "area-low-high") {
    visibleItems.sort((a, b) => a.area - b.area);
  }

  if (sort === "area-high-low") {
    visibleItems.sort((a, b) => b.area - a.area);
  }

  if (
    [
      "Apartment",
      "House",
      "Villa",
      "Cabin",
      "Studio",
      "Duplex",
      "Penthouse",
    ].includes(sort)
  ) {
    visibleItems = visibleItems.filter((item) => item.category === sort);
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = visibleItems.slice(start, end);

  const totalPages = Math.ceil(visibleItems.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    fetchData();
  }, []);

  async function initModal(id, mode) {
    try {
      setModalMode(mode);

      if (mode === "update") {
        const property = await api.getProperty(id);
        setSelected(property);
      } else if (mode === "bulk-update") {
        setSelected({});
      } else {
        setSelected(emptyProperty);
      }

      setIsOpen(true);
    } catch (error) {
      setError(error.message);
    }
  }
  async function initPropertyModal(id) {
    try {
      const property = await api.getProperty(id);
      setSelected(property);

      setPropertyModalOpen(true);
    } catch (error) {
      setError(error.message);
    }
  }

  async function fetchData(id) {
    try {
      setLoading(true);
      setError(null);

      const data = id ? await api.getProperty(id) : await api.getProperties();

      setItems(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || "Error");
    }
  }

  async function updateData(id, data) {
    const selectedHouses = [...selectedIds];
    try {
      closeModal();
      if (selectedIds.length > 0) {
        setSelectedIds([]);
        await Promise.all(
          selectedIds.map((itemId) => api.updateProperty(itemId, data)),
        );
      } else {
        await api.updateProperty(id, data);
      }

      await fetchData();
    } catch (error) {
      setSelectedIds(selectedHouses);
      setError(error.message);
    }
  }

  async function handleDelete(id) {
    try {
      if (selected?.id === id) {
        closeModal();
      }

      if (selectedIds.length > 0) {
        await Promise.all(
          selectedIds.map((itemId) => api.deleteProperty(itemId)),
        );
        setSelectedIds([]);
      } else {
        await api.deleteProperty(id);
      }

      await fetchData();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleAddItem(data) {
    try {
      await api.createProperty(data);
      await fetchData();
      closeModal();
    } catch (error) {
      setError(error.message);
    }
  }
  function closeModal() {
    setIsOpen(false);
    setPropertyModalOpen(false);
    setSelected(null);
    setDeleteModalOpen(false)
  }
  //loading
  if (loading) {
    return <Loading />;
  }
  //Errors
  if (error) {
    return <Error error={error} fetchData={fetchData} />;
  }

  return (
    <div className="dashboard-container">
      <Header />

      {propertyModalOpen && (
        <PropertyModal item={selected} close={closeModal} />
      )}

      <main className="dashboard-content">
        <TableHeader initModal={initModal} />

        <Filters
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />

        {selectedIds.length > 0 && (
          <BulkActions
            selectedIds={selectedIds}
            initModal={initModal}
            handleDelete={handleDelete}
            setDeleteModalOpen={setDeleteModalOpen}
          />
        )}

        <div className="table-card">
          {visibleItems.length === 0 ? (
            <NoProperties initModal={initModal} />
          ) : (
            <HouseList
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              items={paginatedItems}
              initModal={initModal}
              handleDelete={handleDelete}
              initPropertyModal={initPropertyModal}
              setDeleteModalOpen={setDeleteModalOpen}
              setSelected={setSelected}
            />
          )}
          {/* items per page */}
          {visibleItems.length > 0 && (
            <div className="table-footer">
              <PropertyPerPage
                setCurrentPage={setCurrentPage}
                setItemsPerPage={setItemsPerPage}
                itemsPerPage={itemsPerPage}
              />

              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
          )}
        </div>
      </main>
      {/* edit/add modal */}
      {isOpen && (
        <Modal
          data={selected}
          updateData={updateData}
          closeModal={closeModal}
          addData={handleAddItem}
          mode={modalMode}
        />
      )}

      {deleteModalOpen && (
        <ConfirmationModal data={selected} handleDelete={handleDelete} closeModal={closeModal} selectedIds={selectedIds}/>
      )}
    </div>
  );
}
