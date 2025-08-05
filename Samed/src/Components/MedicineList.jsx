import { useEffect, useState } from 'react';

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicines')
      .then((res) => res.json())
      .then((data) => setMedicines(data))
      .catch((err) => console.error('Error fetching medicines:', err));
  }, []);

  return (
    <div>
      <h1>Medicine List</h1>
      <ul>
        {medicines.map((med) => (
          <li key={med._id}>{med.name} - {med.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
