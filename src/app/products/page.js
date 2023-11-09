
async function getData() {
  const res = await fetch("http://localhost:3000/api/allProducts", {
    cache: "no-store",
  });
  if (!res.ok) return "products not found";

  return res.json();
}

export default async function Products() {
  // const data = await getData();

  const products = await getData();

  return (
    <div className="container mt-5" >
      <h1>All products</h1>
      <table
        className="table table-bordered table-hover tablestriped"
        border="1"
      >
        <thead>
          <tr>
            <th scope="col"> Title</th>
            <th scope="col"> Description</th>
            <th scope="col"> Price</th>
            <th scope="col"> Category</th>
            <th scope="col"> noInstock</th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products.map((item, i) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>

                <td>{item.category}</td>
                <td>{item.noInstock}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
