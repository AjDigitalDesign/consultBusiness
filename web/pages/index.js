import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/Head/head';
import Hero from "../components/HeroSection/Hero";


const Home = () => {

  return (
    <div>
      <Head title="Home" />
      <Hero/>
    </div>
  );
};

export default Home;
