import getData from "@/newControllers/AllNewProducts";
import Link from "next/link";

export default async function NewProduct() {
  const prods = await getData();
  return (
    <section id="product">
      <div className="container p-4" data-aos="fade-up" data-aos-delay="200">
        <div className="section-title" >
          <h2>You Might Like</h2>
          <p>Newly Products</p>
        </div>
        <div className="row g-4 mb-5">
        <div className="container ">
            <div className="row d-flex justify-content-center">
              <div className="c-search col-lg-3 col-8 mt-2  p-1 rounded-3">
                <Link className=" text-decoration-none" href={"/search"}>
                  <div className="input-group ">
                    <input
                      type="search"
                      className="form-control shadow-none"
                      placeholder="Search by product title..."
                    />
                    <span className="input-group-text bi bi-search"></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {prods.map((pro) => (
            <div
              key={pro._id}
              className="col-6 col-md-4 col-lg-3 mb-4 " 
            >
              <div className="card p-3" data-aos="zoom-out" data-aos-delay="200">
                <Link href={`/detail/${pro._id}`}>
                  <img src={pro.images_url} className="card-img-top " />
                </Link>
              </div>
              <h4
                className="mt-2 mb-0 text-truncate" data-aos="fade-up" data-aos-delay="200"
              >
                {pro.title}
              </h4>
              <p className="leade m-0" data-aos="fade-up" data-aos-delay="200">
                N{pro.price}
              </p>
              <Link
                href={`/detail/${pro._id}`}
                className="btn btncart rounded-3" data-aos="fade-up" data-aos-delay="200"
              >
                <i className="bi bi-cart mx-1"></i>
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
