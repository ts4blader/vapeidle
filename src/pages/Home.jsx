import React from "react";
import Hero from "../components/Hero";
import { HEADER_HERO } from "../constants/home";

export default function Home() {
  return (
    <div className="home-page">
      <Hero data={HEADER_HERO.data} labels={HEADER_HERO.labels}>
        <img src="https://picsum.photos/id/0/500" alt="placeholder" />
      </Hero>
    </div>
  );
}
