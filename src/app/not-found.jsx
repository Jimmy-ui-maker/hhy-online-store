import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className=" not-found container text-center">
      <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3> Oooops...</h3>
        <h4>The page you are looking for does not exist</h4>
        <h4>Or it might be still under development</h4>
        <p>will you like to go back to</p>
        <Link className="c-link text-decoration-underline " href="/">
          Home Page?
        </Link>
      </section>
    </div>
  );
}
