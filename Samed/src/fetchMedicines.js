export async function fetchMedicines() {
  try {
    const res = await fetch('http://localhost:5000/api/medicines');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    return [];
  }
}
