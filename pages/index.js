import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Features from "@/components/Secciones/Features";
import Footer from "@/components/Secciones/Footer";
import Hero from "@/components/Secciones/Hero";
import Nosotros from "@/components/Secciones/Nosotros";
import Servicios from "@/components/Secciones/Servicios";
import React from "react";

function index(props) {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <Features />
      <Footer />
    </Layout>
  );
}

export default index;
