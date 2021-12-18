import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import SectionTitle from "../components/SectionTitle";
import { HEADER_HERO, TREND_VAPE } from "../constants/home";
import { TREND_OPTIONS } from "../constants/glide-options";

console.log(TREND_VAPE);
export default function Home() {
  return (
    <div className="home-page">
      <Hero data={HEADER_HERO.data} labels={HEADER_HERO.labels}>
        <img src="https://picsum.photos/id/0/500" alt="placeholder" />
      </Hero>

      <section className="trend">
        <SectionTitle text="vape trend" />
        <Slider id="trend-slider" options={TREND_OPTIONS} data={TREND_VAPE} />
      </section>
    </div>
  );
}
