"use client";
import Home from "@/components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease",
      anchorPlacement: "top-bottom"
    });
  }, []);
  return (
    <h1 className="overflow-x-hidden ">
      <Home />
    </h1>
  );
}
