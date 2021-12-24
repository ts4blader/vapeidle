import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import SectionTitle from "../components/SectionTitle";
import {
  HEADER_HERO,
  TREND_VAPE,
  VAPE,
  EJUICE,
  ACCESSORIES,
  FOLLOW_HERO,
} from "../constants/home";
import { TREND_OPTIONS, CAROUSEL_OPTIONS } from "../constants/glide-options";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <main className="home-page">
      <Hero
        action={() => history.push("/products/axis-axis")}
        data={HEADER_HERO.data}
        labels={HEADER_HERO.labels}
      >
        <img src="https://picsum.photos/id/0/500" alt="placeholder" />
      </Hero>
      {/* Trend Vape Section */}
      <section className="trend">
        <SectionTitle text="vape trend" />
        <Slider id="trend-slider" options={TREND_OPTIONS} data={TREND_VAPE} />
      </section>

      <section className="vape-carousel">
        <Carousel
          img="vape.png"
          title="Vape"
          data={VAPE}
          id="vape-carousel"
          options={CAROUSEL_OPTIONS}
        />
      </section>
      <section className="ejuice-carousel">
        <Carousel
          img="ejuice.png"
          title="E-juice"
          data={EJUICE}
          id="ejuice-carousel"
          options={CAROUSEL_OPTIONS}
        />
      </section>
      <section className="accessories-carousel">
        <Carousel
          img="handbag.png"
          title="Accessories"
          data={ACCESSORIES}
          id="accessories-carousel"
          options={CAROUSEL_OPTIONS}
        />
      </section>

      {/* Follow section */}
      <section className="follow-section">
        <Hero
          action={() => window.open("https://www.youtube.com/", "_blank")}
          data={FOLLOW_HERO.data}
          labels={FOLLOW_HERO.labels}
        >
          <video controls>
            <source src="/videos/roll_everyone.mp4" type="video/mp4" />
          </video>
        </Hero>
      </section>
    </main>
  );
}
