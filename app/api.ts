export async function getData() {
  const res = await fetch("https://wbb-games-api.onrender.com/schedule");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
