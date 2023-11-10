
export default function page() {
  return (
    <section
      id="about"
      className=" shadow-sm py-5 about w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container" data-aos="fade-right">
        <div className="row content justify-content-center align-items-center">
          <div className="row">
            <h2
              className=" text-lg-start text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              HHY Online Store
            </h2>
          </div>
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <img src="/imgs/slide-4.jpg" className="img-fluid  rounded-2" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 text-border"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="fw-bolder text-md-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Background:
            </h3>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              ipsum aliquam et ipsa possimus atque maxime accusamus dolores.
              Quaerat vitae sunt dolores quis blanditiis iure ipsum nam, fugiat
              alias et?
            </p>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              ipsum aliquam et ipsa possimus atque maxime accusamus dolores.
              Quaerat vitae sunt dolores quis blanditiis iure ipsum nam, fugiat
              alias et?
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
