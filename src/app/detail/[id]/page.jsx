import getSingleNewproduct from "@/newControllers/SingleNewProduct";
import Link from "next/link";

export default async function page({ params: { id } }) {
  const singleNewPro = await getSingleNewproduct(id);
  //console.log(singleNewPro)
  return (
    <>
      <div className="detail py-5 mt-5" id="detail">
        <div className="container my-3 px-4 pb-4 justify-content-center align-content-center" data-aos="fade-up" data-aos-delay="200">
          <div class="section-title text-center" data-aos="fade-up" data-aos-delay="200">
            <h1>Product Details</h1>
            <h2>Brand New </h2>
          </div>
          <div className="row g-3 d-flex justify-content-between align-items-center " data-aos="fade-up" data-aos-delay="200">
            <div className="col-md-5 col-12 p-3 rounded-4 shadow " data-aos="zoom-out" data-aos-delay="200">
              <img
                src={singleNewPro.images_url}
                className="img-fluid card-img-top rounded-2 "
              />
            </div>

            <div className="col-md-5 col-12 p-3 rounded-4 shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="fw-bold mb-2" data-aos="fade-up" data-aos-delay="200">{singleNewPro.title}</h3>
              <div className="d-flex flex-row" data-aos="fade-up" data-aos-delay="200">
                <small className="btn bi bi-arrow-down border-0 my-2 p-2">
                  In Stock
                </small>
                <p className="fw-bolder my-2 p-2">N{singleNewPro.price}</p>
              </div>

              <details className="text-wrap my-2">
                {singleNewPro.description}
              </details>

              <Link href="/detail" className="btn btncart1 rounded-3 " data-aos="fade-up" data-aos-delay="200">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
