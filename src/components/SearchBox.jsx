export default function SearchBox() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="c-search col-lg-3 col-8 mt-2  p-1 rounded-3">
            <div className="input-group ">
              <input
                type="search"
                className="form-control shadow-none"
                placeholder="Search your product here..."
                readOnly
              />
              <span className="input-group-text bi bi-search"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
