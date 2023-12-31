export async function getData() {
  const res = await fetch(
    "https://bc8b-2804-8d4-3a1-5b90-a474-8df9-6a70-8c1e.ngrok-free.app/schedule"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
