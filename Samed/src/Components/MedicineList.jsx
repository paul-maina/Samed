import { useEffect, useState } from "react";

function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://animated-space-xylophone-97w7jrp997gjcx95v-5000.app.github.dev/api/medicines")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMedicines(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading medicines...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Medicine List</h1>
      <ul className="space-y-2">
        {medicines.map((med) => (
          <li
            key={med._id || med.id}
            className="border rounded-lg p-3 shadow-sm hover:shadow-md"
          >
            <h2 className="font-semibold">{med.name}</h2>
            <p className="text-gray-600">Category: {med.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
