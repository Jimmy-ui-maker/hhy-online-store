export default async function getSingleNewproduct(id) {
    const res = await fetch(`http://localhost:3000/api/newProducts/${id}`, {
      cache: "no-store",
    });
   return res.json()
  }