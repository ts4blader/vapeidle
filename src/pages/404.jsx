import React from "react";
import Image from "../components/Image";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="container">
        <Image src="404.svg" alt="404" />
        <h2>Oops! Something went wrong</h2>
        <p className="description">This page was not found</p>
        <Link to="/">
          <Button text="Go to home" />
        </Link>
      </div>
    </main>
  );
}
