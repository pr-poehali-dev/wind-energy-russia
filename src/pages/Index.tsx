import { useState, useEffect } from "react";
import { sections } from "@/components/DocUI";
import DocLayout from "@/components/DocLayout";
import {
  SectionIntro,
  SectionSystem,
  SectionWind,
  SectionRussia,
  SectionProblems,
  SectionComparison,
  SectionConclusions,
  SectionSources,
} from "@/components/DocSections";

export default function Index() {
  const [active, setActive] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <DocLayout
      active={active}
      menuOpen={menuOpen}
      onMenuToggle={() => setMenuOpen(!menuOpen)}
      scrollTo={scrollTo}
    >
      <SectionIntro />
      <SectionSystem />
      <SectionWind />
      <SectionRussia />
      <SectionProblems />
      <SectionComparison />
      <SectionConclusions />
      <SectionSources />
    </DocLayout>
  );
}
