export default function Header() {
  return (
    <>
      <nav
        className=" navbar navbar-expand-md shadow-sm py-2"
        data-aos="fade-down"
        data-aos-delay="5000"
      >
        <div className="container">
          <a href="/" className="navbar-brand logo">
            <img
              className="logo rounded-2 mx-1"
              src="hhysuperstore.jpg"
              width={30}
              height={30}
            />
            HHY Online Store
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="/allProducts" className="nav-link">
                  All Products
                </a>
              </li>

              <li className="nav-item">
                <a href="/categories" className="nav-link">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a href="/accounts" className="nav-link">
                  Accounts
                </a>
              </li>
              <li className="nav-item">
                <a href="/cart" className="nav-link">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/**
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              className="logo rounded-2"
              src="hhysuperstore.jpg"
              width={40}
              height={40}
            />
            HHY Online Store
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <a href="/allProducts" className="nav-link active">
                  All products
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/categories" className="nav-link active">
                  Categories
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/accounts" className="nav-link active">
                  Accounts
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/cart" className="nav-link active">
                  Cart
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/signup" className="nav-link active">
                  Signup
                </a>
              </li>

              <li className="nav-item text-white">
                <a href="/login" className="nav-link active">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       */}
    </>
  );
}
