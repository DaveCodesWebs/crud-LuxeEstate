const BASE_URL = "http://localhost:3001";

async function getProperties() {
  const res = await fetch(`${BASE_URL}/properties`);
  return res.json();
}

async function getProperty(id) {
  const res = await fetch(`${BASE_URL}/properties/${id}`);
  return res.json();
}

async function createProperty(property) {
  const res = await fetch(`${BASE_URL}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });

  return res.json();
}

async function updateProperty(id, updates) {
  const res = await fetch(`${BASE_URL}/properties/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  return res.json();
}

async function deleteProperty(id) {
  await fetch(`${BASE_URL}/properties/${id}`, {
    method: "DELETE",
  });
}

const api = {
  getProperties,
  getProperty,
  deleteProperty,
  createProperty,
  updateProperty,
};

export default api;
