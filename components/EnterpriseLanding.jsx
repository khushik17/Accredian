"use client";

import { useEffect, useState } from "react";
import CtaBanner from "./CtaBanner";
import CatFrameworkSection from "./CatFrameworkSection";
import DeliveryStepsSection from "./DeliveryStepsSection";
import ChatbotWidget from "./ChatbotWidget";
import CourseSegmentationSection from "./CourseSegmentationSection";
import DomainSection from "./DomainSection";
import EdgeSection from "./EdgeSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PartnershipsSection from "./PartnershipsSection";
import TestimonialsSection from "./TestimonialsSection";
import TrackRecordSection from "./TrackRecordSection";
import WhoShouldJoinSection from "./WhoShouldJoinSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import RevealSection from "./RevealSection";

export default function EnterpriseLanding() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/api/enterprise-data");
        const data = await response.json();
        setPartners(data.partners || []);
      } catch (error) {
        console.error("Could not load partners", error);
        setPartners(["Reliance", "HCL", "IBM", "L&T"]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }

    const frame = requestAnimationFrame(() => {
      const statsSection = document.getElementById("stats");

      if (statsSection) {
        statsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#080a2a]">
      <div className="motion-off">
        <Navbar />
        <main>
          <HeroSection />
          <TrackRecordSection />
          <PartnershipsSection partners={partners} loading={loading} />
          <SuccessStoriesSection />
          <EdgeSection />
          <DomainSection />
          <CourseSegmentationSection />
          <WhoShouldJoinSection />
          <CatFrameworkSection />
          <DeliveryStepsSection />
          <TestimonialsSection />
          <FaqSection />
        </main>
        <ChatbotWidget />
      </div>
      <RevealSection delay={520}><CtaBanner /></RevealSection>
      <RevealSection delay={560}><Footer /></RevealSection>
    </div>
  );
}
