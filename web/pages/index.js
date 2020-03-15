import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/Head/head";
import Hero from "../components/HeroSection/Hero";
import Cta from "../components/Content/Cta";
import HomeAbout from "../components/Content/HomeAbout";
import BestGuidance from "../components/Content/bestGuidance";

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Hero />
      <Cta />
      <HomeAbout />
      <BestGuidance />
    </div>
  );
};

export default Home;
