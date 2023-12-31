export default async function getData() {
    const res = await fetch("http://localhost:3000/api/newProducts", {
      cache: "no-store",
    });
    if (!res.ok) return "products not found";
  
    return res.json();
  }