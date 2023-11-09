
export default function Footer() {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4" >
              <div class="col-lg-5 col-md-12 footer-info" data-aos="fade-up" data-aos-delay="200" >
                <a href="/" class="logo d-flex align-items-center">
                  <span>HHY Online Store</span>
                </a>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reprehenderit officiis inventore dolorem
                  assumenda. <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reprehenderit officiis inventore dolorem
                  assumenda. <br /> <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reprehenderit officiis inventore dolorem
                  assumenda. ealier.
                </p>
                <div class="social-links mt-3">
                  <a href="/" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="/" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="/" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="/" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-6 footer-links" data-aos="fade-up" data-aos-delay="200">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <a href="/">Services</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Terms of service</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-6 footer-links" data-aos="fade-up" data-aos-delay="200">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Service 1</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Service 2</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Service 3</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Service 4</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="/">Service 5</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start" data-aos="fade-up" data-aos-delay="200">
                <h4>Contact Us</h4>
                <p>
                  Opposite Mangal Plaza <br />
                  Central Market, Kaduna State.
                  <br />
                  Nigeria <br />
                  <br />
                  <strong>Phone:</strong> +234 000 000 000
                  <br />
                  <strong>Email:</strong> hhy@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-delay="200">
          <div class="copyright">
            &copy; Copyright
            <strong>
              <span> HYY Online Store</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by 
             <a className=" text-decoration-none mx-1" href="/">  
              CloudSoft Consulting LTD
            </a>
          </div>
        </div>
      </footer>

      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center py-2"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
