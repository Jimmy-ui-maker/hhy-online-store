import Link from "next/link";

export default function Cart() {
  return (
    <>
      <section id="c-cart" className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center">
          <h3> Sorry...!</h3>
          <h4>The page you are looking for is still under development</h4>
          <p>will you like to go back to</p>
          <Link className="c-link text-decoration-underline " href="/">
          Home Page?
        </Link>
        </div>
      </section>
    </>
  );
}
