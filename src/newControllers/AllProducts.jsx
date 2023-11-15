export default async function getAllData() {
    const res = await fetch("http://localhost:3000/api/allProducts", {
      cache: "no-store",
    });
    if (!res.ok) return "products not found";
  
    return res.json()
  }