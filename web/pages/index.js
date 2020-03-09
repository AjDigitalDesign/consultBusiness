import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/Head/head";
import Hero from "../components/HeroSection/Hero";
import Cta from "../components/Content/Cta";

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Hero />
      <Cta />
    </div>
  );
};

export default Home;
