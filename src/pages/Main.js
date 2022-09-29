import React from "react";
import Hero from "../components/home/Hero";

const LazyWork = React.lazy(() => import("../components/home/WorkTemp"));
const LazySkills = React.lazy(() => import("../components/home/Skills"));
const LazyShowcase = React.lazy(() => import("../components/home/Showcase"));
const LazyContact = React.lazy(() => import("../components/home/ContactPage"));
const LazySkillsCards = React.lazy(() => import("../components/home/SkillsCards"));

const Main = () => {
  return (
    <>
      <main>
        <div className="main-wrapper">
          <Hero />
          <React.Suspense fallback="Loading...">
            <LazyWork />
          </React.Suspense>
          <React.Suspense fallback="Loading...">
            <LazySkillsCards />
          </React.Suspense>
          {/* <React.Suspense fallback="Loading...">
            <LazySkills />
          </React.Suspense> */}
          <React.Suspense fallback="Loading...">
            <LazyShowcase />
          </React.Suspense>
          <React.Suspense fallback="Loading...">
            <LazyContact />
          </React.Suspense>
        </div>
      </main>
    </>
  );
};

export default Main;
